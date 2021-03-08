import { photosConstant } from './../actions/constants';

const initState = {
    photos: [],
    loading: false,
    error: false
}

const photoReducer = (state = initState, action) => {
    switch (action.type) {
        case photosConstant.GET_PHOTOS_BY_TOPIC_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case photosConstant.GET_PHOTOS_BY_TOPIC_SUCCESS:
            state = {
                ...state,
                photos: action.payload,
                loading: false,
                error: false
            }
            break;
        case photosConstant.GET_PHOTOS_BY_TOPIC_FAIL:
            state = {
                ...state,
                loading: false,
                error: true
            }
            break;
    }
    return state;
}

export default photoReducer;