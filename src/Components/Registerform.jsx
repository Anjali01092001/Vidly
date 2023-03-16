import React, { useState } from "react";
import validator from "validator";

function Registerform() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('')
    const [error, setError] = useState(false);

    const RegExp = /\S+@\S+\.\S+/;
    const validateEmail = (value) => {
        if (validator.isEmail(value, {
            minSymbols: RegExp
        })) {
            setEmail('valid')
        } else {
            setEmail('Invalid Email! ')
        }
    }
    const validatePassword = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setPassword('Password looks great!')
        } else {
            setPassword('Your Password is not Strong')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length === 0 || password.length === 0 || username.length === 0) {
            setError(true);
        }
        alert(email,password,username);
    }
    return (
        <>
            <div className=" container m-5">
                <h1>Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Email</label>
                        <input type="email" className="form-control"
                            onChange={e => validateEmail(e.target.value)}
                        />
                        {error === '' ? null : <div className="alert alert-warning">{email}</div>}
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control"
                            onChange={e => validatePassword(e.target.value)}
                        />
                        {error === '' ? null : <div className="alert alert-warning">{password}</div>}
                    </div>
                    <div className="mb-3">
                        <label for="username" className="form-label">Name</label>
                        <input type="text" className="form-control"
                            onChange={e => setUsername(e.target.value)}
                        />
                        {error && username.length <= 0 ? <div className="alert alert-warning">Username should be unique and can't be</div> : ""}
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </>
    );
}
export default Registerform;