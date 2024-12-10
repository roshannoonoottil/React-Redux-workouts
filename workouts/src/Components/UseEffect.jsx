import React, { useEffect, useState } from 'react'

function UseEffect() {
   const[state,setState] = useState(0)
    useEffect(()=>{
        console.log("component has rendered");
        return()=>{
            console.log("component has unmounted");
          
        }
        

    },[state])

  return (
    <div>
        
      <h1>{state}</h1>
      <h3>When sate value change useEffect will call</h3>
      <button onClick={(()=>{
        setState(state+1)
      })}>+</button>
    </div>
  )
}

export default UseEffect
