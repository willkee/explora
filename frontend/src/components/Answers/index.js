import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteAnswerModal from "../DeleteAnswer";
import Upvotes from "./Upvotes";
import * as answerActions from "../../store/answers";
import "./Answers.css";

const Answers = ({ question }) => {
    const [answer, setAnswer] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);
    const [showAnswerForm, setShowAnswerForm] = useState(false);
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const answers = useSelector((state) =>
        Object.values(state.answers)
    ).reverse();

    const questionId = question.id;

    useEffect(() => {
        const loaded = async () => {
            setValidationErrors([]);
            setShowAnswerForm(false);
            await dispatch(answerActions.clearState());
            await dispatch(answerActions.showAnswers(questionId));
            setIsLoaded(true);
        };
        loaded();
    }, [dispatch, questionId, sessionUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidationErrors([]);

        try {
            await dispatch(answerActions.createAnswer(question.id, { answer }));
            setAnswer("");
        } catch (err) {
            const data = await err.json();
            data && data.errors && setValidationErrors(data.errors);
        }
    };

    const handleToggleAnswerForm = (e) => {
        e.preventDefault();
        setShowAnswerForm(!showAnswerForm);
        setValidationErrors([]);
    };

    return (
        isLoaded && (
            <div className="outer-answer-list-container">
                {sessionUser && question.ownerId !== sessionUser.id && (
                    <button
                        className="add-answer-toggle-container"
                        type="button"
                        onClick={handleToggleAnswerForm}
                    >
                        <i className="fa-solid fa-square-pen add-answer-toggle"></i>{" "}
                        ANSWER
                    </button>
                )}
                {sessionUser &&
                    question.ownerId !== sessionUser.id &&
                    showAnswerForm && (
                        <div className="add-answer-form-container">
                            <ul
                                className={
                                    validationErrors.length > 0
                                        ? "errors-container"
                                        : "no-errors"
                                }
                            >
                                {validationErrors.map((error, idx) => (
                                    <li key={idx}>{error}</li>
                                ))}
                            </ul>

                            <form
                                className="add-answer-form-element"
                                onSubmit={handleSubmit}
                            >
                                <label htmlFor="answer">Add an Answer</label>
                                <textarea
                                    name="answer"
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                ></textarea>
                                <div className="add-answer-button-container">
                                    <button
                                        className="add-answer-submit"
                                        type="submit"
                                    >
                                        <span className="full-text-post">
                                            Post
                                        </span>
                                        <span className="narrow-icon-button">
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setAnswer("")}
                                    >
                                        <span className="full-text-post">
                                            Clear
                                        </span>
                                        <span className="narrow-icon-button">
                                            <i className="fa-solid fa-eraser"></i>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                <div className="all-answers-container">
                    {answers.map((answer, idx) => (
                        <div
                            className={
                                sessionUser
                                    ? sessionUser.id === answer.userId
                                        ? "single-answer-container answer-owner"
                                        : "single-answer-container"
                                    : "single-answer-container"
                            }
                            key={idx}
                        >
                            <div className="answer-user-info">
                                <div className="sub-answer-user-info">
                                    <i className="fa-regular fa-user"></i>
                                    <div className="a-user-info-text">
                                        <div className="a-user-username">
                                            {answer.User.username}
                                        </div>
                                        <div>
                                            {new Date(answer.createdAt)
                                                .toDateString()
                                                .slice(4)}
                                        </div>
                                    </div>
                                </div>

                                <Upvotes answer={answer} />
                            </div>
                            <div className="answer-text">{answer.answer}</div>

                            {sessionUser &&
                                sessionUser.id === answer.userId && (
                                    <DeleteAnswerModal answer={answer} />
                                )}
                        </div>
                    ))}
                </div>
            </div>
        )
    );
};

export default Answers;
