import React, {useState} from 'react';
import "./Login.css"
import {LockOutlined, UserOutlined} from "@ant-design/icons"
import {useHistory} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const history = useHistory()

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const inputNameHandle = e => {
        setEmail(e.target.value)
    }

    const inputPasswordHandle = e => {
        setPassword(e.target.value)
    }

    const LoginServer = () => {
        console.log({email})
        if (email == adminUser.email && password == adminUser.password) {
            console.log(email)
            history.push("/home")
        } else {
            console.log("not Match")
            setError("Email or password incorrect")
        }
    }

    const submitHandle = e => {
        e.preventDefault();
        LoginServer()
    }

    return (
        <div className={"login"}>
            <form onSubmit={submitHandle}>
                <div className={"from-inner"}>
                    <h2>Login</h2>
                    {
                        (error != "") ? (
                            <div className={"error"}>
                                {error}
                            </div>
                        ) : null
                    }
                    <div className={"form-group"}>
                        <label htmlFor={"name"}> <UserOutlined/> Email </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={inputNameHandle}
                            value={email}
                            required={true}
                        />
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor={"password"}> <LockOutlined/> Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={inputPasswordHandle}
                            value={password}
                            required={true}
                        />
                    </div>
                    <input className={"btnSubmit"} type="submit" value="Login"/>
                </div>
            </form>
        </div>
    );
}

export default Login;
