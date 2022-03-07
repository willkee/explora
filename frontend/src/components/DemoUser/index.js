import React from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

const DemoUser = () => {
    const dispatch = useDispatch();

    const demoLogIn = async () => {
        await dispatch(sessionActions.loginUser());
    };

    return (
        <div>
            <button onClick={() => demoLogIn()}>Demo User</button>
        </div>
    );
};

export default DemoUser;
