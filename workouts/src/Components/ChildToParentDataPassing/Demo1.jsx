import React from 'react'

function Demo1({childValue}) {
  let value = 'Hi from Child'
  childValue(value)
  return (
    <div>
      
    </div>
  )
}

export default Demo1
