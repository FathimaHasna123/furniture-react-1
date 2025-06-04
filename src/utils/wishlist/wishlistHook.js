import { useMutation } from 'react-query';
import { createWishlist, deleteWishlist} from "./wishlistApi"




export const useCreateWishlist = ()=>{
    return useMutation((data)=>createWishlist(data))
}


export const useDeleteWishlist = ()=>{
    return useMutation((id)=>deleteWishlist(id))
}

