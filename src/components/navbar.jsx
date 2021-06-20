import React, { Component } from 'react';
import './navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light pt-3">
                    <div class="container-fluid">
                      <a class="navbar-brand px-4 mx-3 custom-font-bold logo-name" href="#">Sdot</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                            <a class="nav-link mx-3 custom-font-bold" aria-current="page" href="#">Home</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link mx-3 custom-font-bold" href="#">About</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link mx-3 custom-font-bold" href="#">Services</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link mx-3 custom-font-bold" href="#">Page</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link mx-3 custom-font-bold" href="#">Cases</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link mx-3 custom-font-bold" href="#">Blog</a>
                          </li>
                          
                        </ul>

                        <ul className="navbar-nav mb-2 mb-lg-0 navbar-right-links">
                          <li className="nav-item">
                          <button className="nav-link nav-btn1 custom-font-bold">Get in Touch</button>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link nav-sign-in custom-font-bold" href="#">Sign In</a>
                          </li>
                        </ul>
                        
                        
                      </div>
                    </div>
                  </nav>
            </div>
        )
    }
}
