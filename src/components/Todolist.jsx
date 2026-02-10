import React from 'react'

const Todolist = ({todo,handleDelete , handleUpdate}) => {
  
    const delTodo=(id)=>{
        handleDelete(id);
    }

  return (
    <div>
       {
        todo.map((items)=>
            <div key={items.id} className='bg-white/40 py-2 px-2 mt-2 flex justify-between items-center rounded'><p className='text-white text-[14px]'>{items.title}</p> <div className='flex gap-1'><button onClick={()=>delTodo(items.id)} className='text-[14px] px-3 py-2 text-white bg-red-600 rounded hover:bg-red-400'>Del</button><button className='text-[14px] px-3 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600' onClick={()=> handleUpdate(items)}>Edit</button> </div> </div>
        )
       }
    </div>
  )
}

export default Todolist
