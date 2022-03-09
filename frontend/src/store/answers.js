import { csrfFetch } from "./csrf";

const GET_ANSWERS = "answers/GET_ANSWERS";
const CREATE_ANSWER = "answers/CREATE_ANSWER";
const DELETE_ANSWER = "answers/DELETE_ANSWER";

export const getAnswers = (data) => ({
    type: GET_ANSWERS,
    data,
});

export const addAnswer = (data) => ({
    type: CREATE_ANSWER,
    data,
});

export const showAnswers = (questionId) => async (dispatch) => {
    const res = await csrfFetch(`/api/questions/${questionId}/answers`);

    if (res.ok) {
        const resJSON = await res.json();
        await dispatch(getAnswers(resJSON));
        return resJSON;
    }
};

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

const initialState = {};

const answerReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ANSWERS: {
            newState = { ...state };
            action.data.forEach((answer) => {
                newState[answer.id] = answer;
            });
            return newState;
        }
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
