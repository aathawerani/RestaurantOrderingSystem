import { configureStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'


export const configStore = () => {
    const store = configureStore(
        combineReducers({
            dishes: Dishes
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}