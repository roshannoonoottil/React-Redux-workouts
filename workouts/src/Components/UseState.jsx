import React, { useState } from 'react'

function Demo() {
 const [count,setCount] = useState(0)
 if(count<0){
          setCount(0)  
 }
  return (
    <div>
      
        <button onClick={()=>{
            setCount(count + 1)
        }}>+</button>
        <p>Count: {count}</p>
        <button onClick={()=>{
            setCount(count - 1)
        }}>-</button>

        <button onClick={()=>{
            setCount(0)
        }}>reset</button>
      
    </div>
  )
}

export default Demo
