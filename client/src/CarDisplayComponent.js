import React from "react";
import carImage from './static/car.png';
import editIcon from './static/edit.svg';
import deleteIcon from './static/delete.svg';
import {Popover, Button} from "antd";

function CarDisplayComponent({car, deleteCar, onEditClick}) {


    return (
        <div style={{display: "flex", backgroundColor: "white", borderRadius: "40px", padding: "10px 30px", margin: "10px 0"}}>
            <img
                style={{borderRadius: "40px", maxWidth: "150px", maxHeight: "150px"}}
                src={carImage}
                alt={'car'}
            />
            <div style={{display: "flex", flexDirection: "column", width: '100%'}}>
                <p style={{
                    fontWeight: "bolder",
                    fontSize: "20px",
                    height: "fit-content",
                    alignSelf: "center"
                }}>{`${car.manufacturer} ${car.model}`}</p>
                <div style={{margin: "0 40px"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{display: "flex"}}>
                        <span>
                            <span>Color: </span>
                            <span style={{color: car.color}}>{car.color.toUpperCase()}</span>
                        </span>
                            <span style={{margin: "0 50px"}}>{`Year: ${car.year}`}</span>
                        </div>
                        <p>{`VIN: ${car.vin}`}</p>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>

                <img src={editIcon} alt={'edit'} style={{cursor: "pointer"}} onClick={onEditClick}/>

                <Popover placement={"bottom"} trigger={"click"}
                         content={
                             <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                 <span>Submit action</span>
                                 <Button danger onClick={() => deleteCar(car._id.$oid)}>Submit</Button>
                             </div>}>
                    <img src={deleteIcon} alt={'delete'} style={{cursor: "pointer"}}/>
                </Popover>
            </div>
        </div>
    )
}

export default CarDisplayComponent