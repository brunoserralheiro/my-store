import {UPDATE_USER} from '../actions/user-actions'

export default function userReducer(state = '', action) {
    console.log('>>>   userReducer, action='+JSON.stringify(action));
    if (action.type === UPDATE_USER) {
        return action.payload.user;
    }
    return state
}