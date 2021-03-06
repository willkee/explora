import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getQuestions } from "../../store/questions";
import "./Questions.css";

const QuestionList = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);

    const dispatch = useDispatch();

    const questions = useSelector((state) => {
        return Object.values(state.questions);
    });

    useEffect(() => {
        const loader = async () => {
            await dispatch(getQuestions());
            setIsLoaded(true);
        };

        loader();
    }, [dispatch]);

    const questionsReversed = questions.reverse().slice(0, 20);

    return (
        isLoaded && (
            <div className="question-container">
                {questionsReversed.map((question, idx) => (
                    <div className="single-question-outer-container-1">
                        <Link
                            key={idx}
                            className="link-to-single-question"
                            to={`/questions/${question.id}`}
                        >
                            <div
                                className={
                                    sessionUser
                                        ? sessionUser.id === question.ownerId
                                            ? "question-box question-owner-main"
                                            : "question-box"
                                        : "question-box"
                                }
                            >
                                <div className="question-profile">
                                    <i className="fa-solid fa-user question"></i>
                                    <div className="profile-desc">
                                        <div
                                            className={
                                                sessionUser
                                                    ? sessionUser.username ===
                                                      question.User.username
                                                        ? "question-username-owner"
                                                        : "question-username"
                                                    : "question-username"
                                            }
                                        >
                                            {question.User.username}
                                        </div>
                                        <div className="question-date">
                                            {new Date(question.createdAt)
                                                .toDateString()
                                                .slice(4)}
                                        </div>
                                    </div>
                                </div>

                                <div className="question-title">
                                    {question.title}
                                </div>

                                <div className="num-answer-text">
                                    {question.Answers.length === 1
                                        ? `${question.Answers.length} Answer`
                                        : `${question.Answers.length} Answers`}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        )
    );
};

export default QuestionList;
