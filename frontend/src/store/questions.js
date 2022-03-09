import { csrfFetch } from "./csrf";

const VIEW_QUESTIONS = "questions/VIEW_QUESTIONS";
const VIEW_ONE_QUESTION = "questions/VIEW_ONE_QUESTION";
const ADD_QUESTION = "questions/ADD_QUESTION";
const EDIT_QUESTION = "questions/EDIT_QUESTION";
const DELETE_QUESTION = "questions/DELETE_QUESTION";

export const addQuestion = (post) => ({
    type: ADD_QUESTION,
    post,
});

export const viewQuestions = (list) => ({
    type: VIEW_QUESTIONS,
    list,
});

export const viewQuestion = (item) => ({
    type: VIEW_ONE_QUESTION,
    item,
});

export const questionEdit = (edit) => ({
    type: EDIT_QUESTION,
    edit,
});

export const questionToDelete = (idToDelete) => ({
    type: DELETE_QUESTION,
    idToDelete,
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

export const getOneQuestion = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/questions/${id}`);
    if (res.ok) {
        const resJSON = await res.json();
        await dispatch(viewQuestion(resJSON));
        return resJSON;
    }
};

export const editQuestion = (id, data) => async (dispatch) => {
    const res = await csrfFetch(`/api/questions/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
    });
    const resJSON = await res.json();
    await dispatch(questionEdit(resJSON));
    return resJSON;
};

export const deleteQuestion = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/questions/${id}`, {
        method: "DELETE",
    });

    if (res.ok) {
        const { id } = await res.json();
        dispatch(questionToDelete(id));
        return id;
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
        case VIEW_ONE_QUESTION: {
            newState = { ...state, [action.item.id]: { ...action.item } };
            return newState;
        }
        case ADD_QUESTION: {
            newState = {
                ...state,
                [action.post.id]: { ...action.post },
            };
            return newState;
        }
        case EDIT_QUESTION: {
            newState = {
                ...state,
                [action.edit.id]: { ...action.edit },
            };
            return newState;
        }
        case DELETE_QUESTION: {
            newState = { ...state };
            delete newState[action.idToDelete];
            return newState;
        }
        default:
            return state;
    }
};

export default questionReducer;
