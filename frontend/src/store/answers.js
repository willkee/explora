import { csrfFetch } from "./csrf";

const CREATE_ANSWER = "answers/CREATE_ANSWER";
const DELETE_ANSWER = "answers/DELETE_ANSWER";

export const addAnswer = (data) => ({
    type: CREATE_ANSWER,
    data,
});

export const createAnswer = (questionId, data) => async (dispatch) => {
    const res = await csrfFetch(`/api/questions/${questionId}/answers`, {
        method: "POST",
        body: JSON.stringify(data),
    });

    if (res.ok) {
        const resJSON = await res.json();
        await dispatch(addAnswer(resJSON));
        return resJSON;
    }
};

const answerReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case CREATE_ANSWER: {
            newState = {
                ...state,
                [action.data.id]: { ...action.data },
            };
            return newState;
        }
        case DELETE_ANSWER: {
            newState = { ...state };
            // TODO
            return newState;
        }
        default:
            return state;
    }
};

export default answerReducer;
