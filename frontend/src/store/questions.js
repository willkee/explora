import { csrfFetch } from "./csrf";

const VIEW_QUESTIONS = "questions/VIEW_QUESTIONS";
const ADD_QUESTION = "questions/ADD_QUESTION";
// const EDIT_QUESTION = "questions/EDIT_QUESTION";
// const DELETE_QUESTION = "questions/DELETE_QUESTION";

export const addQuestion = (post) => ({
    type: ADD_QUESTION,
    post,
});

export const viewQuestions = (list) => ({
    type: VIEW_QUESTIONS,
    list,
});

export const createQuestion = (data) => async (dispatch) => {
    const res = await csrfFetch("/api/questions", {
        method: "POST",
        body: JSON.stringify(data),
    });

    if (res.ok) {
        const resJSON = await res.json();
        await dispatch(addQuestion(resJSON));
        return resJSON;
    }
};

export const getQuestions = () => async (dispatch) => {
    const res = await csrfFetch("/api/questions");

    if (res.ok) {
        const resJSON = await res.json();
        await dispatch(viewQuestions(resJSON));
        return resJSON;
    }
};

const questionReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case VIEW_QUESTIONS: {
            newState = { ...state };
            action.list.questions.forEach((question) => {
                newState[question.id] = question;
            });
            return newState;
        }
        case ADD_QUESTION: {
            newState = { ...state, [action.post.id]: { ...action.post } };
            return newState;
        }
        default:
            return state;
    }
};

export default questionReducer;
