import React, { useEffect } from 'react'

function UseEffect() {
    useEffect(()=>{
        console.log("component has rendered");
        return()=>{
            console.log("component has unmounted");
        }
        

    },[])
  return (
    <div>
        
      <h1>Hiii</h1>
    </div>
  )
}

export default UseEffect
