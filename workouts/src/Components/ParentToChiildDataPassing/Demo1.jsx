import React from 'react'
import Demo2 from './Demo2'

function Demo1(props) {
  return (
    <div>
      <h1>{props.res}</h1>
      <Demo2 res={props.res}/>
    </div>
  )
}

export default Demo1
