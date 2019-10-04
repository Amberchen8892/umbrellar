import React, { Component } from "react";
import {Link } from 'react-router-dom';
class Subbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.by_week &&
          this.props.by_week.map((item, key) => (
            
              
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={item.img_url} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title"><Link to={`/user/byweek/week/${item.week}`}>{item.name}</Link></h5>
                      </div>
                    </div>
                  </div>
                
                
              
            </div>
          ))}
      </div>
    );
  }
}

export default Subbar;
