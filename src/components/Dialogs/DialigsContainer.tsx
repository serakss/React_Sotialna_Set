import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


export type mapStateToPropsType = {
    state:AppStateType
    isAuth:boolean
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType=> {
    return {
        state: state,
        isAuth: state.auth.isAuth
    }
}

export const DialigsContainer = connect(mapStateToProps)(Dialogs);