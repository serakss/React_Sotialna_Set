import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, stateType} from "../../redux/store";
import {AppStateType, StoreType} from "../../redux/redux-store";
import { SuperMessageContainer} from "./Message/MessageContainer";

type dialogsType ={
    state: AppStateType
    dispatch: (action: ActionType) => void
    store: StoreType
}

export const Dialogs: React.FC<dialogsType> = (props) => {


    return (
        <div className={s.dialogs}>
            <DialogItem state={props.state}/>
           <SuperMessageContainer/>
        </div>
    )
}