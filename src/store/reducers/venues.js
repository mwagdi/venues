import { combineReducers } from 'redux';

import { RECIEVE_VENUES } from '../types';

const venueIds = (state=[],action) => {
    switch(action.type){
        case RECIEVE_VENUES:
            return action.venues.map(item => item.venue.id);
        default:
            return state;
    }
}

const venuesById = (state={},action) => {
    switch(action.type){
        case RECIEVE_VENUES:
            return action.venues.reduce((venueObj,item) => {
                venueObj[item.venue.id] = item.venue;
                return venueObj;
            },{});
        default:
            return state;
    }
}

export default combineReducers({
    venueIds,
    venuesById
})