import React from 'react'

const InputTodo = () => {
  return (
    <>
      <h1 className='main-title'>todos</h1>
      <h6 className='sub-title'>Items will persist in the browser local storage</h6>
      {/* <div className="input-group">
        <input type="text" className="form-control form-control-lg rounded-end shadow-bottom add-input" placeholder="Add Todo..." />
        <button className="btn btn-link add-text-btn rounded-start" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
          </svg>
        </button>
      </div> */}
      <div className="col-lg-12">
        <input type="text" className="form-control form-control-lg add-input" placeholder="Add Todo..." />
        <button className="btn btn-link add-text-btn rounded-start" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default InputTodo