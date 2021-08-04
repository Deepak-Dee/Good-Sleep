import { combineReducers } from "redux";
import allroomsReducer from './roomReducers';

const reducer = combineReducers({
    allRooms: allroomsReducer
})

export default reducer