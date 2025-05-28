
import { useMutation } from "react-query"
import { createContact } from "./contactApi"




export const useCreateContact = ()=>{
    return useMutation((data)=>createContact(data))
}