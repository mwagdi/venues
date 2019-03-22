import { combineReducers } from 'redux';
import {
    ADD_PARTICIPANT,
    EDIT_PARTICIPANT,
    RECIEVE_VENUES
} from '../types';

const participantIds = (state=[],action) => {
    switch(action.type){
        case ADD_PARTICIPANT:
            return [...state,action.id];
        case RECIEVE_VENUES:
            return [];
        default:
            return state;
    }
}

const participantsById = (state={},action) => {
    switch (action.type) {
        case ADD_PARTICIPANT:
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    name: "",
                    vote: null
                }
            };
        case EDIT_PARTICIPANT:
            const toEdit = {...state[action.id]};
            toEdit[action.attribute] = action.value;
            return {
                ...state,
                [action.id]: toEdit
            }
        case RECIEVE_VENUES:
            return {};
        default:
            return state;
    }
}

export default combineReducers({
    participantIds,
    participantsById
})