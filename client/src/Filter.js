import React, {useState} from "react";
import {Input, Select} from "antd";


const {Option} = Select;

function Filter({}) {

    const [selectedFilter, setSelectedFilter] = useState("");

    const handleSelectChange = (value) => {
        setSelectedFilter(value);
    }

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Select onChange={handleSelectChange} style={{width: "150px", margin: "0 10px 0 0 "}}>
                <Option value="manufacturer">Manufacturer</Option>
                <Option value="model">Model</Option>
                <Option value="year">Year</Option>
                <Option value="color">Color</Option>
            </Select>
            <Input disabled={selectedFilter === ""} style={{width: "40%"}}/>
        </div>
    )
}

export default Filter