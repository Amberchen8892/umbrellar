import React, { Component } from "react";
import {Link } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";
class Subar_nutrition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('im fired')
    return (
      <div>
        {this.props.nutris &&
          this.props.nutris.map((item, key) => (
            
            
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={item.img_url} className="card-img" alt="..."  style={{ width: "100%", height: "100%" }}/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title" style={{color:"#ef6c00"}}><Link to={`/user/nutritions/week/${item.week}`}>{ReactHtmlParser(item.name)}</Link></h5>
                      </div>
                    </div>
                  </div>
                
                
              
            </div>
            
          ))}
      </div>

     
    );
  }
}

export default Subar_nutrition;
