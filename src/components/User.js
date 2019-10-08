import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";

import Update from "./Update";
import Profile from "./Profile";
import Posts from "./Posts";
import Community from "./Community";
import Byweek from "./Byweek";
import Babies from "./Babies";
import Nutritions from "./Nutritions";
import Wombs from "./Wombs";

import datetimeDifference from "datetime-difference";
import moment from 'moment'
const dateTime = require('date-time');






class User extends Component {
  constructor(props) {
    super(props);
    
    if(!this.props.token){
        window.location.replace(
            `${process.env.REACT_APP_FRONT_URL}/login`
          );
    }
    

    this.state = {
      // token: existingToken || accessToken,
        token:this.props.token,
        loaded:false,
        user:{}
    };
  }
  componentDidMount=()=>{
      this.checkToken()

  }
  getDate = (a,q)=>{
    const date1 = new Date(a);
    const date2 = new Date(moment(dateTime()).format('L'))
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffDays);
    // const result = datetimeDifference(date1, date2);
    // console.log("ket qua", result)
    
    if(q==='day') 
    return parseInt(diffDays/7)+' week(s)'+' '+diffDays%7+' day(s)'
    
    
    
  }
  getWeek = (a,q)=>{
    const date1 = new Date(a);
    const date2 = new Date(moment(dateTime()).format('L'))
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffDays);
    // const result = datetimeDifference(date1, date2);
    // console.log("ket qua", result)
    
    if(q==='week') 
    return parseInt(diffDays/7)
    
    
  }
  


  getMonth = (a,q)=>{
    const date1 = new Date(a);
    const date2 = new Date(moment(dateTime()).format('L'))
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffDays);
    
    
    if(q==='month') 
    return parseInt(diffDays/7)
    
    
  }

  checkToken= async ()=>{
    const response = await fetch(`${process.env.REACT_APP_API}users`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.state.token}`
      },
      
    });
    const data= await response.json()   ; console.log("phuong and quyen",data.user.post)


    if(data.status!==200){
        return window.location.replace(`${process.env.REACT_APP_FRONT_URL}/login`)
    } else if (data.status===200){
      data.user.remaining = this.getMonth(data.user.last_period,'month')
      data.user.weeks = this.getDate(data.user.last_period,'day')
      data.user.countweeks = this.getWeek(data.user.last_period,'week')
      this.setState({
           loaded:true,
            user:data.user,
            posts: data.user.post
        })
    }
  }
  render() {
    console.log("phuong and quyen", this.state.posts)
    

    if(!this.state.loaded) return <div className="loading">
      <h5 style={{corlor:"#ef6c00"}}>Baby is loading.....</h5>

    </div>
    return (
      <div style={{marginTop:"-20px"}}> 
        <div  >
          
           
            <Sidebar />
          </div>
          <div >
            <Switch>
            <Route exact path="/user/update" render={(props)=><Update token={this.state.token} user={this.state.user} {...props}/>}  />
            <Route exact path="/user/profile" render={(props)=><Profile token={this.state.token} user={this.state.user} {...props}/>}  />
            <Route exact path="/user/posts" render={(props)=><Posts  posts = {this.state.posts} token={this.state.token} user={this.state.user} fetch={this.checkToken} {...props}/>}  />
            {/* nho71 su73a them */}
            <Route exact path="/user/community" render={(props)=><Community  token={this.state.token} user={this.state.user} {...props}/>}  />
            <Route path="/user/byweek" render={(props)=><Byweek  token={this.state.token} user={this.state.user} {...props}/>}  />
            <Route path="/user/babies" render={(props)=><Babies  token={this.state.token} user={this.state.user} {...props}/>}  />
            <Route path="/user/nutritions" render={(props)=><Nutritions  token={this.state.token} user={this.state.user} {...props}/>}  />
            <Route path="/user/inthewombs" render={(props)=><Wombs token={this.state.token} user={this.state.user} {...props}/>}  />
            </Switch>
          </div>
          </div>
        
      
    );
  }
}

export default User;
