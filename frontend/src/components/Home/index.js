import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";

const Home = ({ isLoaded }) => {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionContent;

    if (sessionUser) {
        // Logged in
        console.log("logged in");
    } else {
        // Not logged in
        console.log("not logged in");
        sessionContent = <div>Please log in to post a question.</div>;
    }

    return (
        <div className="outer-content-container">
            <div
                className={
                    sessionUser === true
                        ? "session-content logged-in"
                        : "session-content logged-out"
                }
            >
                {isLoaded && sessionContent}
            </div>
            <div className="content-container"></div>
        </div>
    );
};

export default Home;
