import React from 'react';
import "./UserManagement.css"
import ItemUser from "../User/ItemUser";
import {Col, Row} from "antd";
import {PlusOutlined} from "@ant-design/icons"
import {AppContext} from "../../Context/AppProvider";

function UserManagement() {
    const {setIsAddUser} = React.useContext(AppContext)
    const AddUser = () => {
        setIsAddUser(true)
        console.log("aaaaaaaaaaa")
    }

    return (
        <div className={"content"}>
            <li>
                <Row>
                    <Col span={6}></Col>
                    <Col span={6}><p className={"user"}>Username</p></Col>
                    <Col span={10}><p className={"user"}>Fullname</p></Col>
                    <Col span={2}>
                        <button className={"btn-add-user"} onClick={() => {
                            AddUser()
                        }}><PlusOutlined/> Add
                        </button>
                    </Col>
                </Row>
            </li>

            <li><ItemUser username={"Hieunve@bkav.com"} fullname={"Nguyễn Văn Hiếu"}/></li>
            <li><ItemUser username={"Hieunve@bkav.com"} fullname={"Nguyễn Văn Hiếu"}/></li>
            <li><ItemUser username={"Hieunve@bkav.com"} fullname={"Nguyễn Văn Hiếu"}/></li>
            <li><ItemUser username={"Hieunve@bkav.com"} fullname={"Nguyễn Văn Hiếu"}/></li>
        </div>
    );

}

export default UserManagement;