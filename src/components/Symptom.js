
import React, { Component } from "react";
import { weekdays } from "moment";
import ReactHtmlParser from "react-html-parser";

// this.props.match.params.id
class  Symptom extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            symptom : this.props.symptom
         }
    }
    componentDidMount = () => {
    }


    render() {
        
        return (
            <div>
                 <div className="jumbotron" style={{backgroundColor:"#e0f2f1"}}>
        <div style={{textAlign:"center"}} ><img  src={this.state.symptom.img_url} style={{maxWidth:"70vw", maxHeight:"70vh", marginBottom:"20px"}}/>
        <h1 className="display-4" style={{fontFamily: `'Bitter',serif`,color:"#26a69a", marginBottom:"20px"}}>{ReactHtmlParser(this.state.symptom.name)}</h1></div>
        <div style={{textAlign:"left !important"}}>
        
      
        <p className="lead">{ReactHtmlParser(this.state.symptom.body)}</p>
        <hr className="my-4" />
        <p>Review by :<h6>Dr. Jamie Lo</h6></p>
        <hr className="my-4" />
        <p>Source:{ReactHtmlParser(this.state.symptom.source)}</p>
        </div>
      </div>
               

                </div>
          );
    }
}
 
export default Symptom ;