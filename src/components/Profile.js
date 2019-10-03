import React, { Component } from "react";
import datetimeDifference from "datetime-difference";
import moment from "moment";
import ReactHtmlParser from "react-html-parser";
const dateTime = require("date-time");

// const html = `<div class="red"><p><strong>Instead of:</strong>Large fish high in mercury, like tuna, sea bass and swordfish</p><p><strong>Choose:</strong>Smaller fish that are lower in mercury, like salmon, shrimp, freshwater trout, Atlantic haddock, sardines, crab, scallops and tilapia.Even though fish is healthy, large sized fish are higher in mercury and may be harmful to a developing baby’s’ brain and nervous system. Smaller fish have less mercury and are a better choice. Eat 2-3 servings of low-mercury fish per week and try to eat a variety of different types.</p></div>`;
// <div>{ReactHtmlParser(html)}</div>
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      user: this.props.user,
      token: this.props.token,
      week: {}
    };
  }
  componentWillMount = () => {
    this.getWeek(this.state.user.countweeks);
  };
  
  getWeek = async num => {
    const response = await fetch(`https://127.0.0.1:5000/week/${num}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${this.state.token}`
      }
    });
    const data = await response.json();
    if (data.status !== 200) {
      alert("cannot load");
    } else if (data.status === 200) {
      console.log("weekkkkss", data[num.toString()]);
      this.setState({
        week: data[num.toString()]
      });
    }
  };

  render() {
    console.log("dsadasdasdas", this.state.user.last_period);
    console.log("duedate", moment(this.state.user.last_period).format("L"));
    console.log("today", moment(dateTime()).format("L"));
    console.log("body", this.state.user.countweeks)

    const html=this.state.week.nutri_name
    const html1=this.state.week.baby_name
    const html2=this.state.week.baby_intro
    return (
      <div className="body-profile">
        <div
        className="container"
        style={{ marginLeft: "50px", marginRight: "20px" }}
      >
        <div class="row">
          <div class="col-sm-4" style={{marginTop:"50px"}}>
            <div class="row">
              <div className="card" style={{ width: "25rem" }}>
                <img
                  src="/images/flip1.jpeg"
                  className="card-img-top"
                  alt="..."
                  style={{ height: "15rem" }}
                />
                <div className="card-body">
                  <h4 className="card-title">{this.state.user.remaining <= 3 ? "1st trimester" : (this.state.user.remaining <= 6? "2nd trimester" : "3rd trimester") } </h4>
                  <h5 className="card-title" style={{ fontSize: "" }}>
                    {this.state.user.weeks}
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="row" style={{ marginTop: "20px" }}>
              <div class="col-sm">
                <div className="card" style={{ width: "10rem" ,  marginTop:"20px" }}>
                  <div className="parent">
                    <img
                      src="/images/hold.png"
                      className="card-img-top image-1"
                      alt="..."
                      style={{width:"160px",height:"160px"}}
                    />
                    
                    <img
                      src="/images/hold (1).png"
                      className="card-img-top image-2"
                      alt="..."
                      style={{ width:`${this.state.user.countweeks*160/40}px`, height: `${this.state.user.countweeks*160/40}px` }}
                    />
                  
                    
                  </div>

                  <div className="card-body">
                    <p className="card-text">
                      <div style={{ display: "flex" }}>
                        <div className="origin"></div>
                        <div style={{ marginLeft: "5px" }}>9 months</div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className="now"></div>
                        <div style={{ marginLeft: "5px" }}>this week</div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm">
                <div className="card" style={{ width: "10rem", marginTop:"20px" }}>
                  <div className="parent">
                    <img
                      src="/images/footprint.png"
                      className="card-img-top image-1"
                      alt="..."
                      style={{width:"160px",height:"160px"}}
                    />
                    <img
                      src="/images/footprint (1).png"
                      className="card-img-top image2"
                      alt="..."
                      // style={{transform: "translate(5%,-40%) scale(0.3)"}}
                      style={{ width:`${this.state.user.countweeks*160/40}px`, height: `${this.state.user.countweeks*160/40}px` }}
                    />
                  </div>

                  <div className="card-body">
                    <p className="card-text">
                      <div style={{ display: "flex" }}>
                        <div className="origin"></div>
                        <div style={{ marginLeft: "5px" }}>9 months</div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className="now"></div>
                        <div style={{ marginLeft: "5px" }}>this week</div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" >
              
                <div className="flip-card" style={{width:"25rem"}}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={this.state.week.week_image}
                        alt="Avatar"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="flip-card-back">
                      <h1>John Doe</h1>
                      <p>Architect &amp; Engineer</p>
                      <p>We love that guy</p>
                    </div>
                  </div>
                
              </div>
   

            </div>
                       
            <div className="row" >
            
                <div className="flip-card" style={{width:"25rem"}}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={this.state.week.profile_intro_image}
                        alt="Avatar"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="flip-card-back">
                      <h1>{this.state.week.profile_intro_name}</h1>
                      
                      <p>{this.state.week.profile_intro_body}</p>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
          <div class="col-sm-8" style={{marginTop:"50px", paddingLeft:"80px"}}>
            
            
            <div className="card mb-3 card-week" style={{ maxWidth: "800px" }}>
              <div className="row no-gutters">
                <div className="col-md-4" style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                  <img
                    src={this.state.week.week_image}
                    className="card-img"
                    alt="..."
                   
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body ">
                    <h5 className="card-title" style={{color:"#2196f3"}}>{this.state.week.week}</h5>
                    <p className="card-text">{this.state.week.mickey}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 card-week" style={{ maxWidth: "800px", height:"" }}>
              <div className="row no-gutters">
                <div className="col-md-4" style={{height:"inherit"}}>
                  <img
                    src={this.state.week.nutri_image}
                    className="card-img"
                    alt="..."
                    style={{height:"100%"}}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title" style={{color:"#ff4081"}}>{ReactHtmlParser(html)}</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 card-week" style={{maxWidth: '800px'}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={this.state.week.baby_image} className="card-img" alt="..." style={{height:"100%"}} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title flip-name" style={{color:"#ff9800"}}>{ReactHtmlParser(html1)}</h5>
              <p className="card-text">{ReactHtmlParser(html2)}</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

          </div>
        </div>
      </div>
      </div>
      
    );
  }
}

export default Profile;
// {this.state.user.remaining.months} -
