import React from 'react'
import TrashFullIcon from './icons/TrashFullIcon';
import PencileFullIcon from './icons/PencileFullIcon';

const ToDoItem = ({ todo, setToDos, deleteToDo, editMode, setEditMode }) => {

    const completedStyle = {
        textDecoration: "line-through",
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
    };

    const handleChange = (id) => {
        setToDos(prevState =>
            prevState.map(x => {
                if (x.id == id) {
                    return {
                        ...x, // the other parameter will have no change
                        completed: !x.completed,
                    }
                }
                return x;
            })
        );
    };

    return (
        <li>
            <div className='row'>
                <div className="col-lg-1 col-1 d-flex align-items-center">
                    <input
                        disabled={editMode.isEditMode}
                        className='checkbox'
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleChange(todo.id)} />
                </div>
                <div className="col-lg-8 col-8 d-flex align-items-center" >
                    <span className="to-do-text" style={todo.completed? completedStyle : null}>{todo.title}</span>
                </div>
                <div className="col-lg-3 col-3 text-right" >
                    <button title="Click to edit" className='edit-btn btn btn-link' onClick={() => setEditMode({ isEditMode : true, editId : todo.id})} disabled={editMode.isEditMode}>
                        <PencileFullIcon />
                    </button>
                    <button title="Click to remove" className='delete-btn btn btn-link' onClick={() => deleteToDo(todo.id)} disabled={editMode.isEditMode}>
                        <TrashFullIcon />
                    </button>
                </div>

            </div>
        </li>
    )
}

export default ToDoItem