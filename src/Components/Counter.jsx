import React, { useState } from 'react'

const Counter = () => {
    const [Counter,SetCounter]=useState(0);

  return (
    <div>
      <h1 className='font-semibold'>create counter</h1>
       <div>{Counter}</div>
       <button className='bg-amber-200 m-2' onClick={()=>{ SetCounter(Counter+1)}}>Counter</button>
       <hr/>
    </div>

  )
}

export default Counter
