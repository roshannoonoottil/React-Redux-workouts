import React, { useCallback, useState } from 'react'

function UseCallback() {

const [count,setCount] = useState(0)
const increment =  useCallback(()=>{
    setCount((previous)=>previous+1)
},[])
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={increment}>+</button>
      
    </div>
  )
}

export default UseCallback
