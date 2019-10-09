import React, { Component } from "react";
import moment from "moment";
const dateTime = require("date-time");
class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
       this.getAllPosts()
    }
    getAllPosts= async ()=>{
        const response = await fetch(`${process.env.REACT_APP_API}posts`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${this.props.token}`
            },
          });
        const data= await response.json();
        if(data.status !==200) alert('cannot get data')
              else if (data.status===200){
                  this.setState({
                       posts: data.posts
                    })
                }
    }
    render() { 
        return ( <div className="wrapper">
            <div className="card text-center">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div>

        </div> );
    }
}
 
export default Community;