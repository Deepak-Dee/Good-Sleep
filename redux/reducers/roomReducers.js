import { ALL_ROOMS_SUCESS, 
    ALL_ROOMS_FAILURE,
    ROOM_DETAILS_SUCCESS,
    ROOM_DETAILS_FAILURE,
    CLEAR_ERRORS } from "../constants/roomConstants";

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

//Room detials reducer
export const roomDetailsReducer = (state={ room: {} }, action) =>{
    switch (action.type) {
        case ROOM_DETAILS_SUCCESS:
            return {
                room: action.payload.rooms
            }
        
        case ROOM_DETAILS_FAILURE:
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