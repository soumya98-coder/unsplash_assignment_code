import { combineReducers } from 'redux'
import photoReducer from './photos.reducer';
import authReducer from './auth.reducers';

const rootReducer = combineReducers({
    photo: photoReducer,
    auth: authReducer
})

export default rootReducer;