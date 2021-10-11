import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <form onSubmit="">
                    <h2>Register</h2>
                    <input type="text" name="" id="" placeholder="Your Name"/><br />
                    <input type="email" name="" id="" placeholder="Email" /><br />
                    <input type="password" name="" id="" placeholder="Your Password" /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have a account <Link to="/login">Login</Link></p>
                <div>
                    --------****-------
                </div>
                <button className="btn-regular">Google Singin</button>
            </div>
        </div>
    );
};

export default Register;