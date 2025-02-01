import { useEffect ,useState} from "react"



export const CurrentTime = () =>{
    const[time,setTime] = useState(new Date())
    const [currentDay, setCurrentDay] = useState(new Date().getDay()); 
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); 

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
            setCurrentDay(new Date().getDay())
            setCurrentMonth(new Date().getMonth())
        },59000);

        return () =>{
            clearInterval(intervalId)
        }

    },[])

    const padZero = (number) =>{
        return (number < 10 ?"0": "")+number;

    }

    const formatTime = () =>{
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const meridiem = hours >=12 ? "PM":"AM"
    
        hours = hours %12 || 12;
    
        return `${padZero(hours)}:${padZero(minutes)} ${padZero(meridiem)}`
    }
    
    return (
        <>
        <p>{formatTime()}</p>
        {/* did this because currentDay comes in index 0-6 */}
        <p>{days[currentDay]}</p>
        {/* same for this in js */}
        <p>{months[currentMonth]}</p>
        
        </>
    )
}