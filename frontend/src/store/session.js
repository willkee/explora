import { csrfFetch } from "./csrf";

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

export const setUser = (user) => ({
    type: SET_USER,
    user,
});

export const removeUser = () => ({ type: REMOVE_USER });

export const loginUser = (user) => async (dispatch) => {
    const { credential, password } = user;
    const res = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({
            credential,
            password,
        }),
    });

    if (res.ok) {
        const resJSON = await res.json();
        dispatch(setUser(resJSON.user));
        return res;
    }
};

export const restoreUser = () => async (dispatch) => {
    const res = await csrfFetch("/api/session");
    if (res.ok) {
        const resJSON = await res.json();
        dispatch(setUser(resJSON.user));
        return resJSON;
    }
};

export const logoutUser = () => async (dispatch) => {
    const res = await csrfFetch("/api/session", {
        method: "DELETE",
    });
    dispatch(removeUser());
    return res;
};

export const signupUser = (data) => async (dispatch) => {
    const { username, email, password } = data;
    const res = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });
    if (res.ok) {
        const resJSON = await res.json();
        dispatch(setUser(resJSON.user));
        return resJSON;
    }
};

const initialState = { user: null };
const sessionReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case SET_USER: {
            newState = { ...state };
            newState.user = action.user;
            return newState;
        }
        case REMOVE_USER: {
            newState = { ...state };
            newState.user = null;
            return newState;
        }
        default:
            return state;
    }
};

export default sessionReducer;
