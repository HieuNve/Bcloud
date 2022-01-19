import React from 'react';
import {Form, Modal, Select} from 'antd'
import {AppContext} from "../../../Context/AppProvider";


const Option = Select
var quyen;

function UserInfomation({username, fullname, password, email}) {
    const {isUserInfomation, setIsUserInfomation} = React.useContext(AppContext)
    const [form] = Form.useForm();
    const handleOK = () => {
        form.resetFields()
        setIsUserInfomation(false)
    }
    const handleCancel = () => {
        form.resetFields()
        setIsUserInfomation(false)
    }

    function onChange(value) {
        console.log({value});
        quyen = value;
    }

    return (
        <div>
            <Modal
                title={""}
                visible={isUserInfomation}
                onOk={handleOK}
                onCancel={handleCancel}
            >

            </Modal>
        </div>
    );

}

export default UserInfomation;