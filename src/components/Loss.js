
import React, { Component } from "react";
import { weekdays } from "moment";
import ReactHtmlParser from "react-html-parser";

// this.props.match.params.id
class  Loss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loss : this.props.loss
         }
    }
    componentDidMount = () => {
    }


    render() {
        
        return (
            <div>
                 <div className="jumbotron" style={{backgroundColor:"#d7ccc8"}}>
        <div style={{textAlign:"center"}} ><img  src={this.state.loss.img_url} style={{maxWidth:"70vw", maxHeight:"70vh", marginBottom:"20px"}}/>
        <h1 className="display-4" style={{fontFamily: `'Pacifico',serif`,color:"#795548", marginBottom:"20px"}}>{ReactHtmlParser(this.state.loss.name)}</h1>
        </div>
        <div style={{textAlign:"left !important"}}>
       
      
        <p className="lead" style={{fontFamily: `'Lusitana',serif`}}>{ReactHtmlParser(this.state.loss.body)}</p>
        <hr className="my-4" />
        <p>Review by :<h6>Dr. Jamie Lo</h6></p>
        <hr className="my-4" />
        <p>Source:{ReactHtmlParser(this.state.loss.source)}</p>
        </div>
      </div>
               

                </div>
          );
    }
}
 
export default Loss ;