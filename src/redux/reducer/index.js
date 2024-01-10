import { LOGIN, LOGOUT, UPDATE_USER } from '../actions';
const userInitialState = {};
const userReducer = (state = userInitialState, action) => {
    switch (
        action.type // LOGIN, LOGOUT
    ) {
        case LOGIN:
            return {...state, userData: action.payload };
        case LOGOUT:
            delete state["userData"];
            console.log("after logout", state);
            return {...state };
        case UPDATE_USER:
            return {
                ...state,
                userData:action.payload
            };
    }
    return state;
};
export { userReducer };