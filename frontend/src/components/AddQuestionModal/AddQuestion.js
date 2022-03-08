import { useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as questionActions from "../../store/questions";

const AddQuestion = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    if (!sessionUser) return <Redirect to="/" />;

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
        } catch (err) {
            if (err) {
                const data = await err.json();
                data && data.errors && setValidationErrors(data.errors);
            }
        }
    };

    return (
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
            </form>
        </div>
    );
};

export default AddQuestion;
