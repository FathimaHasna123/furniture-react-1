import { apiClient } from "../api"

export const getBlog = ()=>{
    return apiClient.get('/blogApi/')
}

export const createBlog =(data)=>{
    return apiClient.post('/blogApi/',data)
}

export const updateBlog =(data)=>{
    return apiClient.put(`/blogApi${data.id}`,data.data)
}

export const deleteBlog = (id) =>{
    return apiClient.delete(`blogApi/${id}`)
}