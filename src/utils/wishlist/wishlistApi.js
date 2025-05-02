import { apiClient } from "../api"




export const getWishlist = ()=>{
    return apiClient.get('/wishlistApi')
}

export const createWishlist = (data)=>{
    return apiClient.post('/wishlistApi/',data)
}

export const deleteWishlist =(id)=>{
    return apiClient.delete(`wishlistApi/${id}`)
}