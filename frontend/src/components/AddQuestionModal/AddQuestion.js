import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as questionActions from "../../store/questions";

const AddQuestion = ({ setShowQuestionModal }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidationErrors([]);

        try {
            await dispatch(
                questionActions.createQuestion({
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
            <div className="add-question-container">
                <h1>Add Question</h1>
                <ul className="errors-container">
                    {validationErrors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></input>
                    <button type="submit">Post</button>
                    <button
                        type="button"
                        onClick={() => setShowQuestionModal(false)}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        )
    );
};

export default AddQuestion;
