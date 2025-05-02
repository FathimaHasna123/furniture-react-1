import { useMutation } from "@tanstack/react-query"
import { createUser } from "./userApi"




export const useCreateUser =()=>{
    return useMutation((data)=>createUser(data))
}
