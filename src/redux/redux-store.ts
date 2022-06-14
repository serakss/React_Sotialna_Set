import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {applyMiddleware, createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { appReducer } from "./app-reducer";

let reducers = combineReducers({
    dialogsState:dialogsReducer,
   profileState:profileReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app: appReducer
});

export type RytReducerType  = typeof reducers
 export type AppStateType= ReturnType<RytReducerType>
export type StoreType= typeof store

export let store = createStore(reducers,applyMiddleware(thunkMiddleware));



