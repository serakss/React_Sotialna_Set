import React from "react";
import {connect, MapDispatchToProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {
    followAC,
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC, toggleFetchingAC,
    toggleIsFollowingIsProgress,
    unFollowAC,
    unFollowThunkCreator,
    userType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import axios from "axios";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

export type mapStateToPropsType = {
    users: AppStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}
export type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: string) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userId: string) => void
    unFollowThunkCreator:(userId: string)=>void
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UsersPropsType> {


    componentDidMount() {
        // this.props.toggleIsFetching(true);
        /*        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                    {
                        withCredentials:true
                    }).then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)/// должно быть в onPageChanged
                });
            }*/

        /* usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
             this.props.toggleIsFetching(false)
             this.props.setUsers(data.items)
             this.props.setTotalUsersCount(data.totalCount)/// должно быть в onPageChanged
         });*/

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)//не должно быть сдесь нужно рефакторить
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
        /*this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

            usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        });*/
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                currentPage={this.props.currentPage}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}
                followThunkCreator={this.props.followThunkCreator}
                unFollowThunkCreator={this.props.unFollowThunkCreator}

            />;
        </>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleFetchingAC(isFetching))
        },
        toggleIsFollowingProgress: (isFetching: boolean, userId: string) => {
            dispatch(toggleIsFollowingIsProgress(isFetching, userId))
        },
        getUsersThunkCreator: (currentPage: number, pageSize: number) => {
            getUsersThunkCreator(currentPage, pageSize)(dispatch)
        },
        followThunkCreator: ( userId: string) => {
            followThunkCreator(userId)(dispatch)
        },
        unFollowThunkCreator:(userId: string)=>{
            unFollowThunkCreator(userId)(dispatch)
        }

    }
}


//export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(UsersAPIComponent))
export const UsersContainer = compose<React.ComponentType>( connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(UsersAPIComponent)