
import { useMutation } from "react-query"
import { createUser } from "./userApi"




export const useCreateUser =()=>{
    return useMutation((data)=>createUser(data))
}
