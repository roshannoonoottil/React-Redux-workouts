import React, { useState } from 'react'
import Demo1 from './Demo1'

function CTPDP() {
  const [value, setValue] = useState('')
  const getVal = (data)=>{
    setValue(data)
  }

  return (
    <div>
      {value}
      <Demo1 childValue={getVal}/>
    </div>
  )
}

export default CTPDP
