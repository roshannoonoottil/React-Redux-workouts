import React from 'react'
import Demo3 from './Demo3'

function Demo2(props) {
  return (
    <div>
      <h1>Result 3 : {props.res}</h1>
      <Demo3 val={props.res}/>
    </div>
  )
}

export default Demo2
