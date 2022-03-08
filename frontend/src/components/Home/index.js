import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import QuestionList from "../Questions";

const Home = ({ isLoaded }) => {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionContent;

    if (sessionUser) {
        // Logged in
        sessionContent = (
            <div className="message-loggedin">
                <i class="fa-regular fa-square-plus"></i>
                <span>ADD QUESTION</span>
            </div>
        );
    } else {
        // Not logged in
        sessionContent = (
            <div className="message-notloggedin">
                Please log in to post a question.
            </div>
        );
    }

    return (
        <div className="outer-content-container">
            <div
                className={
                    sessionUser ? "content-logged-in" : "content-logged-out"
                }
            >
                {isLoaded && sessionContent}
            </div>
            <div className="content-container">
                <QuestionList />
            </div>
        </div>
    );
};

export default Home;
