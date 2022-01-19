import React from 'react';
import "./Header.css"
import {BarsOutlined} from "@ant-design/icons"
import {AppContext} from "../../Context/AppProvider";

function Header() {
    const {showNav, setShowNav} = React.useContext(AppContext)
    return (
        <div>
            <header>
                <BarsOutlined onClick={() => setShowNav(!showNav)}/>
            </header>

        </div>
    );

}

export default Header;