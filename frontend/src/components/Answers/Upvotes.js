import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as upvoteActions from "../../store/upvotes";
import "./Upvotes.css";

const Upvotes = ({ answer }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const upvotes = useSelector((state) => Object.values(state.upvotes));

    const answerId = answer.id;
    useEffect(() => {
        const loaded = async () => {
            await dispatch(upvoteActions.clearUpvotesInState());
            await dispatch(upvoteActions.showUpvotes(answerId));
            setIsLoaded(true);
        };
        loaded();
    }, [dispatch, answerId]);

    let voteFound;
    if (sessionUser) {
        voteFound = upvotes.find(
            (entry) =>
                entry.userId === sessionUser.id && entry.answerId === answerId
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (voteFound) {
            // User has already voted. Submitting should delete vote.
            try {
                await dispatch(upvoteActions.deleteUpvote(voteFound.id));
            } catch (err) {
                console.error("Error in deleting vote: ", err);
            }
            //
        } else {
            // User has not voted for this answer yet.
            try {
                await dispatch(upvoteActions.addUpvote(answer.id));
            } catch (err) {
                console.error("Error in adding vote: ", err);
            }
        }
    };

    return (
        isLoaded && (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="vote-container">
                        <div className="vote-count">
                            {
                                upvotes.filter(
                                    (vote) => vote.answerId === answerId
                                ).length
                            }
                        </div>
                        {sessionUser ? (
                            sessionUser.id !== answer.userId ? (
                                <button className="vote-button-element">
                                    <i
                                        className={
                                            voteFound
                                                ? "fa-solid fa-square-caret-up vote-button voted"
                                                : "fa-regular fa-square-caret-up vote-button not-voted"
                                        }
                                    ></i>
                                </button>
                            ) : (
                                <button
                                    className="vote-button-element"
                                    disabled
                                >
                                    <i className="fa-regular fa-square-caret-up vote-button disabled-vote"></i>
                                </button>
                            )
                        ) : (
                            <button className="vote-button-element" disabled>
                                <i className="fa-regular fa-square-caret-up vote-button disabled-vote"></i>
                            </button>
                        )}
                    </div>
                </form>
            </div>
        )
    );
};

export default Upvotes;
