import React, { Component } from 'react';
import './navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light pt-3">
                    <div className="container-fluid">
                      <a className="navbar-brand px-4 mx-3 custom-font-bold logo-name" href="/">Sdot</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <a className="nav-link mx-3 custom-font-bold" aria-current="page" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link mx-3 custom-font-bold" href="/">About</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link mx-3 custom-font-bold" href="/">Services</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link mx-3 custom-font-bold" href="/">Page</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link mx-3 custom-font-bold" href="/">Cases</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link mx-3 custom-font-bold" href="/">Blog</a>
                          </li>
                          
                        </ul>

                        <ul className="navbar-nav mb-2 mb-lg-0 navbar-right-links">
                          <li className="nav-item">
                          <button className="nav-link nav-btn1 custom-font-bold">Get in Touch</button>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link nav-sign-in custom-font-bold" href="/">Sign In</a>
                          </li>
                        </ul>
                        
                        
                      </div>
                    </div>
                  </nav>
            </div>
        )
    }
}
