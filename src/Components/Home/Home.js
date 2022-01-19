import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css"
import Header from "../Header/Header";
import {AppContext} from "../../Context/AppProvider";

function Home() {
    const {showNav, setShowNav} = React.useContext(AppContext)
    return (
        <div>
            <Header/>
            <Sidebar show={showNav}/>

        </div>
    );

}

export default Home;