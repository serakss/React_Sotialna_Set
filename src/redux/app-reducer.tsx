import React from "react";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {authAPI} from "../api/api";
import {setUserDate, setUserDateType, setUsersDataThunk} from "./auth-reducer";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


type actionType = ReturnType<typeof initializedSuccess>


export type InitialStateType = {
    initializad: boolean
}


let initialState: InitialStateType = {
    initializad: false
}


export const appReducer = (state = initialState, action: actionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:

            return {

                ...state,
                initializad: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS}as const)

export const initialize = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(setUsersDataThunk())
    Promise.all([promise]).then(() => {

        dispatch(initializedSuccess())
    })

}




