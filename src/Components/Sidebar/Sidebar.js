import React from 'react';
import "./Sidebar.css"
import {LogoutOutlined} from "@ant-design/icons"

function Sidebar({show}) {
    return (
        <div className={show ? "sidenav active" : "sidenav"}>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li><LogoutOutlined/> Logout</li>
            </ul>
        </div>
    );

}

export default Sidebar;