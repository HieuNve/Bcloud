import React, {useState} from "react";
import Login from "./Components/Login/Login.jsx"
import Home from "./Components/Home/Home";
import AppProvider from "./Context/AppProvider";
import AddUser from "./Components/Modal/AddUser/AddUser";
import UserInfomation from "./Components/Modal/UserInfomation/UserInformation";
import UserAction from "./Components/Modal/UserAction/UserAction";

function App() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }
    const [user, setUser] = useState("")
    const [error, setError] = useState()

    const LoginServe = detail => {
        console.log(detail)
        if (detail.email == adminUser.email && detail.pass == adminUser.password) {
            console.log("login")
            setUser(detail.name)
        } else {
            console.log("not Match")
            setError("Email or password incorrect")
        }
    }

    const Logout = () => {
        setUser("")
    }

    return (
        <>
            <AppProvider>
                {(user != "") ? (
                    <>
                        <Home/>
                    </>
                ) : (
                    <div className={"App"}>
                        <Login Login={LoginServe} error={error}/>
                    </div>
                )}
                <AddUser/>
                <UserInfomation/>
                <UserAction/>
            </AppProvider>
        </>
    );
}

export default App;
