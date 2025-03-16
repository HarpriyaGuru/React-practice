import React, { useState } from 'react'

const InputField = () => {
    const[text,setText]=useState("")
     
  return (
    <div>
      <input className='bg-amber-100 border-2 m-2 p-2' 
      type='text' value={text}
       placeholder="Type something..."
      onChange={(e)=>setText(e.target.value)}/>
      <div>{text}</div>
    </div>
  )
}

export default InputField
