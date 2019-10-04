import React, { Component } from "react";
import { Badge } from 'react-bootstrap';
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        console.log("if comment in single comment", this.props.item)
        return (  
            <div style={{display:"flex", flexDirection:"row"}}>
                <form style={{display:"flex",marginTop:"10px"}}>
                    <div ><h6>Posted by:<p>{this.props.item.author}</p></h6></div>
                    <Badge style={{backgroundColor:"#ffcdd2", marginLeft:"10px", fontSize:"16px"}}><h4>{this.props.item.body}</h4></Badge>
                </form>
            </div>
        );
    }
}
 
export default Comment;