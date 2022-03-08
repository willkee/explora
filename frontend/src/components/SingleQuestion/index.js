import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneQuestion } from "../../store/questions";
import EditQuestionModal from "../EditQuestionModal";
import "./SingleQuestion.css";

const SingleQuestion = () => {
    const { questionId } = useParams();
    const question = useSelector((state) => state.questions[questionId]);
    const dispatch = useDispatch();

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loaded = async () => {
            await dispatch(getOneQuestion(questionId));
            setIsLoaded(true);
        };
        loaded();
    }, [dispatch, questionId]);

    return (
        isLoaded && (
            <div className="single-question-container">
                <h1>{question.title}</h1>
                <div>{question.User.username}</div>
                <div>
                    {new Date(question.createdAt).toDateString().slice(4)}
                </div>
                <EditQuestionModal question={question} />
                <div>{question.description}</div>
                <h3>Answers</h3>
                <div className="all-answers-container">
                    {question.Answers.map((answer, idx) => (
                        <div className="single-answer-container" key={idx}>
                            <div>{answer.User.username}</div>
                            <div>Answer: {answer.answer}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    );
};

export default SingleQuestion;
