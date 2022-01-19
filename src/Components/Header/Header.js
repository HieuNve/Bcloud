import React from 'react';
import "./Header.css"
import {BarsOutlined} from "@ant-design/icons"
import {AppContext} from "../../Context/AppProvider";
import {Avatar, Collapse} from "antd";

const {Panel} = Collapse;

function Header() {
    const {showNav, setShowNav, setIsUserAction} = React.useContext(AppContext)

    const showAction = () => {
        setIsUserAction(true)
    }


    return (
        <div>
            <header>
                <BarsOutlined onClick={() => setShowNav(!showNav)}/>
                <Avatar className={"avatar"} onClick={() => {
                    showAction()
                }}> A </Avatar>
            </header>
        </div>
    );

}

export default Header;