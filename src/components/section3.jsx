import React, { Component } from "react";
import './section3.css';
import Section3Img from './section3Image.jpg';
import LeafImage from '../images/leaf.PNG';

export default class Section3 extends Component {
  render() {
    return (
      <div className="section3">
          <div className="section3-heading">
              <h1>Why Data Science Sdot Data </h1>
              <h1>Science for Everyone</h1>

            <div className="section3-circle"></div>

            <div className="section3-leaf">
              <img className="leafImage" src={LeafImage} alt="" />
            </div>

          </div>
        <div class="position-relative overflow-hidden myflex-container">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h2 className="">Data Science Sdot is one of the</h2>
            <h2>leading platforms providin data</h2>
            <h2>scence solution</h2>
            <p className="mt-4">
              And an even wittier subheading to boot. Jumpstart your marketing
              efforts with this example based on Apple’s marketing pages.
            </p>
            <p className="mt-4 mb-4">
              And an even wittier subheading to boot. Jumpstart your marketing
              efforts with this example based on Apple’s marketing pages.
            </p>
            <a class="btn btn-outline-dark px-4 section3-btn" href="#">
              Learn More
            </a>
          </div>
          <div>
              <img className="Section3Img" src={Section3Img} alt="Section3Image" />
          </div>
        </div>
      </div>
    );
  }
}
