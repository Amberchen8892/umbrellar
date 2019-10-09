import React, { Component } from "react";
import moment from "moment";
const dateTime = require("date-time");
class Community extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open: false,
         }
    //     this.deleteComment = this.deleteComment.bind(this);
    // this.editComment = this.editComment.bind(this);
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
      }
      componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
      }
      handleClickOutside = event => {
        // event.preventDefault()
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
      };
    
      handleButtonClick = (e) => {
        e.preventDefault()
        this.setState(state => {
          return {
            open: !state.open
          };
        });
      };
      container = React.createRef();
      state = {
        open: false
      };
    componentDidMount(){
       
    }
    // getAllPosts= async ()=>{
    //     const response = await fetch(`${process.env.REACT_APP_API}posts`, {
    //         method: "POST",
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `Token ${this.props.token}`
    //         },
    //       });
    //     const data= await response.json();
    //     if(data.status !==200) alert('cannot get data')
    //           else if (data.status===200){
    //               this.setState({
    //                    posts: data.posts
    //                 })
    //             }
    // }
    render() { 
        console.log("check community")
        return ( <div className="container-community"  >
            <div className="commingsoon">
              <div style={{width:"60%", height:"30%"}}>
                <h4 style={{color:"#5d4037"}}>"The greatness of a community is most accurately measured by the compassionate actions of its members." – Coretta Scott King</h4>
              </div>
              <div>
                <h5>We will comeback soon. Sorry for the inconvenience</h5>
              </div>
            </div>
            
           

        </div> );
    }
}
 
export default Community;