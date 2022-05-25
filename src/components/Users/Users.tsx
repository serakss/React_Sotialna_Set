import React from "react";
import s from "./users.module.css";
import {AppStateType} from "../../redux/redux-store";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    users: AppStateType
    currentPage: number
    unFollow: (id: string) => void
    follow: (id: string) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: string) => void
    followingInProgress: string[]
    followThunkCreator: (userId: string) => void
    unFollowThunkCreator:(userId: string) => void
}


export let Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p ? s.selectedPage : ""} onClick={() => {
                props.onPageChanged(p)
            }}>{p} </span>
        })}
        {props.users.usersPage.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + m.id}>
                        <img
                            src={m.photos.small != null ? m.photos.small : "data:image/jpeg;base64,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"}
                            className={s.usersPhoto}/>
                            </NavLink>
                    </div>
                    <div>

                        {m.followed ?
                            <button disabled={props.followingInProgress.some(id => id === m.id)} onClick={() => {

                             props.unFollowThunkCreator(m.id)
                               /* props.toggleIsFollowingProgress(true, m.id)
                                usersAPI.unFollow(m.id).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(m.id)
                                    }
                                    props.toggleIsFollowingProgress(false, m.id)
                                })*/

                                // props.unFollow(m.id)
                            }}>UnFollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === m.id)} onClick={() => {
                                props.followThunkCreator(m.id)
                                /*  props.toggleIsFollowingProgress(true,m.id)
                                    usersAPI.follow(m.id).then(response => {
                                          if (response.data.resultCode === 0) {
                                              props.follow(m.id)
                                          }
                                          props.toggleIsFollowingProgress(false, m.id)
                                      })*/

                                //  props.follow(m.id)
                            }}>Follow</button>}
                    </div>
                </span>
            <span>
                <span>
                    <div>{m.name}</div><div>{m.status}</div>
                </span>
                <span>
                  <div>{"m.location.country"}</div> <div>{"m.location.city"}</div>
                </span>
                </span>

        </div>)}
    </div>
}