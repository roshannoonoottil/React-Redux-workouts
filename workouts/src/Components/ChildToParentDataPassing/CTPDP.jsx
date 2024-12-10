import React, { useState } from 'react'
import Demo1 from './Demo1'

function CTPDP() {
  const [value, setValue] = useState(0);

  const resFun = (data) =>{
    setValue(data)
  }
  return (
    <div>
      <h1>Result Form Child : {value} </h1>
      <Demo1 dataFromChild = {resFun}/>
    </div>
  )
}

export default CTPDP
