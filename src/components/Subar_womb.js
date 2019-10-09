import React, { Component } from "react";
import {Link } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";
class Subar_womb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    
    return (
      <div>
        {this.props.wombs &&
          this.props.wombs.map((item, key) => (
            
            
                <div className="card mb-3" style={{ maxWidth: "540px", border:"none"}}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={item.img_url} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title" style={{color:"#ef6c00"}}><Link style={{color:"#ff6e40"}} to={`/user/inthewombs/week/${item.week}`}>{ReactHtmlParser(item.name)}</Link></h5>
                      </div>
                    </div>
                  </div>
                
                
              
            </div>
            
          ))}
      </div>

     
    );
  }
}

export default Subar_womb;
