import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/questions";
import "./Questions.css";

const QuestionList = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const dispatch = useDispatch();
    const questions = useSelector((state) => {
        return Object.values(state.questions);
    });

    useEffect(() => {
        dispatch(getQuestions());
        setIsLoaded(true);
    }, [dispatch]);

    return (
        isLoaded && (
            <div className="question-container">
                {questions.map((question, idx) => (
                    <div key={idx} className="question-box">
                        <div className="question-profile">
                            <i className="fa-solid fa-user question"></i>
                            <div className="profile-desc">
                                <div className="question-username">
                                    {question.User.username}
                                </div>
                                <div className="question-date">
                                    {question.createdAt.slice(0, 10)}
                                </div>
                            </div>
                        </div>
                        <div className="question-title">{question.title}</div>
                        <div className="num-answer-text">
                            {question.Answers.length} Answers
                        </div>
                    </div>
                ))}
            </div>
        )
    );
};

export default QuestionList;
