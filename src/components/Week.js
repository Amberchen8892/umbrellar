import { weekdays } from "moment";

import React, { Component } from "react";

// this.props.match.params.id
class  Week extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            week : this.props.week
         }
    }
    componentDidMount = () => {
    }


    render() {
        console.log("quyen check", this.state.week)
        return (
            <div>
                 <div className="jumbotron" style={{textAlign:"center"}}>
        <h1 className="display-4" style={{fontFamily: `'Bitter',serif`,color:"#e91e63", marginBottom:"20px"}}>{this.state.week.name}</h1>
        <img  src={this.state.week.img_url} style={{ marginBottom:"20px"}}/>
        <h6>How is Mickey</h6>
        <p className="lead">{this.state.week.mickey}</p>
        <h6>How is Mom</h6>
        <p className="lead">{this.state.week.mom}</p>
        <hr className="my-4" />
        <p>Review by :<h6>{this.state.week.reviewby}</h6></p>
        <hr className="my-4" />
        <p>Source:{this.state.week.source}</p>
      </div>
                {/* {this.state.week.mickey} */}

                </div>
          );
    }
}
 
export default Week ;