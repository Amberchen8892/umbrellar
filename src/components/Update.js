import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  moment from 'moment'

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            username:this.props.user.username,
            email: this.props.user.email,
            firstname:this.props.user.firstname,
            lastname:this.props.user.laststname,
            profile_url:this.props.user.profile_url,
            cover_url:this.props.user.cover_url,
            last_period: new Date()
        }
    }
    
    
    handleUpdate = async e =>{
      console.log('go')
        e.preventDefault();
        let update ={
            lastname:this.state.lastname,
            firstname:this.state.firstname,
            email: this.state.email,
            last_period: this.state.last_period,
            username:this.state.username,
            profile_url:this.state.profile_url,
            cover_url:this.state.cover_url,
            
        };
        
        const response = await fetch("https://127.0.0.1:5000/update", {
        method: "POST",
        body: JSON.stringify(update),
        headers: new Headers({
          "Content-Type": "application/json",
          'Authorization': `Token ${this.props.token}`
          
        })
        });
      const data= await response.json()
      if(data.status === 200)
        return window.location.replace('http://localhost:3000/user/profile')
      if (data.status !== 200)
        return alert("There is something wrong")
      }

    
    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
          [name]: value
        });
      };
      handleDate = date => {
        this.setState({
          last_period: date
        });
      };
    render() { 
      console.log("anh kjhoa",this.props.user.last_period)
      console.log("anh kjhoa",this.props.user.lastname)
      console.log("phuong")
        return (  
            <div className="container update-css ">
              
        <div className="jumbotron jumbotron-fluid custome-jumbo">
          <div className="container">
            <form
              
              onSubmit={e => this.handleUpdate(e)}
              onChange={e => this.handleChange(e)}
            >
              <div className="form-group">
                <h1 style={{ textAlign: "center" }}>Update Info</h1>
                
              </div>
              <div className="form-group">
                <label >First Name</label>
                <input
                  type="text"
                  value={this.state.firstname}
                  name="firstname"
                  className="form-control"
                  placeholder="Enter your first name"
                  required={true}
                />
                
              </div>
              <div className="form-group">
                <label >Last Name</label>
                <input
                  type="text"
                  value={this.state.lastname}
                  name="lastname"
                  className="form-control"
                  placeholder="Enter your last name"
                  required={true}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  value={this.state.email}
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required={true}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              
              <div className="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  value={this.state.username}
                  name="username"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required={true}
                />
                
              </div>
              
              <div className="form-group">
                <label for="exampleInputEmail1">Profile Picture</label>
                <input
                  type="text"
                  value={this.state.profile_url}
                  name="profile_url"
                  className="form-control"
                  
                  placeholder="Enter your image url"
                  required={true}
                />
                
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Cover Picture</label>
                <input
                  type="text"
                  value={this.state.cover_url}
                  name="profile_url"
                  className="form-control"
                  
                  placeholder="Enter your image url"
                  required={true}
                />
                
              </div>
              
              
              
              <div className="form-group">
                <label for="exampleInputEmail1">Your last menstrual period</label>
                <DatePicker
                selected={this.state.last_period}
                onChange={this.handleDate}
                required={true}
                dateFormat="Pp"
                
              />
                
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={e => this.handleUpdate(e)}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
        );
    }
}
 
export default Update;