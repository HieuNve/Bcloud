import React from 'react';
import "./Notification.css"
import {SettingOutlined} from "@ant-design/icons"

function Notification() {

    return (
        <div className={"notification"}>
            <p className={"noti-text"}>Thông báo <SettingOutlined/></p>
        </div>
    );

}

export default Notification;