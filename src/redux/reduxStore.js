import { combineReducers, legacy_createStore as createStore } from "redux";
//import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
    chatPage: chatReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(reducers);
window.store = store;
/* const store = configureStore({
    reducer: {
        chatPage: chatReducer,
        profilePage: profileReducer,
        sidebar: sidebarReducer
    }
}) */

export default store;

