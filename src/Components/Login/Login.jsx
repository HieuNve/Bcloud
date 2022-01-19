import React, {useState} from 'react';
import "./Login.css"
import {LockOutlined, UserOutlined} from "@ant-design/icons"

function Login({Login, error}) {
    const [detail, setDetail] = useState({email: "", pass: ""})
    const submitHandle = e => {
        e.preventDefault();
        Login(detail);
    }

    const inputNameHandle = e => {
        setDetail({...detail, email: e.target.value})
    }

    const inputPasswordHandle = e => {
        setDetail({...detail, pass: e.target.value})
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
                            value={detail.email}
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
                            value={detail.pass}
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
