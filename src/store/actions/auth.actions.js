import { authConstants } from './constants';

export const logout = () => {
    return dispatch => {
        try {
            dispatch({ type: authConstants.LOGOUT_REQUEST })
            localStorage.removeItem('token');
            localStorage.removeItem('expirationDate');
            localStorage.removeItem('userId');
            dispatch({ type: authConstants.LOGOUT_SUCEESS })
        } catch (err) {
            dispatch({ type: authConstants.LOGOUT_FAIL })
        }
    }
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, isSignup) => {
    return async (dispatch) => {
        try {
            dispatch({ type: authConstants.AUTH_REQUEST });
            const authData = {
                email: email,
                password: password,
                returnSecureToken: true
            };
            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDraojLXL8wAaNYBAdd9j4E1WTKnDFDffs';
            if (!isSignup) {
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDraojLXL8wAaNYBAdd9j4E1WTKnDFDffs';
            }
            const data = await fetch(url, { method: 'POST', body: authData })
            const response = await data.json();
            if (data.status === 200) {
                const expirationDate = new Date(new Date().getTime() + response.expiresIn * 1000);
                localStorage.setItem('token', response.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.localId);
                dispatch({
                    type: authConstants.AUTH_SUCEESS, payload: {
                        token: response.idToken,
                        userId: response.localId
                    }
                })
                dispatch(checkAuthTimeout(response.expiresIn));
            } else {
                dispatch({ type: authConstants.AUTH_FAIL });
            }
        } catch (error) {
            console.log(error)
        }
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch({
                    type: authConstants.AUTH_SUCEESS, payload: {
                        token,
                        userId
                    }
                })
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};