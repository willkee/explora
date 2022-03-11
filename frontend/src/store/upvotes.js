import { csrfFetch } from "./csrf";

const GET_UPVOTES = "upvotes/GET_UPVOTES";
const ADD_UPVOTE = "upvotes/ADD_UPVOTE";
const DELETE_UPVOTE = "upvotes/DELETE_UPVOTE";
const CLEAR_STATE = "upvotes/CLEAR_STATE";

export const getUpvotes = (data) => ({
    type: GET_UPVOTES,
    data,
});

export const createUpvote = (data) => ({
    type: ADD_UPVOTE,
    data,
});

export const removeUpvote = (idToDelete) => ({
    type: DELETE_UPVOTE,
    idToDelete,
});

export const clearUpvotesInState = () => ({ type: CLEAR_STATE });

//

export const showUpvotes = (answerId) => async (dispatch) => {
    const res = await csrfFetch(`/api/answers/${answerId}/upvotes`);

    if (res.ok) {
        const resJSON = await res.json();
        await dispatch(getUpvotes(resJSON));
        return resJSON;
    }
};

export const addUpvote = (answerId) => async (dispatch) => {
    const res = await csrfFetch(`/api/answers/${answerId}/upvotes`, {
        method: "POST",
        body: JSON.stringify({ answerId }),
    });

    if (res.ok) {
        const resJSON = await res.json();
        await dispatch(createUpvote(resJSON));
        return resJSON;
    }
};

export const deleteUpvote = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/upvotes/${id}`, {
        method: "DELETE",
    });
    if (res.ok) {
        const { id } = await res.json();
        dispatch(removeUpvote(id));
        return id;
    }
};

export const clearState = () => async (dispatch) => {
    dispatch(clearUpvotesInState());
};

const initialState = {};
const upvoteReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_UPVOTES: {
            newState = { ...state };
            action.data.forEach((upvote) => {
                newState[upvote.id] = upvote;
            });
            return newState;
        }
        case ADD_UPVOTE: {
            newState = { ...state, [action.data.id]: action.data };

            console.log("ADD UPVOTE ACTION DATA", action.data);
            return newState;
        }
        case DELETE_UPVOTE: {
            newState = { ...state };
            delete newState[action.idToDelete];
            return newState;
        }
        case CLEAR_STATE: {
            return {};
        }
        default:
            return state;
    }
};

export default upvoteReducer;
