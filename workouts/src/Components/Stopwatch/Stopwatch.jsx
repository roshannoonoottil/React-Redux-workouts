import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const [time, setTime] = useState(0)
    const [running, setRunnning] = useState(false)

    useEffect(()=>{
        let interval;
        if(running){
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            },10)
        }else if(!running){
            clearInterval(interval)
        }
        return () => clearInterval(interval) 
    },[running])
  return (
    <div>
        <span>{("0" + Math.floor((time / 60000 ) % 60 )).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000 ) % 60 )).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        <br /><br />
        <div>
           { running ?(
            <button onClick={()=>{setRunnning(false)}}>Stop</button>):(
            <button onClick={()=>{setRunnning(true)}}>Start</button>)
            }
            <button onClick={()=>setTime(0)}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch
