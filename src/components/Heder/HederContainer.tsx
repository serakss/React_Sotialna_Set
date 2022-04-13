import axios from "axios";
import React from "react";
import {connect} from "react-redux";
import {Header} from "./Heder";
import {setUserDate} from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";


type mapStateToPropsType = {
    isAuth: boolean
    login: string
}
export type mapDispatchToPropsType = {
    setUserDate:(email: string,id: number,  login: string)=>void
}
export type headerPropsType = mapStateToPropsType & mapDispatchToPropsType

export class HeaderContainer1 extends React.Component<headerPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let email = response.data.data.email;
                    let id = response.data.data.id;
                    let login = response.data.data.login;
                    this.props.setUserDate(email,id,  login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>

    }
}

const MapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login


})


export const HeaderContainer = connect(MapStateToProps, {setUserDate})(HeaderContainer1)