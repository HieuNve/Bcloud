import React, {useState} from "react";
import AppProvider from "./Context/AppProvider";
import AddUser from "./Components/Modal/AddUser/AddUser";
import UserInfomation from "./Components/Modal/UserInfomation/UserInformation";
import UserAction from "./Components/Modal/UserAction/UserAction";
import Logout from "./Components/Modal/Logout/Logout";
import {BrowserRouter, Route, Switch, useHistory} from "react-router-dom"
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

function App() {

    return (
        <>
            <BrowserRouter>
                <AppProvider>
                    <Switch>
                        <Route path={"/home"}>
                            <Home/>
                        </Route>
                        <Route path={"/"}>
                            <div className={"App"}>
                                <Login/>
                            </div>
                        </Route>
                    </Switch>
                    <AddUser/>
                    <UserInfomation/>
                    <UserAction/>
                    <Logout/>
                </AppProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
