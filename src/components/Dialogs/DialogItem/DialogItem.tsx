import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {stateType} from "../../../redux/store";
import {AppStateType} from "../../../redux/redux-store";

type dialogsItemType ={
    state:AppStateType
}

export const DialogItem: React.FC<dialogsItemType> = (props) => {

    /*let dialogs = [
        {id: "1", name: "Dymych"},
        {id: "2", name: "Andrey"},
        {id: "3", name: "Sveta"},
        {id: "4", name: "Sasha"},
        {id: "5", name: "Viktor"},
        {id: "6", name: "Valera"},
    ]*/
    return (
            <div className={s.dialogsItems}>
                {props.state.dialogsState.dialogs.map(d => <div className={s.dialogs + ' ' + s.active}>
                    <NavLink to={"/dialogs/" + d.id}>{d.name}</NavLink>
                </div>)}
                {/*    <DialogItem name={dialogs[0].name} id={dialogs[0].id} />
                <DialogItem name={dialogs[1].name} id={dialogs[1].id} />
                <DialogItem name={dialogs[2].name} id={dialogs[2].id} />
                <DialogItem name={dialogs[3].name} id={dialogs[3].id} />
                <DialogItem name={dialogs[4].name} id={dialogs[4].id} />
                <DialogItem name={dialogs[5].name} id={dialogs[5].id} />*/}

            </div>
    )
}

