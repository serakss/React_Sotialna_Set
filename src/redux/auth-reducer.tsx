import React from "react";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {authAPI} from "../api/api";


const SET_USER_DATA = "SET_USER_DATA";


type setUserDateType = ReturnType<typeof setUserDate>

type actionType = setUserDateType;

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}


let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialState, action: actionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                login: action.payload.login,
                email: action.payload.email,
                id: action.payload.id,
                isAuth: action.payload.isAuth

            }
        default:
            return state
    }
}

export const setUserDate = (email: string | null, id: number | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {email, id, login, isAuth} as const
})

export const setUsersDataThunk = () => (dispatch: Dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let email = response.data.data.email;
            let id = response.data.data.id;
            let login = response.data.data.login;
            dispatch(setUserDate(email, id, login, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {

     authAPI.login(email, password, rememberMe).then(response => {
         if (response.data.resultCode === 0) {
             // @ts-ignore
             dispatch(setUsersDataThunk())
         } else{
             let message = response.data.messages.length > 0 ? response.data.messages[0]:"Some error"
                 dispatch(stopSubmit("login", {_error: message}))
         }
     })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {

            dispatch(setUserDate(null, null, null, false))
        }
    })
}

