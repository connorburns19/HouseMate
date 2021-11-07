import houses from "../Objects/Houses";

export default (state, action) => {
    switch(action.type) {
        case 'SWITCH_HOUSE':
            return {
                ...state,
                currHouse: action.payload
            }
        case 'SET_USER':
            return {
                ...state,
                currUser: action.payload
            }
        default:
            return state;
    }
}