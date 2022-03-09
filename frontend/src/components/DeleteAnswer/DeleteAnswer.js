import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as answerActions from "../../store/answers";
import "./DeleteAnswer.css";

const DeleteAnswer = ({ setShowDeleteModal, answer }) => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (sessionUser.id !== answer.userId) {
        alert(
            "Forbidden Operation: You shouldn't be here. Your IP address has been logged."
        );
        return <Redirect to="/" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(answerActions.removeAnswer(answer.id));
        setShowDeleteModal(false);
    };

    return (
        isLoaded && (
            <div className="modal-delete-answer-container">
                <h1>Are you sure you want to delete this answer?</h1>
                <form
                    className="modal-delete-answer-form-element"
                    onSubmit={handleSubmit}
                >
                    <div className="delete-answer-button-container">
                        <button className="delete-answer" type="submit">
                            Delete
                        </button>
                        <button
                            className="delete-answer-cancel"
                            type="button"
                            onClick={() => setShowDeleteModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    );
};

export default DeleteAnswer;
