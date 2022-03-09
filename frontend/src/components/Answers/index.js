import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as answerActions from "../../store/answers";

const Answers = ({ question }) => {
    const [answer, setAnswer] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidationErrors([]);

        try {
            await dispatch(answerActions.createAnswer(question.id, { answer }));
        } catch (err) {
            const data = await err.json();
            data && data.errors && setValidationErrors(data.errors);
        }
    };

    return (
        isLoaded && (
            <div>
                <h3>Answers</h3>
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
                        <button type="submit">Post</button>
                    </form>
                </div>
                <div className="all-answers-container">
                    {question.Answers.map((answer, idx) => (
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
                        </div>
                    ))}
                </div>
            </div>
        )
    );
};

export default Answers;
