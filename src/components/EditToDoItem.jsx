import React, { useState } from 'react'
import SaveIcon from './icons/SaveIcon';
import CancelIcon from './icons/CancelIcon';

const EditToDoItem = ({ todo, setToDos, setEditMode }) => {

    const [title, setTitle] = useState(todo.title);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title == null || title.trim().length == 0) {
            return;
        }

        setToDos(prevState =>
            prevState.map(x => {
                if (x.id == todo.id) {
                    return {
                        ...x, // the other parameter will have no change
                        title: title,
                    }
                }
                return x;
            })
        );

        reset();
    };

    const reset = () => {
        setEditMode({ isEditMode: false, editId: '' });
    }

    return (
        <li>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className="col-lg-9 col-9 d-flex align-items-center" >
                        <input type="text" className='form-control ' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="col-lg-3 col-3 text-right d-flex align-items-center justify-content-end">
                        <button title="Click to update" className='update-btn btn btn-sm btn-success' type="submit" disabled={title == null || title.trim().length == 0}>
                            <SaveIcon />
                        </button>
                        <button title="Click to cancel" className='cancel-btn btn btn-sm btn-secondary' type="button" onClick={() => reset()}>
                            <CancelIcon />
                        </button>
                    </div>
                </div>
            </form>
        </li>
    )
}

export default EditToDoItem