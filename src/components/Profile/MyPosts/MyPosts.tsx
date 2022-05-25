import React, {RefObject} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/dialogs-reducer";
import {ActionType, stateType} from "../../../redux/store";
import {AppStateType} from "../../../redux/redux-store";
import {Field, InjectedFormProps, reduxForm } from "redux-form";
import {maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/Preloader/FormsControls/FormsControls";




type myPostsType = {
    updateNewPostText:(text:string)=>void
    addPost:(newTextPost:string)=>void
    posts:AppStateType
}

type FormDataType = {
    newMessageBody: string
}

const maxLenght10 = maxLengthCreator(10)

export const MyPosts: React.FC<myPostsType> = (props) => {

    /*let postData = [
        {id: "1", message: "Hi, how are you?", likesCount: 12},
        {id: "2", message: "It's my first post", likesCount: 5},
        {id: "3", message: "aaaaaaaaaaaaaaa", likesCount: 5},

    ]

*/
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addNewMessage = (value: FormDataType) => {
        // alert(value.newMessageBody)
        props.addPost(value.newMessageBody)

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
               {/* <div>
                    <textarea ref={newPostElement} value={props.posts.profileState.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>*/}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
                <div className={s.posts}>

                    {props.posts.profileState.postData.map(p => <Post message={p.message} likeCount={p.likesCount}/>)}

                    {/* <Post message={postData[0].message} likeCount={postData[0].likesCount}/>
                    <Post message={postData[1].message} likeCount={postData[1].likesCount}/>*/}
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {


    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newMessageBody" placeholder="Enyer your message" validate={[required,maxLenght10]}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>

}

const AddMessageFormRedux = reduxForm<FormDataType>({form: "profileAddNewPostForm"})(AddMessageForm)
