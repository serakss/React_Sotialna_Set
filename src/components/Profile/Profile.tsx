import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css"
import {ActionType, stateType} from "../../redux/store";
import {AppStateType, StoreType} from "../../redux/redux-store";
import {SuperMyPostsContainer} from "./MyPosts/MyPostsContainer";

type profileType={
profile:any
}

export const Profile: React.FC<profileType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
           <SuperMyPostsContainer/>
           {/* <MyPostsContainer store={props.store}/>*/}
        </div>)
}