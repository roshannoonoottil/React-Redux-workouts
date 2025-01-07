import React, { useCallback, useState } from 'react'

function UseCallback() {

const [count,setCount] = useState(0)
const increment =  useCallback(()=>{
    setCount((previous)=>previous+1)
},[])

const decrement = useCallback(()=>{
  setCount((previous)=> previous-1)
},[])
  return (
    <div>
        <button onClick={decrement}>-</button>
        <p>Count : {count}</p>
        <button onClick={increment}>+</button>
      
    </div>
  )
}

export default UseCallback
