import React from "react";
import style from "./Nav.module.css";
import logo from "../assets/img/V01.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className={style.nav} data-bs-theme="dark">
        <div className="container-fluid navbar navbar-expand-lg">
          <NavLink className="navbar-brand ms-5" to="/">
            <img src={logo} className={style.logo} />
          </NavLink>
          <div
            className="collapse navbar-collapse ms-3 "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li>
                <NavLink className="nav-link active ms-3 me-3" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link active ms-3 me-3" to="/corses">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link active ms-3 me-3" to="/Allcourses">
                  AllCourses
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link active ms-3 me-3" to="/Details">
                  Corsdetels
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link active ms-3 me-3" to="/careers">
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link active ms-3 me-3" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link active ms-3 me-3" to="/about">
                  About Us
                </NavLink>
              </li>
            </ul>
            {/* <form className="d-flex" role="log">
      <li  className="btn btn-outline-light rounded-pill ms-3 me-3" ><NavLink className="nav-link active ms-3 me-3 mt-1" to="/log">Login</NavLink></li>
      <li  className="btn btn-outline-light rounded-pill ms-3 me-3" ><NavLink className="nav-link active ms-3 me-3 mt-1" to="/register">Signup</NavLink></li>

  
        <button
          className="btn btn-outline-light rounded-pill ms-1 me-3"
          type="submit"
        >
          logout
        </button>
        
        <li className="nav-item dropdown ms-3 me-3">
          <a
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Lina
          </a>
          <ul className="dropdown-menu">
            <li>
            <NavLink  class="nav-link active ms-1" to="/Corses">Corses</NavLink>
            </li>
          </ul>
          </li>
      </form> */}
            {/* 
       
        <li className="nav-item">
          <a className="nav-link active ms-3 me-3" aria-current="page" href="#">
          Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3 me-3" aria-current="page" href="#">
          About us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3 me-3" aria-current="page" href="#">
            Teachers
          </a>
        </li>
      </ul>
      <form className="d-flex" role="log">
        <button
          className="btn btn-outline-light rounded-pill ms-3 me-3"
          type="submit"
        >
          login
        </button>
        <button
          className="btn btn-outline-light rounded-pill ms-1 me-5"
          type="submit"
        >
          signup
        </button>
        <button
          className="btn btn-outline-light rounded-pill ms-1 me-5"
          type="submit"
          
        >
          logout
        </button>
        
        <li className="nav-item dropdown ms-3 me-3">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Lina
          </a>
          <ul className="dropdown-menu">
            <li>
            <NavLink  class="nav-link active ms-1" to="/Corses">Corses</NavLink>
            </li>
          </ul>
          </li>
      </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
