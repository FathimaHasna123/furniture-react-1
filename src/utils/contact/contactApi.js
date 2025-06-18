import { apiClient } from "../api"



export const getContact= ()=>{
    return apiClient.get('/contactApi/')
}

export const createContact = (data)=>{
    return apiClient.post('/contactApi/',data)
}