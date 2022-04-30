import React from "react";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


export type mapStateToPropsType = {
    state:AppStateType
    //isAuth:boolean
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType=> {
    return {
        state: state,
       // isAuth: state.auth.isAuth
    }
}

//export const DialigsContainer = connect(mapStateToProps)(Dialogs);
//export const DialigsContainer = connect(mapStateToProps)(withAuthRedirect(Dialogs));
export const DialigsContainer = compose<React.ComponentType>(connect(mapStateToProps),withAuthRedirect)(Dialogs);