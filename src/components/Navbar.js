import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Modal from "../screens/Modal";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

export default function Navbar() {
  const [modalView, setModalView] = useState(false)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            lostNfound
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/itemsLost">
                  Lost Items
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/itemsFound">
                  Found Items
                </Link>
              </li>
            </ul>
            <button className="btn btn-success" style={{"margin":"10px"}} type="submit" onClick={()=>{setModalView(true)}}>
              Login
            </button>
            {modalView? <Modal onClose={()=>{setModalView(false)}}><Login/></Modal>:null}
            <button className="btn btn-success" style={{"margin":"10px"}} type="submit" onClick={()=>{setModalView(true)}}>
              SignUp
            </button>
            {modalView? <Modal onClose={()=>{setModalView(false)}}><SignUp/></Modal>:null}
          </div>
        </div>
      </nav>
    </div>
  );
}
