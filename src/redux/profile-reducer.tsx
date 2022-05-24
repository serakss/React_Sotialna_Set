import React from "react";
import { Dispatch } from "redux";
import {profileAPI, usersAPI } from "../api/api";
import {ActionType, stateType} from "./store";

let initialState = {
    postData: [
        {id: "1", message: "Hi, how are you?", likesCount: 12},
        {id: "2", message: "It's my first post", likesCount: 5},
        {id: "3", message: "aaaaaaaaaaaaaaa", likesCount: 5},
    ],
   // newPostText: "",
    profile: null,
    status:""
}

export const profileReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case "ADD-POST": {
            /* let newPost = {id: "1", message: state.newPostText, likesCount: 12};
             let stateCopy = {...state};
             stateCopy.postData = [...state.postData];
             stateCopy.postData.push(newPost);
             stateCopy.newPostText = "";
             return stateCopy*/
            return {
                ...state,
               // newPostText: "",
                postData: [...state.postData,{id: "1", message: action.newTextPost, likesCount: 12}]
            }

        }
        case "UPDATE-NEW-POST-TEX": {

            return {...state,newPostText: action.newText}
        }
        case "SET_USER_PROFILE":{
            return {...state,profile:action.profile.photos.large}
        }
        case "SET_STATUS":{
            return {...state,status: action.status}
        }
        default:
            return state
    }
}


export const updateNewMessageTextAC = (body: string) => {
    return {type: "UPDATE-NEW-MESSAGE-TEXT", body} as const
}
export const sendMessageAC = (newMessage:string) => {
    return {type: "SEND-MESSAGE", newMessage} as const
}

export const setUserProfileAC =(profile:any)=>{
    return{type:"SET_USER_PROFILE",profile} as const
}

export const setStatusAC =(status:string)=>{
    return {type:"SET_STATUS",status} as const
}

export const getUserProfileThunk=(userId:string)=>(dispatch: Dispatch)=>{
    usersAPI.getPrpfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data));
    });
}

export const getUsersSatatusThunk =(userId:string)=>(dispatch: Dispatch)=>{
 profileAPI.getStatus(userId).then(response =>{
     dispatch(setStatusAC(response.data))
 })}

export const updateStatusThunk =(status:string)=>(dispatch: Dispatch)=>{
    profileAPI.updateStatus(status).then(response=>{
        if(response.data.resultCode === 0){
            dispatch(setStatusAC(status))
        }
    })
}

