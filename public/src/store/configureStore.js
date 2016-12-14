import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import rootReducer from "../reducers";



export default function configureStore (initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(ReduxThunk, logger)
    );

    return store;
}