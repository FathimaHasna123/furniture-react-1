import { useMutation } from "@tanstack/react-query"
import { createContact } from "./contactApi"




export const useCreateContact = ()=>{
    return useMutation((data)=>createContact(data))
}