import { photosConstant } from './constants';

export const getPhotosByTopic = (topic) => {
    return async (dispatch) => {
        try {
            dispatch({ type: photosConstant.GET_PHOTOS_BY_TOPIC_REQUEST })
            const data = await fetch('https://api.unsplash.com/topics/' + topic + '/photos?page=1&per_page=20', {
                method: "GET",
                headers: {
                    'Authorization': 'Client-ID 6n3kPK2FjvxghUYArPUop5VJIqYubehe_a_WHdxh2mQ',
                    'X-Total': 5
                }
            })
            if (data.status === 200) {
                const res = await data.json()
                dispatch({ type: photosConstant.GET_PHOTOS_BY_TOPIC_SUCCESS, payload: res })
            } else {
                dispatch({ type: photosConstant.GET_PHOTOS_BY_TOPIC_FAIL })
            }
        } catch (err) {
            console.log(err)
        }
    }
}