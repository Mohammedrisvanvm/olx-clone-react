import { useContext, useState } from "react";



export const viewContext=useContext(null)
const [viewDetails,setViewDetails]=useState('')

function post ({children}){
    return (
        <viewContext value={{viewDetails,setViewDetails}}>
            {children}
        </viewContext>
    )
}
export default post