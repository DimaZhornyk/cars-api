import React, {useState} from "react";
import {Input, Select, Button} from "antd";


const {Option} = Select;

function Filter({action, fetchAllCars}) {
    const [inputValue, setInputValue] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");

    const handleSelectChange = (value) => {
        setSelectedFilter(value);
    }

    const handleSubmit = () => {
        if (inputValue === "")
            fetchAllCars();
        else {
            let res = {}
            if (selectedFilter === "year")
                res[selectedFilter] = Number.parseInt(inputValue);
            else
                res[selectedFilter] = inputValue;
            action({filter: res});
        }
    }

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Select onChange={handleSelectChange} style={{width: "150px"}}>
                <Option value="manufacturer">Manufacturer</Option>
                <Option value="model">Model</Option>
                <Option value="year">Year</Option>
                <Option value="color">Color</Option>
            </Select>
            <Input disabled={selectedFilter === ""} style={{width: "40%", margin: "0px 15px"}}
                   onChange={onInputChange}/>
            <Button disabled={selectedFilter === ""} onClick={handleSubmit}>Filter</Button>
        </div>
    )
}

export default Filter