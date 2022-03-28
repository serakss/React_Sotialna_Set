import React from "react";
import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css"
import {ChangeEvent} from "react";
import {ActionType, stateType} from "../../../redux/store";
import {sendMessageAC, updateNewMessageTextAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";


type messageType = {
    state:AppStateType
    onNewMessageChange:(body:string)=>void
    onSendMessageClick:()=>void
}

export const Message: React.FC<messageType> = (props) => {

    let newMessageBody=props.state.dialogsState.newMessageBody

    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
     props.onNewMessageChange(body)
    }

    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }

    return (
        <div className={s.messages}>
            <div> {props.state.dialogsState.messages.map(m => <div className={s.messages}>{m.message}</div>)}</div>
            {/* <Message message={messages[0].message}/>
               <Message message={messages[1].message}/>
               <Message message={messages[2].message}/>*/}
            <div>
                <div><textarea placeholder="Enter your message" value={newMessageBody}
                               onChange={onNewMessageChange}></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>

        </div>
    )
}

