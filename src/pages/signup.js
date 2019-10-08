import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class Signup extends Component {
  constructor() {
    super();
    this.state = {
      isSignin: false,
      username: "",
      email: "",
      password: "",
      repassword: "",
      last_period: new Date(),
      
    };
  }

  handleRegister = async e => {
    e.preventDefault();
    if (this.state.password !== this.state.repassword) {
      alert("Password and Password confirm must match");
    }
    else {
      let newuser = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        last_period: this.state.last_period,
        
      };
      const response = await fetch(`${process.env.REACT_APP_API}signup`, {
        method: "POST",
        body: JSON.stringify(newuser),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      });
      console.log(response)
      const data= await response.json()
      if(data.status === 200)
        return window.location.replace(`${process.env.REACT_APP_FRONT_URL}/user/profile`)
      if (data.status !== 200)
        return alert("There is something wrong")

    }
  };

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
    
    return (
      <div className="container" style={{display:"flex", justifyContent:"center", alignItem:"center"}}>
        <div className="jumbotron jumbotron-fluid custome-jumbo">
          <div className="container">
            <form
              
              onSubmit={e => this.handleRegister(e)}
              onChange={e => this.handleChange(e)}
            >
              <div className="form-group">
                <h1 style={{ textAlign: "center", color:"#e91e63",fontFamily: `'Lobster',serif` }}>Signup</h1>
                <label for="exampleInputEmail1">Username</label>
                <input

                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter your username"
                  autoFocus
                  required={true}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
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
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required={true}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Confirm password</label>
                <input
                  type="password"
                  name="repassword"
                  className="form-control"
                  required={true}
                  placeholder="Re-enter password"
                />
              </div>
              
              <div className="form-group">
                <label for="exampleInputEmail1">Your last mentrual period</label>
                <DatePicker
                selected={this.state.last_period}
                onChange={this.handleDate}
                required={true}
                dateFormat="MM/dd/yyyy h:mm aa"
              />
                
              </div>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
