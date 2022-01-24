import React from 'react';
import {Avatar, Button, Form, Modal} from "antd";
import "./UserAction.css"
import {AppContext} from "../../../Context/AppProvider";

function UserAction() {
    const {isUserAction, setIsUserAction, setIsLogout} = React.useContext(AppContext)
    const [form] = Form.useForm();
    const handleOK = () => {
        form.resetFields()
        setIsUserAction(false)
    }
    const handleCancel = () => {
        form.resetFields()
        setIsUserAction(false)
    }

    const Logout = () => {
        setIsLogout(true)
        setIsUserAction(false)
    }
    return (
        <div>
            <Modal
                className={"modal-style"}
                visible={isUserAction}
                onOk={handleOK}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={() => {
                        Logout()
                    }}>
                        Đăng Xuất
                    </Button>,
                    <Button key="submit" type="primary">
                        Đổi Mật Khẩu
                    </Button>,
                ]}
            >
                <div className={"user-action"}>
                    <Avatar className={"avatar-user"}>A</Avatar>
                    <p className={"user-text"}>Nguyễn Văn Hiếu</p>
                    <p className={"user-text"}>Sinh viên thực tập - Bcloud</p>
                </div>

            </Modal>
        </div>
    );

}

export default UserAction;