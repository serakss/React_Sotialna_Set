import React from "react";

import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    getUserProfileThunk,
    getUsersSatatusThunk,
    setUserProfileAC,
    updateStatusThunk
} from "../../redux/profile-reducer";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapStateToPropsType = {
    profile: any
    status: string
}

type mapDispatchToPropsType = {
    getUserProfileThunk: (userId: string) => void
    getUsersSatatusThunk: (userId: string) => void
    updateStatusThunk: (status: string) => void
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
        this.props.getUsersSatatusThunk(userId)


    }

    render() {
        //if (!this.props.isAuth )return <Redirect to={"/login"}/>;
        return (

            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunk}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => (
    {
        profile: state.profileState.profile,
        status: state.profileState.status


    }
);

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => (
    {
        getUserProfileThunk: (userId: string) => {
            getUserProfileThunk(userId)(dispatch)
        },
        getUsersSatatusThunk: (userId: string) => {
            getUsersSatatusThunk(userId)(dispatch)
        },
        updateStatusThunk: (status: string) => {
            updateStatusThunk(status)(dispatch)
        }
    }
)

//let WithUrlDataContainerComponent = withRouter(ProfileContainer)
//let WithUrlDataContainerComponent = withRouter(withAuthRedirect(ProfileContainer))

//export const ProfileConnect = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);
export const ProfileConnect = compose<React.ComponentType>(withRouter, connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(ProfileContainer)


