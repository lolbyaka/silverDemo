import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import recordReducer from './Redux/RecordReducer'
import registerReducer from './Redux/RegisterReducer'

export default function configureStore(initialState={}) {
    const reducer = combineReducers({
        registerReducer,
        recordReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk)),
        
    );
}