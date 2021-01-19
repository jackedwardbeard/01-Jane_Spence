import React, { Component } from 'react';
import './Footer2.css'

class Footer extends Component{
    render() {
        return (
            
            <div className="footer2">
                <div className="container">
                    <div className="row"> 

                          <div className="col">
                              <ul id="col">
                                  <h4 className="footer2title">PAGES</h4>
                                  <li>HOME</li>
                                  <li>TOPICS</li>
                                  <li>LOCATIONS</li>
                                  <li>CONTACT</li>
                              </ul>
                          </div>
                          
                          <div className="col">
                              <ul id="col">
                                <h4 className="footer2title"> TOPICS </h4>
                                  <li>DIABETES</li>
                                  <li>MEDICATION</li>
                                  <li>EXERCISE</li>
                                  <li>DIETING</li>
                              </ul>
                          </div>

                          <div className="col">
                              <ul id="col">
                                <h4 className="footer2title"> DIETRY INFORMATION </h4>
                                  <li>CARBOHYDRATES</li>
                                  <li>SUGAR</li>
                                  <li>PROTEIN</li>
                                  <li>GLYCAEMIC INDEX</li>
                              </ul>
                          </div>

                    </div>
                    
                </div>
            </div>        
        );
    }
}

export default Footer