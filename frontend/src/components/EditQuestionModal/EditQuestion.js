import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as questionActions from "../../store/questions";
import "./EditQuestion.css";

const EditQuestion = ({ setShowQuestionModal, question }) => {
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);

    const [title, setTitle] = useState(question.title);
    const [description, setDescription] = useState(question.description);
    const [validationErrors, setValidationErrors] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (sessionUser.id !== question.ownerId) {
        alert(
            "Forbidden Operation: You shouldn't be here. Your IP address has been logged."
        );
        return <Redirect to="/" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidationErrors([]);

        try {
            await dispatch(
                questionActions.editQuestion(question.id, {
                    title,
                    description,
                })
            );
            setShowQuestionModal(false);
        } catch (err) {
            const data = await err.json();
            data && data.errors && setValidationErrors(data.errors);
        }
    };

    return (
        isLoaded && (
            <div className="edit-question-container">
                <h1>Edit Question</h1>
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
                    className="edit-question-form-element"
                    onSubmit={handleSubmit}
                >
                    <div className="edit-q-inputs">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        ></input>
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="edit-q-button-container">
                        <button className="edit-q-submit" type="submit">
                            Edit
                        </button>
                        <button
                            className="edit-q-cancel"
                            type="button"
                            onClick={() => setShowQuestionModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    );
};

export default EditQuestion;
