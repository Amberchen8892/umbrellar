import React, { Component } from "react";
import { Badge } from 'react-bootstrap';
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        // console.log("if comment in single comment", this.props.item)
        return (  
            <div style={{display:"flex", flexDirection:"row"}}>
                <form style={{marginTop:"10px"}}>
                    
                    <Badge style={{backgroundColor:"#ffcdd2"}}><h4>{this.props.item.body}</h4></Badge>
                </form>
            </div>
        );
    }
}
 
export default Comment;