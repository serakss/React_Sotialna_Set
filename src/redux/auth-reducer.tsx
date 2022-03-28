import React from "react";


const SET_USER_DATA = "SET_USER_DATA";


type setUserDateType = ReturnType<typeof setUserDate>

type actionType = setUserDateType;

export type InitialStateType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}


let initialState: InitialStateType = {
    id: 0,
    email: "",
    login: "",
    isAuth: false
}


export const authReducer = (state = initialState, action: actionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                login:action.data.login,
                email:action.data.email,
                id:action.data.id,
                isAuth:true

            }
        default:
            return state
    }
}

export const setUserDate = (email: string,id: number,  login: string) => ({
    type: SET_USER_DATA,
    data: { email,id, login} as const
})





