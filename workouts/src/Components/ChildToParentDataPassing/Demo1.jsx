import React from 'react'

function Demo1({dataFromChild}) {
    const values = 30
    dataFromChild(values)

  return (
    <div>
        <h1>child</h1>
    </div>
  )
}

export default Demo1
