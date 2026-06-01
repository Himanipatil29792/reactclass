import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount} from './assets/features/counterSlice'

const App = () => {
  const dispatch = useDispatch()

  const count=useSelector((state)=> state.counter.value)

  const [num, setNum] = useState(5);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}>Increment</button>

      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement</button>

      <input type='number' value={num} onChange={(e)=>{
        console.log(e.target.value)
        setNum(e.target.value)
      }}/>

      <button onClick={()=>{
        dispatch(incrementbyAmount(Number(num)))
      }}>Increase by Amount</button>
    </div>
  )
}

export default App