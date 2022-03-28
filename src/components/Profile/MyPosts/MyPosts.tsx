import React, {RefObject} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/dialogs-reducer";
import {ActionType, stateType} from "../../../redux/store";
import {AppStateType} from "../../../redux/redux-store";



type myPostsType = {
    updateNewPostText:(text:string)=>void
    addPost:()=>void
    posts:AppStateType
}

export const MyPosts: React.FC<myPostsType> = (props) => {

    /*let postData = [
        {id: "1", message: "Hi, how are you?", likesCount: 12},
        {id: "2", message: "It's my first post", likesCount: 5},
        {id: "3", message: "aaaaaaaaaaaaaaa", likesCount: 5},

    ]

*/
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
         props.addPost()
        //props.dispatch(addPostAC())

    }
    let onPostChange = () => {
      // let text = newPostElement.current? newPostElement.current.value: ""
       // props.dispatch(updateNewPostTextAC(text))
        /*props.dispatch({type: "UPDATE-NEW-POST-TEX", newText: newPostElement.current? newPostElement.current.value: ""})*/
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }

    }


    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.posts.profileState.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={s.posts}>

                    {props.posts.profileState.postData.map(p => <Post message={p.message} likeCount={p.likesCount}/>)}

                    {/* <Post message={postData[0].message} likeCount={postData[0].likesCount}/>
                    <Post message={postData[1].message} likeCount={postData[1].likesCount}/>*/}
                </div>
            </div>
        </div>
    )
}