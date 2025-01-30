import { useEffect, useState } from "react"
import { request } from "../Utility/axios_helper"

export const TestPage = () =>{
    const[data,setData] = useState("")
    useEffect( async() =>{
        const result = await request("GET", "/hello", {})
        setData(result)

    })
    return(
        <>
        {data}
        </>
    )
}