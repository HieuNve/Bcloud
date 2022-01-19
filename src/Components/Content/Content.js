import React from 'react';
import "./Content.css"
import UserManagement from "../UserManagement/UserManagement";
import {AppContext} from "../../Context/AppProvider";
import Bradio from "../Bradio/Bradio";
import Weather from "../Weather/Weather";
import IOT from "../Iot/Iot";

function Content() {
    const {showUserManege, showBradio, showIot, showWeather} = React.useContext(AppContext)
    return (
        <div className={"content"}>
            {
                showUserManege ? (
                    <UserManagement/>
                ) : null
            }
            {
                showBradio ? (
                    <Bradio/>
                ) : null
            }
            {
                showWeather ? (
                    <Weather/>
                ) : null
            }
            {
                showIot ? (
                    <IOT/>
                ) : null
            }

        </div>
    );

}

export default Content;