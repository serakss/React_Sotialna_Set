import React from "react"
import {ActionType, stateType} from "./store";
import {AppStateType} from "./redux-store";


let initialState = {
    messages: [
        {id: "1", message: "Hi"},
        {id: "2", message: "How is you it?"},
        {id: "3", message: "Yo"},
        {id: "4", message: "ccccc"},
        {id: "5", message: "tttttt"},
        {id: "6", message: "yyyyyyy"},
    ],
    dialogs: [
        {id: "1", name: "Dymych"},
        {id: "2", name: "Andrey"},
        {id: "3", name: "Sveta"},
        {id: "4", name: "Sasha"},
        {id: "5", name: "Viktor"},
        {id: "6", name: "Valera"},
    ]
   // newMessageBody: ""
}


export const dialogsReducer = (state = initialState, action: ActionType) => {


    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {...state, newMessageBody: action.body};
        }
        case "SEND-MESSAGE": {
            return {
                ...state,
               // newMessageBody: "",
                messages: [...state.messages, {id: "1", message: action.newMessage}]
            };
        }
        default:
            return state
    }
}

export const addPostAC = (newTextPost:string) => {
    return {type: "ADD-POST",newTextPost} as const

}

export const updateNewPostTextAC = (newText: string) => {
    return {type: "UPDATE-NEW-POST-TEX", newText} as const
}

