import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { singInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.form || '/shop';
    console.log(location.state?.form);

    const handlGoogleLog = () => {
          singInUsingGoogle()
            .then(() => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="login-form">
            <div className="">
                <h2>Login</h2>
                <form >
                    <input type="email" name="" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New Ema-jhon? lin <Link to="register">Create-Account</Link></p>
                <div>----------or-----------</div>
                <button onClick={handlGoogleLog} className="btn-regular">Google Singin</button>
            </div>
        </div>
    );
};

export default Login;
