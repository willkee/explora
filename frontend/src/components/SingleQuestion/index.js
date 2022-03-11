import { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneQuestion } from "../../store/questions";
import EditQuestionModal from "../EditQuestionModal";
import DeleteQuestionModal from "../DeleteQuestion";
import Answers from "../Answers";
import "./SingleQuestion.css";

const SingleQuestion = () => {
    const { questionId } = useParams();
    const question = useSelector((state) => state.questions[questionId]);
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false);
    const [didDelete, setDidDelete] = useState(false);

    useEffect(() => {
        const loaded = async () => {
            await dispatch(getOneQuestion(questionId));
            setIsLoaded(true);
        };
        loaded();
    }, [dispatch, questionId]);

    if (!question && didDelete) {
        return <Redirect to="/" />;
    }

    return (
        isLoaded && (
            <div
                className={
                    sessionUser
                        ? "single-question-container"
                        : "single-question-container logged-out-sqc"
                }
            >
                <div className="single-question-all">
                    <div className="q-subheader-container">
                        <div className="single-q-profile">
                            <div>
                                <i className="fa-solid fa-user q-icon"></i>
                            </div>
                            <div>
                                <div className="q-author">
                                    {question.User.username}
                                </div>
                                <div className="q-date">
                                    {new Date(question.createdAt)
                                        .toDateString()
                                        .slice(4)}
                                </div>
                            </div>
                        </div>
                        <div>
                            {sessionUser &&
                                sessionUser.id === question.ownerId && (
                                    <div className="question-edit-delete">
                                        <EditQuestionModal
                                            question={question}
                                        />
                                        <DeleteQuestionModal
                                            question={question}
                                            setDidDelete={setDidDelete}
                                        />
                                    </div>
                                )}
                        </div>
                    </div>
                    <h1>{question.title}</h1>
                    <div>{question.description}</div>
                </div>
                <Answers question={question} />
            </div>
        )
    );
};

export default SingleQuestion;
