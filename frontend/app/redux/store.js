import {legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import transactionReducer from "./transaction"

const rootReducer = combineReducers({
    transaction: transactionReducer
})

let enhancer;

if (typeof window === 'undefined') {
    enhancer = applyMiddleware(thunk);
} else {
    if (process.env.NODE_ENV === "production") {
        enhancer = applyMiddleware(thunk);
    } else {
        const logger = require("redux-logger").default;
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        enhancer = composeEnhancers(applyMiddleware(thunk, logger));
    }
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
};

export default configureStore;