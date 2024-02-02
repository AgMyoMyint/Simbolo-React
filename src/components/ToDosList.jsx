import React from 'react'
import ToDoItem from './ToDoItem'

const ToDosList = ({ todos }) => {
    return (
        
        <ul className='todo-list-ul'>
            {
                todos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} />
                ))
            }
        </ul>
    )
}

export default ToDosList