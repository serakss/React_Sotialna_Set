import React from "react";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT ="SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING ="TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IS_PROGRESS ="TOGGLE_IS_FOLLOWING_IS_PROGRESS";


type followACType = ReturnType<typeof followAC>;
type unFollowACType = ReturnType<typeof unFollowAC>;
type setUsersACType = ReturnType<typeof setUsersAC>;
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>;
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>;
type toggleFetchingACType = ReturnType<typeof toggleFetchingAC>
type toggleIsFollowingIsProgressType = ReturnType<typeof toggleIsFollowingIsProgress>


type actionType = followACType | unFollowACType | setUsersACType | setCurrentPageACType | setTotalUsersCountACType | toggleFetchingACType | toggleIsFollowingIsProgressType;

export type userType = {
    name: string
    id: string,
    uniqueUrlName: string,
    photos: {
        "small": string,
        "large": string
    },
    status: string,
    followed: boolean
}


export type InitialStateType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:string[]
}

export type usersType = typeof initialState

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: false,
    followingInProgress: []
}


export const usersReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {


    switch (action.type) {
        case FOLLOW: {

            return {
                ...state, users: state.users.map(m => {


                    if (m.id === action.userId) {


                        return {...m, followed: true}
                    }
                    return m
                })
            }
        }
        case UNFOLLOW: {

            return {
                ...state, users: state.users.map(m => {



                    if (m.id === action.userId) {

                        return {...m, followed: false}
                    }
                    return m
                })
            }
        }
        case SET_USERS: {


            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {


            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {


            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING:{

            return {...state,isFetching:action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_IS_PROGRESS:{

            return {...state,
                followingInProgress:action.isFetching
                    ? [...state.followingInProgress,action.userId]
                    : state.followingInProgress.filter(id =>id != action.userId)
            }
        }
        default:
            return state
    }
}

export const followAC = (userId: string) => (
    {type: FOLLOW, userId} as const
)

export const unFollowAC = (userId: string) => (
    {type: UNFOLLOW, userId} as const
)

export const setUsersAC = (users: Array<userType>) => (
    {type: SET_USERS, users} as const
)

export const setCurrentPageAC = (currentPage: number) => (
    {type: SET_CURRENT_PAGE, currentPage} as const
)

export const setTotalUsersCountAC = (totalCount: number) => (
    {type: SET_TOTAL_USERS_COUNT, totalCount} as const
    )
export const toggleFetchingAC = (isFetching: boolean) => (
    {type: TOGGLE_IS_FETCHING, isFetching} as const
)
export const  toggleIsFollowingIsProgress =( isFetching:boolean, userId:string)=>(
    {type: TOGGLE_IS_FOLLOWING_IS_PROGRESS, isFetching,userId} as const
)