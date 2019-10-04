
import React, { Component } from "react";
import { weekdays } from "moment";
import ReactHtmlParser from "react-html-parser";

// this.props.match.params.id
class  Week extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            baby : this.props.baby
         }
    }
    componentDidMount = () => {
    }


    render() {
        
        return (
            <div>
                 <div className="jumbotron" style={{textAlign:"center"}}>
        <img  src={this.state.baby.img_url} style={{ marginBottom:"20px"}}/>
        <h1 className="display-4" style={{fontFamily: `'Bitter',serif`,color:"#ef6c00", marginBottom:"20px"}}>{ReactHtmlParser(this.state.baby.name)}</h1>
        
        
        <p className="lead">{ReactHtmlParser(this.state.baby.body)}</p>
        <hr className="my-4" />
        <p>Review by :<h6>Dr. Jamie Lo</h6></p>
        
      </div>
               

                </div>
          );
    }
}
 
export default Week ;