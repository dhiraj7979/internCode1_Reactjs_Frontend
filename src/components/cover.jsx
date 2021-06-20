import React, { Component } from "react";
import './cover.css';
import arrowOnCover from './arrowcover2.png';
import coverSideImage from './coverSideImage.jpg';

export default class Cover extends Component {
  render() {
    return (
      <div>
        <div className="position-relative overflow-hidden bg-light mycover">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal heading1">Data Analytics solutions for startup Agency</h1>
            <p className="lead fw-normal mypara1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam magni ex at.
            </p>
            <p className="mypara2">Learn with our comprehensive curriculum and experienced</p>
            <p className="mypara3">Step into the world of practical data science.</p>
            <a className="btn btn-outline-secondary mybtn1" href="#">
              Learn More
            </a>
            <img className="arrow-down" src={arrowOnCover} />
            <div className="para-orange-div">
              <p className="para-orange">Learn More</p>
              <p className="para-orange">our latest work intro</p>
            </div>
          </div>
          <div>
            <img className="coverSideImage" src={coverSideImage} alt="coverSideImage" />
          </div>
          {/* <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div> */}
        </div>
      </div>
    );
  }
}
