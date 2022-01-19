import React from 'react';
import "./Sidebar.css"
import {AppContext} from "../../Context/AppProvider";
import {AreaChartOutlined, CloudServerOutlined, ControlOutlined, DotChartOutlined} from "@ant-design/icons"


function Sidebar({show}) {
    const {setShowBradio, setShowUserManege, setShowIot, setShowWeather} = React.useContext(AppContext)

    const UserManegement = () => {
        setShowUserManege(true)
        setShowBradio(false)
        setShowIot(false)
        setShowWeather(false)
    }

    const Bradio = () => {
        setShowUserManege(false)
        setShowBradio(true)
        setShowIot(false)
        setShowWeather(false)
    }
    const Weather = () => {
        setShowUserManege(false)
        setShowBradio(false)
        setShowIot(false)
        setShowWeather(true)
    }
    const IOT = () => {
        setShowUserManege(false)
        setShowBradio(false)
        setShowIot(true)
        setShowWeather(false)
    }
    return (
        <div className={show ? "sidenav active" : "sidenav"}>
            <ul>
                <li>
                    <button onClick={() => {
                        UserManegement()
                    }}>
                        <CloudServerOutlined className={"icon-slide-bar"}/>
                        Quản lý người dùng
                    </button>
                </li>
                <li>
                    <button onClick={() => {
                        Bradio()
                    }}>
                        <DotChartOutlined className={"icon-slide-bar"}/>
                        Bradio
                    </button>
                </li>
                <li>
                    <button onClick={() => {
                        Weather()
                    }}>
                        <AreaChartOutlined className={"icon-slide-bar"}/>
                        Weather
                    </button>
                </li>
                <li>
                    <button onClick={() => {
                        IOT()
                    }}>
                        <ControlOutlined className={"icon-slide-bar"}/>
                        IOT
                    </button>
                </li>

            </ul>
        </div>
    );

}

export default Sidebar;