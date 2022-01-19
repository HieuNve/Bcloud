import React from 'react';
import "./ItemUser.css"
import {DeleteOutlined, EditOutlined, InfoCircleOutlined} from "@ant-design/icons"
import {Avatar, Col, Row} from "antd"
import {AppContext} from "../../Context/AppProvider";

function ItemUser({username, fullname}) {
    const {setIsUserInfomation} = React.useContext(AppContext)

    const UserInfor = () => {
        setIsUserInfomation(true)
    }

    return (
        <div className={"item-user"}>
            <div className={"item-user-inner"}>
                <Row>
                    <Col span={5}><p className={"text-user"}><Avatar>{username?.charAt(0).toUpperCase()}</Avatar></p>
                    </Col>
                    <Col span={5}><p className={"text-user"}>{username}</p></Col>
                    <Col span={5}><p className={"text-user"}>{fullname}</p></Col>
                    <Col span={1}><p className={"text-user"} onClick={() =>
                        UserInfor()
                    }><InfoCircleOutlined/></p></Col>
                    <Col span={1}><p className={"text-user"}><EditOutlined/></p></Col>
                    <Col span={1}><p className={"text-user"}><DeleteOutlined/></p></Col>
                </Row>
            </div>
        </div>
    );

}

export default ItemUser;