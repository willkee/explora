import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import * as questionActions from "../../store/questions";
import "./DeleteQuestion.css";

const DeleteQuestion = ({ setShowDeleteModal, question }) => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const history = useHistory();

    if (sessionUser.id !== question.ownerId) {
        alert(
            "Forbidden Operation: You shouldn't be here. Your IP address has been logged."
        );
        return <Redirect to="/" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        history.push("/");
        await dispatch(questionActions.deleteQuestion(question.id));
    };

    return (
        isLoaded && (
            <div className="delete-question-container">
                <h1>Are you sure you want to delete this question?</h1>
                <form
                    className="delete-question-form-element"
                    onSubmit={handleSubmit}
                >
                    <div className="delete-q-button-container">
                        <button className="delete-q" type="submit">
                            Delete
                        </button>
                        <button
                            className="delete-q-cancel"
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

export default DeleteQuestion;
