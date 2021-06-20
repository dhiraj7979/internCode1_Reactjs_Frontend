import React, { Component } from "react";
import './threeCardsSection.css';
import arrowLeft from './arrow-left.png';

export default class ThreeCardsSection extends Component {
  render() {
    return (
      <div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body card-color1">
                    <p className="card-text">
                      Solutions Visualization
                    </p>

                    <h4>Data Visualization</h4>
                    <h4>Practices to Improve</h4>

                    <div className="circle-arrow circle-arrow1">

                      <img className="arrowLeft" src={arrowLeft} alt="" />

                    </div>
                    
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body card-color2 card2-container">
                    <p className="card-text">
                      Data Consulting
                    </p>

                    <h4>Consulting on Invoice Data</h4>
                    <h4>capture</h4>

                    <div className="circle-arrow circle-arrow2">

                      <img className="arrowLeft" src={arrowLeft} alt="" />
                      
                    </div>
                    
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body card-color3">
                    <p className="card-text">
                      Data Case Studies
                    </p>

                    <h4>Delivering the insights</h4>
                    <h4>Data Case</h4>

                    <div className="circle-arrow circle-arrow3">

                    <img className="arrowLeft" src={arrowLeft} alt="" />

                    </div>
                    
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
