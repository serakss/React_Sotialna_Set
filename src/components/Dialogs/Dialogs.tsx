import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, stateType} from "../../redux/store";
import {AppStateType, StoreType} from "../../redux/redux-store";
import {SuperMessageContainer} from "./Message/MessageContainer";
import {mapStateToPropsType} from "./DialigsContainer";
import {Redirect} from "react-router-dom";


export const Dialogs = (props: mapStateToPropsType) => {

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={s.dialogs}>
            <DialogItem state={props.state}/>
            <SuperMessageContainer/>
        </div>
    )
}