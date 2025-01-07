import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from './Store';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Redux Counter</h1>
    <h2>{count}</h2>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    <button onClick={() => dispatch(reset())}>Reset</button>
  </div>
  )
}

export default App
