import { useEffect ,useState} from "react"



export const CurrentTime = () =>{
    const[time,setTime] = useState(new Date())
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000);

        return () =>{
            clearInterval(intervalId)
        }

    },[])

    const formatTime = () =>{
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >=12 ? "PM":"AM"
    
        hours = hours %12 || 12;
    
        return `${hours}:${minutes}:${seconds} ${meridiem}`
    }
    
    return (
        <>
        <p>{formatTime()}</p>
        
        </>
    )
}