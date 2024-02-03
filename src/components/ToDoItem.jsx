import React from 'react'
import TrashFullIcon from './icons/TrashFullIcon';

const ToDoItem = ({ todo, setToDos, deleteToDo }) => {

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
                        className='checkbox'
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleChange(todo.id)} />
                </div>
                <div className="col-lg-9 col-9 d-flex align-items-center" >
                    <span className="to-do-text" style={todo.completed? completedStyle : null}>{todo.title}</span>
                </div>
                <div className="col-lg-2 col-2 text-right">
                    <button className='delete-btn btn btn-link' onClick={() => deleteToDo(todo.id)}>
                        <TrashFullIcon />
                    </button>
                </div>

            </div>
        </li>
    )
}

export default ToDoItem