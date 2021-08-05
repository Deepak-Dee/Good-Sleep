import { ALL_ROOMS_SUCESS, ALL_ROOMS_FAILURE, CLEAR_ERRORS } from "../constants/roomConstants";

//All room reducer
export const allRoomsReducer = (state={rooms:[]}, action) =>{
    switch (action.type) {
        case ALL_ROOMS_SUCESS:
            return {
                roomsCount: action.payload.roomsCount,
                resPerPage: action.payload.resPerPage,
                filteredRoomsCount: action.payload.filteredRoomsCount,
                rooms: action.payload.rooms
            }
        
        case ALL_ROOMS_FAILURE:
            return {
                error: action.payload
            }
    
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}