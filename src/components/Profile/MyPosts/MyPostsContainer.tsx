import React, {RefObject} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/dialogs-reducer";
import {ActionType, stateType} from "../../../redux/store";
import {AppStateType, StoreType} from "../../../redux/redux-store";

import {connect} from "react-redux";
import {Message} from "../../Dialogs/Message/Message";
import {Dispatch} from "redux";
import {sendMessageAC, updateNewMessageTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";



type MyPostsContainerType = {
    store:StoreType
}

/*export const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {

    /!*let postData = [
        {id: "1", message: "Hi, how are you?", likesCount: 12},
        {id: "2", message: "It's my first post", likesCount: 5},
        {id: "3", message: "aaaaaaaaaaaaaaa", likesCount: 5},

    ]

*!/
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        // props.addPost()
        props.store.dispatch(addPostAC())

    }
    let onPostChange = (text:string) => {
        //let text = newPostElement.current? newPostElement.current.value: ""
        props.store.dispatch(updateNewPostTextAC(text))
        /!*props.dispatch({type: "UPDATE-NEW-POST-TEX", newText: newPostElement.current? newPostElement.current.value: ""})*!/
        /!*if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }*!/
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost ={onAddPost} posts={props.store.getState()}/> )
}*/

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state
    }
}


let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        updateNewPostText:(text:string)=>{
            dispatch(updateNewPostTextAC(text))
        },
        addPost:(newTextPost:string)=>{
            dispatch(addPostAC(newTextPost))
        }
    }
}

export const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);