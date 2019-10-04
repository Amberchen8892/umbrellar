
import React, { Component } from "react";
import { weekdays } from "moment";
import ReactHtmlParser from "react-html-parser";

// this.props.match.params.id
class  Nutrition extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nutri : this.props.nutri
         }
    }
    componentDidMount = () => {
    }


    render() {
        
        return (
            <div>
                 <div className="jumbotron" style={{textAlign:"center"}}>
        <img  src={this.state.nutri.img_url} style={{maxWidth:"70vw", maxHeight:"70vh", marginBottom:"20px"}}/>
        <h1 className="display-4" style={{fontFamily: `'Bitter',serif`,color:"#ef6c00", marginBottom:"20px"}}>{ReactHtmlParser(this.state.nutri.name)}</h1>
      
        <p className="lead">{ReactHtmlParser(this.state.nutri.body)}</p>
        <hr className="my-4" />
        <p>Review by :<h6>Dr. Jamie Lo</h6></p>
        <hr className="my-4" />
        <p>Source:{this.state.nutri.source}</p>
      </div>
               

                </div>
          );
    }
}
 
export default Nutrition ;