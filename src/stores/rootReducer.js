import { combineReducers } from 'redux'
import editorValueReducer from '../reducers/editorValueReducer'
export default combineReducers({
     value: editorValueReducer
});