import { authConstants } from './../actions/constants';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.AUTH_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.AUTH_SUCEESS:
            state = {
                ...state,
                loading: false,
                token: action.payload.userId,
                userId: action.payload.userId,
                error: null
            }
            break;
        case authConstants.AUTH_FAIL:
            state = {
                ...state,
                loading: false,
                error: true
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case authConstants.LOGOUT_SUCEESS:
            state = {
                ...state,
                loading: false,
                error: false
            }
            break;
        case authConstants.LOGOUT_FAIL:
            state = {
                ...state,
                loading: false,
                error: true
            }
            break;
    }
    return state;
};

export default reducer;

// componentDidMount() {
//     this.props.onTryAutoSignup();
// }
