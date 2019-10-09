
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
                 <div className="jumbotron" style={{backgroundColor:"#e1f5fe"}} >
       <div style={{textAlign:"center"}}> <img  src={this.state.baby.img_url} style={{ maxWidth:"70vh", maxHeight:"50vh",marginBottom:"20px"}}/>
       <h1 className="display-4" style={{fontFamily: `'Pacifico',serif`,color:"#03a9f4", marginBottom:"20px"}}>{ReactHtmlParser(this.state.baby.name)}</h1></div>
        <div style={{textAlign:"left !important"}}>
       
        
        
        <p className="lead" style={{fontFamily: `'Lusitana',serif`}}>{ReactHtmlParser(this.state.baby.body)}</p>
        <hr className="my-4" />
        <p>Review by :<h6>Dr. Jamie Lo</h6></p>
        </div>
      </div>
               

                </div>
          );
    }
}
 
export default Week ;