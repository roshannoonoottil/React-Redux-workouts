import React from 'react'
import Demo1 from './Demo1'

function Demo() {
  let age = 28
  return (
    <div>
      <h1>Result 1 : {age}</h1>
      <Demo1 age={age}/>
    </div>
  )
}

export default Demo
