
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
//MUI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// Components
import Navba from "./components/Navba";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Signup from "./pages/signup";
import Login from "./pages/login";
import User from "./components/User";

const hello = process.env.REACT_APP_FRONT_URL
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'
    }
  },

  
})


class App extends Component {
  constructor(){
    super()
    const existingToken = localStorage.getItem("token");
    const accessToken =
      window.location.search.split("=")[0] === "?api_key"
        ? window.location.search.split("=")[1]
        : null;

    // if (!accessToken && !existingToken) {
    //   window.location.replace(
    //     `process.env.REACT_APP_FRONT_URL/login`
    //   );
    // }
    if (accessToken) {
      localStorage.setItem("token", accessToken);
    }
    this.state={
      token: existingToken || accessToken
    }
  }

  render() {
    console.log('helo',hello)
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
        <Router>
        <Navba token={this.state.token} />
          <div className="container-fluid" >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/about" component={About} />
              <Route  path="/user" render={(props)=><User token={this.state.token} {...props}/>} />
              
            </Switch>
          </div>
          <Footer />
          
        </Router>
      </div>
      </ThemeProvider>
      
    );
  }
}

export default App;
