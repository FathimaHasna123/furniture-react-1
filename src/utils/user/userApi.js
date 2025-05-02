import { apiClient } from "../api"




export const getUser=()=>{
    return apiClient.get('/userApi')
}


export const createUser = (data)=>{
    return apiClient.post('/userApi/',data)
}


