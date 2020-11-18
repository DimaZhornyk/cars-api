import React, {useState, useEffect} from "react";
import axios from "axios";
import {API} from './config';
import CarDisplayComponent from "./CarDisplayComponent";
import {Button} from "antd";
import CarModal from "./CarModal";
import Filter from "./Filter";

function MainPage({}) {
    const [cars, setCars] = useState([]);
    const [currentModalCar, setCurrentModalCar] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetchCars();
    }, [])

    const fetchCars = () => {
        axios.get(`${API}/get_cars`).then(res => {
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
                    <Filter/>
                    {cars.map((car) => (<CarDisplayComponent car={car} deleteCar={deleteCar} onEditClick={()=>onEditClick(car)}
                                                             key={car.vin}/>))}
                </div>
            </div>
            <CarModal carData={currentModalCar} visible={modalVisible} addNewCar={addNewCar} editCar={editCar}/>
        </>
    )
}

export default MainPage