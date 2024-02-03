import React, { useState } from 'react'
import PlusCircleIcon from './icons/PlusCircleIcon'

const InputTodo = ({addToDoItem, editMode}) => {

  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (title == null || title.trim().length == 0){
      setErrorMessage("Please add title!");
      return;
    }

    setErrorMessage("");
    addToDoItem(title);
    resetForm();
  };

  const resetForm = () => 
  {
    if (title !== null && title.length > 0) 
    {
      setTitle('');
    }
  }

  return (
    <>
      <h1 className='main-title'>todos</h1>
      <h6 className='sub-title'>Items will persist in the browser local storage</h6>
      <div className="col-lg-12">
        <form onSubmit={handleSubmit}>
          <input
            disabled={editMode.isEditMode}
            type="text"
            className="form-control form-control-lg add-input"
            placeholder="Add Todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
          <button title="Click to add item" className="btn btn-link add-text-btn rounded-start" type="submit" disabled={editMode.isEditMode}>
            <PlusCircleIcon />
          </button>
          <span className='error-message'>{errorMessage}</span>
        </form>
      </div>
    </>
  )
}

export default InputTodo