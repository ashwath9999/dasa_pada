import React from "react";
import {Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid " style={{ height: "30px" }}>
          <a className="navbar-brand" >
            <img
              src="https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2020/05/pdas.jpg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top mx-3"
            />
            DASA-PADA{" "}
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
              <Link className="nav-link active"  aria-current="page" to="/dasa_pada">HOME</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link "  aria-current="page" to="/add">ADD</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link "  aria-current="page" to="/del">DEL</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
