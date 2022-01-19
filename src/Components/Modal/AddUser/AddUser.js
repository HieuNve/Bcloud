import React from 'react';
import {Form, Input, Modal, Select} from 'antd'
import {AppContext} from "../../../Context/AppProvider";


const Option = Select
var quyen;

function AddUser() {
    const {isAddUser, setIsAddUser} = React.useContext(AppContext)
    const [form] = Form.useForm();
    const handleOK = () => {
        form.resetFields()
        setIsAddUser(false)
    }
    const handleCancel = () => {
        form.resetFields()
        setIsAddUser(false)
    }

    function onChange(value) {
        console.log({value});
        quyen = value;
    }

    return (
        <div>
            <Modal
                title={"Add Account"}
                visible={isAddUser}
                onOk={handleOK}
                onCancel={handleCancel}
            >
                <Form form={form} layout={'vertical'}>
                    <Form.Item rules={[{required: true}]}
                               label={"Username"}
                               name={'username'}>
                        <Input placeholder={"Username"}/>
                    </Form.Item>
                    <Form.Item
                        rules={[{required: true}]}
                        label={"Fullname"} name={'Fullname'}>
                        <Input placeholder={"Fullname"}/>
                    </Form.Item>
                    <Form.Item
                        rules={[{required: true}]}
                        label={"Email"} name={'email'}>
                        <Input placeholder={"Email"}/>
                    </Form.Item>
                    <Form.Item
                        rules={[{required: true}]}
                        label={"Password"} name={'matKhau'}>
                        <Input.Password placeholder={"Password"}/>
                    </Form.Item>
                    <Form.Item
                        rules={[{required: true}]}
                        label={"Confirm Password"} name={'matKhau'}>
                        <Input.Password placeholder={"Confirm Password"}/>
                    </Form.Item>
                    <Form.Item
                        rules={[{required: true}]}
                        label={"System type"} name={'quyen'}>
                        <Input.Group>
                            <Select defaultValue="" style={{width: '30%'}} onChange={onChange}>
                                <Option value="Admin">Bradio</Option>
                                <Option value="User">Weather</Option>
                                <Option value="User">IOT</Option>
                            </Select>
                        </Input.Group>
                    </Form.Item>
                    <Form.Item
                        rules={[{required: true}]}
                        label={"Role"} name={'quyen'}>
                        <Input.Group>
                            <Select defaultValue="User" style={{width: '30%'}} onChange={onChange}>
                                <Option value="Admin">Quản Trị</Option>
                                <Option value="User">Người Dùng</Option>
                            </Select>
                        </Input.Group>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );

}

export default AddUser;