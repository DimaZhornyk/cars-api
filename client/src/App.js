import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {API} from "./config";
import {Button} from "antd";
import Filter from "./Filter";
import CarDisplayComponent from "./CarDisplayComponent";
import CarModal from "./CarModal";

function App() {
    const [cars, setCars] = useState([]);
    const [currentModalCar, setCurrentModalCar] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetchCars();
    }, [])

    const fetchCars = () => {
        axios.post(`${API}/get_cars`).then(res => {
            if (res.data.success) setCars(res.data.cars);
        })
    }

    const fetchFilteredCars = (filter) => {
        axios.post(`${API}/get_cars`, filter).then(res => {
            if (res.data.success) setCars(res.data.cars);
            console.log(res.data.cars)
        })
    }

    const addNewCar = (data) => {
        axios.post(`${API}/add_car`, data).then(res => {
            if (res.data.success) fetchCars()
        })
    }

    const editCar = (data, id) => {
        axios.post(`${API}/edit_car`, {id: id, data_to_set: data}).then(res => {
            if (res.data.success) fetchCars()
        })
    }

    const deleteCar = (_id) => {
        console.log(_id)
        axios.post(`${API}/delete_car`, {id: _id}).then(res => {
            if (res.data.success)
                setCars(cars.filter(entry => entry._id.$oid !== _id))
        })
    }

    const onEditClick = (car) => {
        setCurrentModalCar(car);
        setModalVisible(true);
        setTimeout(() => setModalVisible(false), 0)
    }

    return (
        <>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{display: "flex", flexDirection: "column", width: "70%"}}>
                    <Button type={"dashed"} style={{margin: "40px"}} onClick={() => {
                        setCurrentModalCar(null);
                        setModalVisible(true);
                        setTimeout(() => setModalVisible(false), 0)
                    }}>Add new car</Button>
                    <Filter action={fetchFilteredCars} fetchAllCars={fetchCars}/>
                    {cars.map((car) => (
                        <CarDisplayComponent car={car} deleteCar={deleteCar} onEditClick={() => onEditClick(car)}
                                             key={car.vin}/>))}
                </div>
            </div>
            <CarModal carData={currentModalCar} visible={modalVisible} addNewCar={addNewCar} editCar={editCar}/>
        </>
    )
}

export default App;
