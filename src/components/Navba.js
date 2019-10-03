import React, { Component } from "react";
import Link from "react-router-dom/Link";

// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
// import { width, height } from '@material-ui/system';

//pages
// import Home from '../pages/home';
// import Signup from '../pages/signup';
// import Login from '../pages/login';

export class Navba extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
      
    };

    
  }
  componentDidMount = () => {
    this.checkToken();
  };
  checkToken = async () => {
    console.log(this.props.token, "27");
    const response = await fetch("https://127.0.0.1:5000/users", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.token}`
      })
    });
    const data = await response.json();
    console.log("sdsad", data);
    if (data.status !== 200) {
      this.setState({
        isLogin: false
      });
    } else if (data.status === 200) {
      this.setState({
        isLogin: true,
        user: data.user
      });
    }
  };

  logOut = e => {
    e.preventDefault();
    this.logmeout();
    localStorage.clear("token");
    window.location.replace("http://localhost:3000/login");
  };
  logmeout = async () => {
    const response = await fetch("https://127.0.0.1:5000/logout", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }

    
    });
  };

  render() {
    console.log(this.state.isLogin);
    return (
      <AppBar>
        <Toolbar>
          <div>
            <img
              src="/images/icon8.png"
              alt="logo"
              width={50}
              height={50}
            />
          </div>
          <div style={{ marginRight: 40 }}>
            <h1>UMBRELLA</h1>
          </div>
          
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
          
          {!this.state.isLogin && (
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          )}
          {!this.state.isLogin && (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
          {this.state.isLogin && (
            <Button color="inherit" onClick={e => this.logOut(e)}>
              Log out
            </Button>
          )}
          {this.state.isLogin && (
            <Button color="inherit"component={Link} to="/user/profile" >
              Profile
            </Button>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navba;
