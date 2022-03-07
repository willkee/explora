import React from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./DemoUser.css";

const DemoUser = () => {
    const dispatch = useDispatch();
    const demoLogin = async (e) => {
        e.preventDefault();

        try {
            await dispatch(
                sessionActions.loginUser({
                    credential: "Demo",
                    password: "demopassword",
                })
            );
        } catch (err) {
            console.error("Error: ", err);
        }
    };

    return (
        <div>
            <form onSubmit={demoLogin}>
                <button className="nav-link demo-link">Demo User</button>
            </form>
        </div>
    );
};

export default DemoUser;
