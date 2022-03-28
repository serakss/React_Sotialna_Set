import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
    dialogsState:dialogsReducer,
   profileState:profileReducer,
    usersPage:usersReducer,
    auth:authReducer,
});

export type RytReducerType  = typeof reducers
 export type AppStateType= ReturnType<RytReducerType>
export type StoreType= typeof store

export let store = createStore(reducers);

