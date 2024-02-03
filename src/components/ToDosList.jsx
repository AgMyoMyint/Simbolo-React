import React from 'react'
import ToDoItem from './ToDoItem'

const ToDosList = ({ todos , setToDos, deleteToDo }) => {
    return (
        <>
            <ul className='todo-list-ul'>
                {
                    todos.map((todo) => (
                        <ToDoItem key={todo.id} todo={todo} setToDos={setToDos} deleteToDo={deleteToDo} />
                    ))
                }
            </ul>
        </>
    )
}

export default ToDosList