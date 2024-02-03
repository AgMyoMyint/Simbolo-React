import React from 'react';

const Header = () => {
  return (
    <div className="pos-f-t todo-theme">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h4 className="text-white">Simbolo</h4>
          <span className="text-white">Simple To Do List</span>
        </div>
      </div>
      <nav className="navbar navbar-light bg-light todo-theme">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
}

export default Header;
