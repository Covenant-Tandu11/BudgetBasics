import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [currentTime, setCurrentTime] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, []);
    function formatDateTime(date){
        const dayName = new Intl.DateTimeFormat('en-Us', {
            weekday: 'short'
        }).format(date)
        const monthName = new Intl.DateTimeFormat('en-Us', {
            month: 'short'
        }).format(date);
        const day = String(date.getDate()).padStart(2, "0")
        const timeString = new Intl.DateTimeFormat("en-Us", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        }).format(date)
        return `${dayName}, ${monthName} ${day}, ${timeString}`
    }
    return (
        <div className='hero-section'>
            <div>
                <div className='campus-clock'>
                    <div className="clock-icon">
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className="clock-info">
                        <span className="clock-label">CAMPUS CLOCK</span>
                        <span className="clock-time">{formatDateTime(currentTime)}</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero
