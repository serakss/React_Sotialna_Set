import React from "react";
import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css"
import {ChangeEvent} from "react";
import {ActionType, stateType} from "../../../redux/store";
import {sendMessageAC, updateNewMessageTextAC} from "../../../redux/profile-reducer";
import {AppStateType, StoreType} from "../../../redux/redux-store";
import {Message} from "./Message";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type messageContainerType = {
    store: StoreType
}

export  const MessageContainer: React.FC<messageContainerType> = (props) => {

    /*let messages = [
        {id: "1", message: "Hi"},
        {id: "2", message: "How is you it?"},
        {id: "3", message: "Yo"},
        {id: "4", message: "ccccc"},
        {id: "5", message: "tttttt"},
        {id: "6", message: "yyyyyyy"},
    ]*/
    let newMessageBody = props.store.getState().dialogsState.newMessageBody;

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageTextAC(body))
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    return (
        <Message state={props.store.getState()}  onNewMessageChange={onNewMessageChange}
                 onSendMessageClick={onSendMessageClick}/>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        state: state
    }
}


let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        onNewMessageChange:(body:string)=>{
            dispatch(updateNewMessageTextAC(body))
        },
        onSendMessageClick:()=>{
            dispatch(sendMessageAC())
        }
    }
}

export const SuperMessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);