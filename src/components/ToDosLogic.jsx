import React, { useState } from 'react'
import ToDosList from './ToDosList'
import InputTodo from './InputTodo'

const ToDosLogic = () => {
    let [todos, setToDos] = useState([
        { id: 1, title: "todo-1", completed: true, },
        { id: 2, title: "todo-2", completed: false, },
        { id: 3, title: "todo-3", completed: false, },
    ])
    return (
        <>
            <div className='container'>
                <div className='col-lg-6 mx-auto col-sm-12 text-center'>
                    <InputTodo />
                    <ToDosList todos={todos} />
                </div>
            </div>
        </>
    )
}

export default ToDosLogic