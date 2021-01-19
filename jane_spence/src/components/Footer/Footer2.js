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
                                  <h3 className="footer2title">PAGES</h3>
                                  <nav>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/home" >HOME</a>
                                    </li>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/topics" >TOPICS</a>
                                    </li>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/locations" >LOCATIONS</a>
                                    </li>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/contact" >CONTACT</a>
                                    </li>
                                </nav>
                              </ul>
                          </div>
                          
                          <div className="col">
                              <ul id="col">
                                <h3 className="footer2title"> EDUCATION TOPICS </h3>
                                <nav>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/contact" >DIABETES</a>
                                    </li>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/contact" >EXERCISE</a>
                                    </li>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/contact" >NUTRITION</a>
                                    </li>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/contact" >MEDICATION</a>
                                    </li>
                                </nav>
                              </ul>
                          </div>

                          <div className="col">
                              <ul id="col">
                                <h3 className="footer2title"> DIETRY INFORMATION </h3>
                                <nav>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/contact" >CARBOHYDRATES</a>
                                    </li>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/contact" >SUGAR</a>
                                    </li>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/contact" >PROTEIN</a>
                                    </li>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/contact" >GLYCAEMIC INDEX</a>
                                    </li>
                                </nav>
                              </ul>
                          </div>

                          <div className="col">
                              <ul id="col">
                                <h3 className="footer2title"> IMPORTANT WEBSITES </h3>
                                <nav>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/contact" >WEBSITE 1</a>
                                    </li>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/contact" >WEBSITE 2</a>
                                    </li>
                                    <li>
                                        <a className="nav-links" href="//localhost:3000/contact" >WEBSITE 3</a>
                                    </li>
                                </nav>
                              </ul>
                          </div>

                    </div>
                    
                </div>
            </div>        
        );
    }
}

export default Footer