import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css"
import Header from "../Header/Header";
import {AppContext} from "../../Context/AppProvider";
import {Col, Row} from "antd";
import Notification from "../Notification/Notification";
import Content from "../Content/Content";

function Home() {
    const {showNav, setShowNav} = React.useContext(AppContext)
    return (
        <div>
            <Header/>
            <div>
                <Row>
                    <Col span={5}>
                        <Sidebar show={showNav}/>
                    </Col>
                    <Col span={showNav ? 19: 24}>
                        <Notification/>
                        <Content/>
                    </Col>
                </Row>
            </div>

        </div>
    );

}

export default Home;