import { combineReducers } from 'redux'
import simpleReducer from './simpleReducer'
import recordReducer from './recordReducer'
import registerReducer from './registerReducer'

export default combineReducers({
    simpleReducer,
    registerReducer,
    recordReducer
})