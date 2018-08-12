import  initialValue  from '../utils/InitialValue'
const initialState = {
    value: initialValue
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            console.log('FETCH_POST_REDUCER');
            return {
                ...state,
                items: action.payload
            }
        case 'NEW_POSTS':
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}