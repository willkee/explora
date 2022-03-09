import { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneQuestion } from "../../store/questions";
import EditQuestionModal from "../EditQuestionModal";
import DeleteQuestionModal from "../DeleteQuestion";
import "./SingleQuestion.css";

const SingleQuestion = () => {
    const { questionId } = useParams();
    const question = useSelector((state) => state.questions[questionId]);
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    // console.log("sessionUser", sessionUser.id);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loaded = async () => {
            await dispatch(getOneQuestion(questionId));
            setIsLoaded(true);
        };
        loaded();
    }, [dispatch, questionId]);

    if (!question) {
        return <Redirect to="/" />;
    }

    return (
        isLoaded && (
            <div className="single-question-container">
                <div className="single-question-all">
                    <h1>{question.title}</h1>
                    <div className="q-subheader-container">
                        <div className="q-author">{question.User.username}</div>
                        <div className="q-date">
                            {new Date(question.createdAt)
                                .toDateString()
                                .slice(4)}
                        </div>
                        {sessionUser.id === question.ownerId && (
                            <div className="question-edit-delete">
                                <EditQuestionModal question={question} />
                                <DeleteQuestionModal question={question} />
                            </div>
                        )}
                    </div>
                    <div>{question.description}</div>
                </div>
                <h3>Answers</h3>
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

export default SingleQuestion;
