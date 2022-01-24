import React from 'react';
import {Modal} from 'antd'
import {AppContext} from "../../../Context/AppProvider";


export default function Logout() {

    const {isLogout, setIsLogout} = React.useContext(AppContext)
    const handleOK = () => {
        setIsLogout(false)
        localStorage.removeItem("user")
    }
    const handleCancel = () => {
        setIsLogout(false)
    }

    return (
        <div>
            <Modal
                title={"Bạn có muốn đăng xuất"}
                visible={isLogout}
                onOk={handleOK}
                onCancel={handleCancel}
            >
            </Modal>
        </div>
    );

}