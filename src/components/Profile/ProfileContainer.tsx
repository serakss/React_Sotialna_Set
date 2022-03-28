import React from "react";

import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type mapStateToPropsType = {
    profile: any
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType


type ProfileContainerType = mapStateToPropsType & mapDispatchToPropsType


export class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2";
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        });

    }

    render() {
        return (

            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => (
    {
        profile: state.profileState.profile
    }
);

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        setUserProfile: (profile: any) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export const ProfileConnect = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);


