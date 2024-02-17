import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // return (
  //   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  //     <div className="container-fluid">
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarTogglerDemo03"
  //         aria-controls="navbarTogglerDemo03"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <Link className="navbar-brand" to="/">
  //         A.M.M
  //       </Link>
  //       <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
  //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //           <li className="nav-item">
  //             <Link className="nav-link active" aria-current="page" to="/">
  //               Home
  //             </Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link className="nav-link" to="link">
  //               Link
  //             </Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link className="nav-link" to="favourite">
  //               Favourite
  //             </Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          A.M.M
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/favourite" className="nav-link">
                Favourite
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
