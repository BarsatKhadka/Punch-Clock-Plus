import { useEffect ,useState} from "react"



export const CurrentTime = () =>{
    const[time,setTime] = useState(new Date())
    const [currentDay, setCurrentDay] = useState(new Date().getDay()); 
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); 
    const [currentDate, setCurrentDate] = useState(new Date().getDate())

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
            setCurrentDay(new Date().getDay())
            setCurrentMonth(new Date().getMonth())
            setCurrentDate(new Date().getDate())
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
        <div className="ml-8 mt-8 p-6 bg-white rounded-lg shadow-md w-64 inline-block">
            <p className="text-2xl font-semibold text-gray-800">{formatTime()}</p>
            <p className="text-lg text-gray-600">
                {days[currentDay]}, {months[currentMonth]} {currentDate}
            </p>
            </div>
            
        
        </>
    )
}