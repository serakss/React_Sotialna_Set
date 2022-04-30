import { ComponentType } from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import { AppStateType } from "../redux/redux-store";


type mapStateToPropsType ={
    isAuth: boolean
}


let mapStateToProps = (state: AppStateType):mapStateToPropsType=> {
    return {
        isAuth: state.auth.isAuth
    }
}


export function withAuthRedirect <T>(Component: ComponentType<T>){

    const RedirectComponent =(props:mapStateToPropsType)=>{
        let {isAuth,...restProps}=props
        if (!isAuth) return <Redirect to={"/login"}/>;
        return <Component {...restProps as T}/>
    }

let ConectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConectRedirectComponent
}



