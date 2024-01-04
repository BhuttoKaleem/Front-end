import { LOGIN, LOGOUT } from '../actions';
const userInitialState = {};
const userReducer = (state = userInitialState, action) => {
    switch (
        action.type // LOGIN, LOGOUT
    ) {
        case LOGIN:
            console.log("payload from ", action.payload);
            console.log("in Login");
            return {...state,user:{...state.user, userData: action.payload },};
        case LOGOUT:
            console.log("in Logout");
            delete state["loginUser"];
            console.log("after logout", state);
            return {...state };
    }
    return state;
};
export { userReducer };