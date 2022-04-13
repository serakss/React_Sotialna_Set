import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "e3dce886-57e5-41d0-b59c-843020435576"
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)

    },
    follow(userId: string) {
      return   instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        )
    },
    unFollow(userId: string) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        )
    }
}

