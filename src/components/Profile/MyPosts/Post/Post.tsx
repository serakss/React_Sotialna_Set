import React from "react";
import s from "./Post.module.css";

type PostType = {
    message: string,
    likeCount: number
}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.imgur.com/gqJvKwW.png"/>
            {props.message}
            <div>
                <span>like</span>{props.likeCount}
            </div>
        </div>
    )
}