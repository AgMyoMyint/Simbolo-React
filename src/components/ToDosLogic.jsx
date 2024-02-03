import React, { useState } from 'react'
import ToDosList from './ToDosList'
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from "uuid";

const ToDosLogic = () => {

    const [editMode, setEditMode] = useState({ isEditMode : false, editId : ''});

    let [todos, setToDos] = useState([
        { id: uuidv4(), title: "To buy milk and chocolate for Mom", completed: true, },
        { id: uuidv4(), title: "To install visual studio code in my laptop", completed: false, },
        { id: uuidv4(), title: "To read 10 pages of ABC book", completed: false, },
        { id: uuidv4(), title: "To watch recordings and do simbolo assignments for React Class Day 5", completed: false, },
    ])

    const deleteToDo = (id) => {
        setToDos([
            ...todos.filter((todo) => {
                return todo.id !== id;
            }),
        ]);
    };

    const addToDoItem = (title) => {
        
        const newToDoItem = {
            id: uuidv4(),
            title: prepareTitle(title),
            completed: false
        }

        setToDos([...todos, newToDoItem]);
    }

    const prepareTitle = (text) => {
        text = text.trim();
        return text;
    };

    return (
        <>
            <div className='container'>
                <div className='col-lg-6 mx-auto col-sm-12 text-center'>
                    <InputTodo 
                        addToDoItem={addToDoItem} editMode={editMode}/>
                    <ToDosList 
                        todos={todos} 
                        setToDos={setToDos} 
                        deleteToDo={deleteToDo} editMode={editMode} setEditMode={setEditMode} />
                </div>
            </div>
        </>
    )
}

export default ToDosLogic