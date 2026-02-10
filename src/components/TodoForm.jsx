import React, { useState } from 'react'

const TodoForm = ({handleClick}) => {
  
  const[val, setVal] = useState('') ;
  
  const addVal =()=>{
    handleClick(val);
    setVal('');
  }
  
  return (
    <div>
       <h1 className='text-white text-[30px] text-center'>Todo List</h1>
       <div className='flex justify-center items-center gap-3'>
          <input type="text" placeholder='Enter your task' 
          
          value={val}
          onChange={(e)=>setVal(e.target.value)}

          className='w-[300px] h-[36px] rounded pl-2 text-[14px] bg-white/90 text-black placeholder:text-black/50 focus:outline-none' />
          <button className='px-4 py-2 text-[14px] text-white bg-lime-600 rounded hover:bg-lime-500' onClick={addVal} >Add</button>
       </div>
    </div>
  )
}

export default TodoForm;
