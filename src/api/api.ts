import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "41cedd4e-9dd7-47ab-a592-121c65fa10c1"
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)

    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`,
        )
    },
    unFollow(userId: string) {
        return instance.delete(`follow/${userId}`,
        )
    },
    getPrpfile(userId: string) {
        return instance.get(`profile/${userId}`);
    }
}


export const profileAPI = {
    getPrpfile(userId: string) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    }

}

export const authAPI = {
    me() {
        return instance.get("auth/me")
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post("/auth/login", {email, password, rememberMe})
    },
    logout() {
        return instance.delete("/auth/login");
    }
}
