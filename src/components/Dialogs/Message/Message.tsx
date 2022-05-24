import React from "react";
import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css"
import {ChangeEvent} from "react";
import {ActionType, stateType} from "../../../redux/store";
import {sendMessageAC, updateNewMessageTextAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type messageType = {
    state: AppStateType
    onNewMessageChange: (body: string) => void
    onSendMessageClick: (newMessage:string) => void
}

type FormDataType = {
    newMessageBody: string
}


export const Message: React.FC<messageType> = (props) => {
    //let newMessageBody = props.state.dialogsState.newMessageBody

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.onNewMessageChange(body)
    }

    let addNewMessage = (value:FormDataType) => {
        props.onSendMessageClick(value.newMessageBody);
    }


    return (
        <div className={s.messages}>
            <div> {props.state.dialogsState.messages.map(m => <div className={s.messages}>{m.message}</div>)}</div>
            {/* <Message message={messages[0].message}/>
               <Message message={messages[1].message}/>
               <Message message={messages[2].message}/>*/}

            {/*<div>
                <div><textarea placeholder="Enter your message" value={newMessageBody}
                               onChange={onNewMessageChange}></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>*/}
           <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {


    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newMessageBody" placeholder="Enyer your message"/>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>

}

const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)
