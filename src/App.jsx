import React, { useState, useEffect } from 'react'
import TodoForm from './components/todoForm'
import Todolist from './components/todolist'
import DeleteModals from './components/DeleteModals'
import EditModals from './components/EditModals'


const App = () => {
  const [delModal, setDelModal] = useState(false)
  const [todoToDel, setTodoToDel] = useState(null)


  const [editModal, setEditModal] = useState(false)
  const [todoToEdit, setTodoToEdit] = useState(null)

  const [todo, setTodo] = useState(() => {
    const saveTodo = localStorage.getItem('todo');
    return saveTodo ? JSON.parse(saveTodo) : [];
  });

  const handleClick = (val) => {
    console.log(val)
    setTodo([...todo, { title: val, id: Date.now() }]);
    console.log(todo)
  }

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo])


  const handleDelete = (id) => {
    setDelModal(true)
    setTodoToDel(id)
  }

  const cancelDel = () => {
    setDelModal(false)
    setTodoToDel(null)
  }


  const confirmDel = () => {

    setTodo(todo.filter((item) => item.id !== todoToDel))

    setDelModal(false)
    setTodoToDel(null)
  }


  const handleUpdate = (todo) => {
    setEditModal(true)
    setTodoToEdit(todo)
  }

  const cancelEdit = () => {
    setEditModal(false)
    setTodoToEdit(null)
  }

  const confirmEdit = (newText) => {
    setTodo(todo.map((item) => item.id === todoToEdit.id ? { ...item, title: newText } : item))
    setEditModal(false)
    setTodoToEdit(null)

  }

  return (
    <div className='mt-3 px-3 py-2 bg-white/20 backdrop-blur-[30px] rounded'>
      <TodoForm handleClick={handleClick} />
      <Todolist todo={todo} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
      {delModal && <DeleteModals cancelDel={cancelDel} confirmDel={confirmDel} />}
      {editModal && <EditModals cancelEdit={cancelEdit} confirmEdit={confirmEdit} currentText={todoToEdit.title}  />}
    </div>
  )
}

export default App
