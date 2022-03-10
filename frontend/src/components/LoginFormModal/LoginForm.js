import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

const LoginForm = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidationErrors([]);

        try {
            await dispatch(
                sessionActions.loginUser({
                    credential,
                    password,
                })
            );
        } catch (err) {
            const data = await err.json();
            data && data.errors && setValidationErrors(data.errors);
        }
    };

    return (
        <div className="login-form-container">
            <h1>Login</h1>
            <ul
                className={
                    validationErrors.length > 0
                        ? "errors-container"
                        : "hidden-error-container"
                }
            >
                {validationErrors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="credential" className="form-label">
                    Username / Email
                </label>
                <input
                    type="text"
                    name="credential"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                ></input>
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                ></input>
                <div className="log-in-form-button-container">
                    <button>Log In</button>
                    <button type="button" onClick={() => setShowModal(false)}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
