import React, { useState } from "react";

function Loginform() {
    const [fName, setFName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (fName.length === 0 || password.length === 0) {
            setError(true);
        }
    }
    return (
        <>
            <div className=" container m-5">
                <h1>LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Email</label>
                        <input type="email" className="form-control"
                            onChange={e => setFName(e.target.value)}
                        />
                        {error && fName.length <= 0 ? <div className="alert alert-danger">Username can't be empty</div> : ""}
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control"
                            onChange={e => setPassword(e.target.value)}
                        />
                        {error && password.length <= 0 ? <div className="alert alert-danger">Password should be unique and can't be empty</div> : ""}
                    </div>
                    <button type="submit" disabled={!fName && !password} className="btn btn-primary">Login</button>
                </form>
            </div>
        </>
    );
}
export default Loginform;