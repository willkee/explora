import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import QuestionList from "../Questions";
import AddQuestionModal from "../AddQuestionModal";
import * as sessionActions from "../../store/session";

const Home = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const restore = async () =>
            await dispatch(sessionActions.restoreUser());
        setIsLoaded(true);

        restore();
    }, [dispatch]);

    let sessionContent;
    if (sessionUser) {
        // Logged in
        sessionContent = <AddQuestionModal />;
    } else {
        // Not logged in
        sessionContent = (
            <div className="message-notloggedin">
                Please log in to post a question.
            </div>
        );
    }

    return (
        isLoaded && (
            <div
                className={
                    sessionUser
                        ? "outer-content-container content-container-logged-in"
                        : "outer-content-container"
                }
            >
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
        )
    );
};

export default Home;
