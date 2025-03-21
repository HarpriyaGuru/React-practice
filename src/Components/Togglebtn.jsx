import React, { useState } from 'react'

const Togglebtn = () => {
    const [toggle, setToggle] = useState("Off") 

    function handleToggle() {
        toggle =="Off" ? setToggle("On") :setToggle("Off")
    }

    return (
        <div className='p-2 m-2'>
            <h1 className='font-semibold'>Create Toggle Button</h1>
            <div>{toggle}</div>
            <button
                className='bg-pink-200 p-2 rounded-md hover:bg-pink-300'
                onClick={handleToggle} 
            >
                Toggle
            </button>
        </div>
    )
}

export default Togglebtn
