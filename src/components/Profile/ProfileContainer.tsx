import React from "react";

import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfileThunk, setUserProfileAC} from "../../redux/profile-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import { usersAPI } from "../../api/api";

type mapStateToPropsType = {
    profile: any
    isAuth:boolean
}

type mapDispatchToPropsType = {
   // setUserProfile: (profile: any) => void
    getUserProfileThunk:(userId:string)=>void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType


type ProfileContainerType = mapStateToPropsType & mapDispatchToPropsType


export class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2";
        }
        this.props.getUserProfileThunk(userId)
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);*/
      /*  usersAPI.getPrpfile(userId).then(response => {
            this.props.setUserProfile(response.data);
        });*/

    }

    render() {
        if (!this.props.isAuth )return <Redirect to={"/login"}/>;
        return (

            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => (
    {
        profile: state.profileState.profile,
        isAuth: state.auth.isAuth

    }
);

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        /*setUserProfile: (profile: any) => {
            dispatch(setUserProfileAC(profile))
        }*/
        getUserProfileThunk:(userId:string)=>{
            getUserProfileThunk(userId)(dispatch)
        }
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export const ProfileConnect = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);


