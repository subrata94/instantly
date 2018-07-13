import { createStore, combineReducers } from 'redux';

import contactReducer from "./reducers/contactReducer";

const reducers = combineReducers({
    contacts : contactReducer,
});

const configureStore = () => {
    return createStore(reducers);
}

export default configureStore;