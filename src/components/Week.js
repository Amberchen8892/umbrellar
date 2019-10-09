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
                 <div className="jumbotron" style={{backgroundColor:"#fce4ec"}}>
        
       <div style={{textAlign:"center"}}>
       <img  className="shadow" src={this.state.week.img_url} style={{ maxWidth:"70vw", maxHeight:"60vh",marginBottom:"20px"}}/>
       <h1 className="display-4" style={{fontFamily: `'Courgette',serif`,color:"#e91e63", marginBottom:"20px"}}>{this.state.week.name}</h1>
       </div>
       <div style={{textAlign:"left !important"}}>
        <h6 style={{fontFamily: `'Fredoka One',serif`,color:"#ff4081"}}>How is Mickey</h6>
        <p className="lead">{this.state.week.mickey}</p>
        <h6  style={{fontFamily: `'Fredoka One',serif`,color:"#ff4081"}}>How is Mom</h6>
        <p className="lead">{this.state.week.mom}</p>
        <hr className="my-4" />
        <p>Review by :{this.state.week.reviewby}</p>
        <hr className="my-4" />
        <p>Source:{this.state.week.source}</p>
        </div>
      </div>
                {/* {this.state.week.mickey} */}

                </div>
          );
    }
}
 
export default Week ;