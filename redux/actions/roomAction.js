import axios from 'axios';
import { ALL_ROOMS_SUCESS, ALL_ROOMS_FAILURE, CLEAR_ERRORS } from "../constants/roomConstants";
import absoluteUrl from 'next-absolute-url';

//Get all rooms
export const getRooms = (req) => async(dispatch) => {
    try {
        
        const { origin } = absoluteUrl(req);
        const { data } = await axios.get(`${origin}/api/rooms`)

        dispatch({
            type: ALL_ROOMS_SUCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type: ALL_ROOMS_FAILURE,
            payload: error.response.data.message
        })
    }
}

//Clear errors 
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}