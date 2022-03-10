import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteAnswerModal from "../DeleteAnswer";
import * as answerActions from "../../store/answers";
import "./Answers.css";

const Answers = ({ question }) => {
    const [answer, setAnswer] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const answers = useSelector((state) =>
        Object.values(state.answers)
    ).reverse();

    const questionId = question.id;

    useEffect(() => {
        const loaded = async () => {
            await dispatch(answerActions.clearState());
            await dispatch(answerActions.showAnswers(questionId));
            setIsLoaded(true);
        };
        loaded();
    }, [dispatch, questionId]);

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

    return (
        isLoaded && (
            <div className="outer-answer-list-container">
                {sessionUser && question.ownerId !== sessionUser.id && (
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
                                    <span className="full-text-post">Post</span>
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
                        <div className="single-answer-container" key={idx}>
                            <div className="answer-user-info">
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
