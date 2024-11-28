import React, { useMemo, useState } from 'react'

function UseMemo() {
  const [count,setCount] = useState(0)
  const squreRoot = useMemo(()=>count * count,[count])//memozied value will be stored in the squreRoot variable
  return (
    <div>
      <p>Count: {count}</p>
      <p>Count squared: {squreRoot}</p>
      <button onClick={(()=>setCount(count + 1))}>+</button>
    </div>
  )
}

export default UseMemo
