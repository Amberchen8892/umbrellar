import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isSignin: false,

      email: "",
      password: ""
    };
  }
  handleLogin = async e => {
    e.preventDefault();
    let check_login={
      email: this.state.email,
      password: this.state.password
    };
    console.log("===", check_login)
    const response = await fetch("https://127.0.0.1:5000/login", {
      method: "POST",
      body: JSON.stringify(check_login),
      headers: new Headers({
        "Content-Type": "application/json"
        })
      });
      const data= await response.json()
      console.log(data,'data')
      if(data.status === 200)
        localStorage.setItem('token',data.token)
        window.location.replace('http://localhost:3000/user/update')
      if (data.status !== 200)
        return alert("There is something wrong")
    }
    handleChange = e => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value
      });
    }
  


  
  render() {

    return (
      <div className="container1">
        <div class="jumbotron jumbotron-fluid custome-jumbo">
          <div class="container">
            <form
              className="form-login"
              onSubmit={e => this.handleLogin(e)}
              onChange={e => this.handleChange(e)}
            >
              <h1 style={{ textAlign: "center" }}>Login</h1>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                ></input>
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                ></input>
              </div>

              <div style={{ textAlign: "center" }}>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
              <a href="https://127.0.0.1:5000/login/facebook">Facebook</a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
