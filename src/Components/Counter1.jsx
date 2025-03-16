import React, { useState } from 'react'

const Counter1 = () => {
const [counter,setCounter]=useState(0)
  return (
    <div>
        <h1 className='font-semibold'>create 2 buttons to increase counter by one and other is  increase counter by two </h1>
      <div>counter:{counter}</div>
      <button className='bg-blue-300 p-2' onClick={()=>{setCounter(counter+1)}}>increase by 1</button>
      <button className='bg-blue-300 mx-1 p-2'onClick={()=>{setCounter(counter+2)}}>increase by 2</button>
      <hr/>

    </div>
  )
}

export default Counter1
