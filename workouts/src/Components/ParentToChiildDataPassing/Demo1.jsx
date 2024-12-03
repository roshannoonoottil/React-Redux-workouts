import React from 'react'
import Demo2 from './Demo2'

function Demo1(props) {
  return (
    <div>
      <h1>Result 2 : {props.age}</h1>
      <Demo2 res={props.age}/>
    </div>
  )
}

export default Demo1
