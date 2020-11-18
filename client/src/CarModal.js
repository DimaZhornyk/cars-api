import React, {useEffect, useState} from "react";
import {Button, Modal, Form, Input, InputNumber} from "antd";

function CarModal({visible, carData, addNewCar, editCar}) {
    const [visibleModal, setVisibleModal] = useState(false)

    useEffect(() => {
            setVisibleModal(true)
        }, [visible]
    )

    useEffect(() => {
        setVisibleModal(false);
    }, [])

    const onFormSubmit = (data) => {
        setVisibleModal(false);
        if (carData === null)
            addNewCar(data);
        else
            editCar(data, carData._id.$oid);
    }

    const getForm = () => {

        return (
            <Form key={carData === null ? 'form' : carData.vin} onFinish={onFormSubmit} preserve={false}
                  initialValues={carData} style={{margin: "20px 0 0 0"}}>
                <Form.Item label={"Manufacturer"} name={"manufacturer"} required>
                    <Input/>
                </Form.Item>
                <Form.Item label={"Model"} name={"model"} required>
                    <Input/>
                </Form.Item>
                <Form.Item label={"Color"} name={"color"} required>
                    <Input/>
                </Form.Item>
                <Form.Item label={"Year"} name={"year"} required>
                    <InputNumber/>
                </Form.Item>
                <Form.Item label={"VIN"} name={"vin"} required>
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }

    const onModalOk = () => {
        setVisibleModal(false)
    }

    const onModalCancel = () => {
        setVisibleModal(false)
    }

    return (
        <Modal footer={null} visible={visibleModal} onCancel={onModalCancel} onOk={onModalOk}>
            {getForm()}
        </Modal>
    )
}

export default CarModal