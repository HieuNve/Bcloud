import React from 'react';
import {Avatar, Form, Modal} from "antd";
import "./UserAction.css"
import {AppContext} from "../../../Context/AppProvider";

function UserAction() {
    const {isUserAction, setIsUserAction} = React.useContext(AppContext)
    const [form] = Form.useForm();
    const handleOK = () => {
        form.resetFields()
        setIsUserAction(false)
    }
    const handleCancel = () => {
        form.resetFields()
        setIsUserAction(false)
    }
    return (
        <div>
            <Modal
                className={"modal-style"}
                title={"Add Account"}
                visible={isUserAction}
                onOk={handleOK}
                onCancel={handleCancel}
            >
                <Avatar>A</Avatar>
                <p>Nguyễn Văn Hiếu</p>
            </Modal>
        </div>
    );

}

export default UserAction;