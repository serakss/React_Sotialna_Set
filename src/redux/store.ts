import React from "react";
import {addPostAC, dialogsReducer, updateNewPostTextAC} from "./dialogs-reducer";
import {profileReducer, sendMessageAC, setUserProfileAC, updateNewMessageTextAC} from "./profile-reducer";

/*let rerenderEntireTree = (state: stateType) => {
    console.log("state changed")
}*/

export type storeType = {
    _state: stateType,
    getState: () => stateType
    _rerenderEntireTree: (state: stateType) => void,
    addPost: () => void,
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}
/*type AddPostActionType = {
    type: "ADD-POST"
}*/

/*type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEX"
    newText: string
}*/
type AddPostActionType = ReturnType<typeof addPostAC>
type ChangeNewTextActionType = ReturnType<typeof updateNewPostTextAC>
type ChangeNewMessageBodyType = ReturnType<typeof updateNewMessageTextAC>
type SendMessageType = ReturnType<typeof sendMessageAC>
type setUserProfileType = ReturnType<typeof setUserProfileAC>

export type ActionType = AddPostActionType | ChangeNewTextActionType | ChangeNewMessageBodyType | SendMessageType | setUserProfileType;

export type stateType = typeof state;


export let store: storeType = {
    _state: {
        postData: [
            {id: "1", message: "Hi, how are you?", likesCount: 12},
            {id: "2", message: "It's my first post", likesCount: 5},
            {id: "3", message: "aaaaaaaaaaaaaaa", likesCount: 5},
        ],
        dialogs: [
            {id: "1", name: "Dymych"},
            {id: "2", name: "Andrey"},
            {id: "3", name: "Sveta"},
            {id: "4", name: "Sasha"},
            {id: "5", name: "Viktor"},
            {id: "6", name: "Valera"},
        ],
        messages: [
            {id: "1", message: "Hi"},
            {id: "2", message: "How is you it?"},
            {id: "3", message: "Yo"},
            {id: "4", message: "ccccc"},
            {id: "5", message: "tttttt"},
            {id: "6", message: "yyyyyyy"},
        ],
        newPostText: "",
        newMessageBody: "",
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree(state: stateType) {

    },
    addPost() {
        let post = {id: "3", message: this._state.newPostText, likesCount: 0};
        this._state.postData.push(post)
        this._state.newPostText = ""
        this._rerenderEntireTree(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.newPostText = newText
        this._rerenderEntireTree(this._state);
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    dispatch(action: ActionType) {

       dialogsReducer(this._state,action)
       // profileReducer(this._state,action)
        this._rerenderEntireTree(this._state)

        /*switch (action.type) {
            case "ADD-POST": {
                let post = {id: "3", message: this._state.newPostText, likesCount: 0};
                this._state.postData.push(post)
                this._state.newPostText = ""
                this._rerenderEntireTree(this._state);
                return
            }
            case "UPDATE-NEW-POST-TEX": {
                this._state.newPostText = action.newText
                this._rerenderEntireTree(this._state);
                return;
            }
            case "UPDATE-NEW-MESSAGE-TEXT": {
                this._state.newMessageBody = action.body;
                this._rerenderEntireTree(this._state);
                return;
            }
            case "SEND-MESSAGE":{
                let message = {id: "1", message: this._state.newMessageBody};
                this._state.messages.push(message)
                this._state.newMessageBody = ""
                this._rerenderEntireTree(this._state)
                return;
            }
            default:
                throw new Error("I don't understand this action type")
        }*/
    }

}




 let state = {
    postData: [
        {id: "1", message: "Hi, how are you?", likesCount: 12},
        {id: "2", message: "It's my first post", likesCount: 5},
        {id: "3", message: "aaaaaaaaaaaaaaa", likesCount: 5},
    ],
    dialogs: [
        {id: "1", name: "Dymych"},
        {id: "2", name: "Andrey"},
        {id: "3", name: "Sveta"},
        {id: "4", name: "Sasha"},
        {id: "5", name: "Viktor"},
        {id: "6", name: "Valera"},
    ],
    messages: [
        {id: "1", message: "Hi"},
        {id: "2", message: "How is you it?"},
        {id: "3", message: "Yo"},
        {id: "4", message: "ccccc"},
        {id: "5", message: "tttttt"},
        {id: "6", message: "yyyyyyy"},
    ],
    newPostText: "",
    newMessageBody: "vcvcvcvcvcv"
}


/*
export const addPost = () => {
    let post = {id: "3", message: state.newPostText, likesCount: 0};
    state.postData.push(post)
    state.newPostText = ""
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.newPostText = newText
    rerenderEntireTree(state);
}
export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}*/
