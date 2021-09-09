import {useEffect} from 'react'

function Countdown(data) {
    const setGameStop = data.setGameStop;
    const questionNumber = data.questionNumber;
    const setStopClock = data.setStopClock;
    const stopClock = data.stopClock;
    
    
    

     useEffect(() => {
        if(stopClock === 0){
           setGameStop(true);
           
        }
         const ticktock = setInterval(() => {
             setStopClock(stopClock - 1);
         }, 1000);
         return () => clearInterval(ticktock);
         
     }, [stopClock,setStopClock,setGameStop]);

     useEffect(() => {
         setStopClock(30);
     }, [questionNumber, setStopClock])

    return (
        <div className= "count">
          {stopClock}
        </div>
    )
}

export default Countdown
