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
                            src={m.photos.small != null ? m.photos.small : "https://freepikpsd.com/file/2019/10/default-user-image-png-4-Transparent-Images.png"}
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