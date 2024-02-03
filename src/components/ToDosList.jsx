import React from 'react'
import ToDoItem from './ToDoItem'
import EditToDoItem from './EditToDoItem'

const ToDosList = ({ todos , setToDos, deleteToDo, editMode, setEditMode }) => {    
    return (
        <>
        <ul className='todo-list-ul'>
            {
                todos.map((todo) => {
                    if (!editMode.isEditMode) {
                        return <ToDoItem key={todo.id} todo={todo} setToDos={setToDos} deleteToDo={deleteToDo} editMode={editMode} setEditMode={setEditMode} />;
                    } else {
                        if (editMode.editId === todo.id) {
                            return <EditToDoItem key={todo.id} todo={todo} setToDos={setToDos} setEditMode={setEditMode} />;
                        } else {
                            return <ToDoItem key={todo.id} todo={todo} setToDos={setToDos} deleteToDo={deleteToDo} editMode={editMode} setEditMode={setEditMode} />;
                        }
                    }
                })
            }
        </ul>
    </>
    )
}

export default ToDosList