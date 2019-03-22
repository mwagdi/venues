import {
    ADD_PARTICIPANT,
    EDIT_PARTICIPANT
} from '../types';

export const addParticipant = () => {
    const id = Math.random().toString(36).substr(2, 9);
    return {
        type: ADD_PARTICIPANT,
        id
    }
}

export const editParticipant = (id,attribute,value) => {
    return {
        type: EDIT_PARTICIPANT,
        id,
        attribute,
        value
    }
}