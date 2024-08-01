import React, { useState, useEffect } from "react";
import './Login.css';
import Footor from "./Footor";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() =>{
        const auth = localStorage.getItem('user');
        if (auth){
            navigate('/charts')
        }
    },[navigate])

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.warn("email, password", email, password)
        let result = await fetch('http://localhost:5000/login', // API integrated
        {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json' 
            }
        });
        result = await result.json();
        console.warn(result)
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/charts');
        } else {
            alert("Please enter correct details ");
        }
    };
    return (
        <div>
            <div className="wrapper outside">
                <div className="container main">
                    <div className="row mainrow">
                        <div className="col right">
                            <div className="input-box">
                                <h1>Login</h1>
                                <form>
                                    <div className="input-field">
                                        <input type="email" className="input" id="email" required autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="password" className="input" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <label htmlFor="password">Password</label>
                                        <span className="forgot_password"><Link to="/forgetpassword">Forgot your password?</Link></span>
                                    </div>
                                    <div className="input-field">
                                        <button onClick={handleLogin} type="submit" className="Submit">Login</button>
                                    </div>
                                    <div className="signin">
                                        <span className="spanhh">Don't have an account?<Link to="/signup">Sign up</Link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footor />
        </div>
    );
}

export default Login;
