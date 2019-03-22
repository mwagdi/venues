import { combineReducers } from 'redux';

import venues from './venues';
import participants from './participants';

export default combineReducers({
    venues,
    participants
})