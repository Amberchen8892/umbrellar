
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
                 <div className="jumbotron" style={{backgroundColor:"#ede7f6"}}>
        <div style={{textAlign:"center"}} ><img  src={this.state.nutri.img_url} style={{maxWidth:"70vw", maxHeight:"70vh", marginBottom:"40px"}}/>
        <h1 className="display-4" style={{fontFamily: `'Pacifico',serif`,color:"#673ab7", marginBottom:"20px"}}>{ReactHtmlParser(this.state.nutri.name)}</h1></div>
        <div style={{textAlign:"left !important"}}>
        
      
        <p className="lead">{ReactHtmlParser(this.state.nutri.body)}</p>
        <hr className="my-4" />
        <p>Review by :<h6>Dr. Jamie Lo</h6></p>
        <hr className="my-4" />
        <p>Source:{ReactHtmlParser(this.state.nutri.source)}</p>
        </div>
      </div>
               

                </div>
          );
    }
}
 
export default Nutrition ;