import React, { useMemo, useState } from 'react'

function UseMemo() {
  const[count,setCount] = useState(0)
  const value = useMemo(()=>{return count*count},[count])
  if(count<0){
    setCount(0)
  }
  return (
    <div>
      <p>Count: {count}</p>
      <p>Squre Count: {value}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      
    </div>
  )
}

export default UseMemo
