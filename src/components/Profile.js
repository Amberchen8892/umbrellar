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
      week: {},
      countdown: moment(this.props.user.due_date).diff(
        moment().format("L"),
        "days"
      )
    };
  }
  componentWillMount = () => {
    this.getWeek(this.state.user.countweeks);
  };

  getWeek = async num => {
    const response = await fetch(`${process.env.REACT_APP_API}week/${num}`, {
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
    console.log("duedate", moment(this.state.user.last_period).format("L"));
    console.log("today", moment(dateTime()).format("L"));
    console.log("body", this.state.user.countweeks);
    console.log("check nutri", this.state.week.nutri_name);
    console.log("check trimaester", this.state.user.remaining);
    console.log("check cover", this.state.user.cover_url);
    // console.log("check countdown", this.state.countdownWeeks)
    console.log("check date", moment(this.state.user.due_date).format('MMMM'));

    const html = this.state.week.nutri_name;
    const html1 = this.state.week.baby_name;
    const html2 = this.state.week.baby_intro;
    const html4 = this.state.week.nutri_intro;
    return (
      <div className="body-profile">
        <div
          className="container"
          style={{ marginLeft: "50px", marginRight: "20px" }}
        >
          <div class="row">
            <div class="col-md-4" style={{ marginTop: "50px", display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"column"}}>
              <div class="row">
                <div className="card" style={{ width: "25rem" }}>
                  <img
                    src={this.state.user.cover_url}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "15rem" }}
                  />
                  <div className="card-body">
                    <div style={{textAlign:"center"}}>
                    <h4
                      className="card-title"
                      style={{
                        fontFamily: `'Raleway',serif`,
                        color: "#0091ea"
                      }}
                    >
                      {this.state.user.remaining <= 12
                        ? "1st trimester"
                        : 13 <= this.state.user.remaining <= 26
                        ? "2nd trimester"
                        : "3rd trimester"}{" "}
                    </h4>
                    <h5
                      className="card-title"
                      style={{
                        fontFamily: `'PT Serif',serif`,
                        color: "#ff8f00"
                      }}
                    >
                      {this.state.user.weeks}
                    </h5>
                    </div>
                    
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="flex-container">
                          <div style={{ textAlign: "center" }}>
                            Countdown to Mickey
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <div class="row justify-content-center">
                              <div class="col-sm-4"><div style={{width:"50px", height:"50px", backgroundColor:"#1de9b6", borderRadius:"10px", textAlign:"center", display:"flex", justifyContent:"center", alignItems:"center"}} ><div style={{fontSize:"30px",color:"white", fontWeight:"bold"}}>{parseInt(this.state.countdown / 7)}</div></div></div>
                              <div class="col-sm-4"><div style={{width:"50px", height:"50px", backgroundColor:"#1de9b6",borderRadius:"10px", textAlign:"center", display:"flex", justifyContent:"center", alignItems:"center"}}><div style={{fontSize:"30px",color:"white", fontWeight:"bold"}}>{this.state.countdown % 7}</div> </div></div>
                            </div>
                            <div class="row justify-content-center">
                              <div class="col-sm-6">week(s)</div>
                              <div class="col-sm-6">day(s)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="flex-container">
                          <div style={{ textAlign: "center" }}>
                            Estimated due date
                          </div>
                          <div style={{ textAlign: "center" }}>
                            {/* {this.state.user.due_date} */}
                          </div>
                         <div style={{display:"flex", justifyContent:"center"}}> <div style={{width:"100px", height:"110px",backgroundColor:"white", border:"2px solid grey" }}>
                           <div style={{width:"97px", height:"30px", backgroundColor:"#e53935", textAlign:"center"}}>{moment(this.state.user.due_date).format('MMMM')}</div>
                           <div style={{textAlign:"center"}}>{moment(this.state.user.due_date).date()}</div>
                           <div style={{textAlign:"center"}}>{moment(this.state.user.due_date).format('dddd')}</div>
                           <div style={{textAlign:"center"}}>{moment(this.state.user.due_date).year()}</div>
                           </div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style={{ marginTop: "20px" }}>
                <div class="col-sm">
                  <div
                    className="card"
                    style={{ width: "10rem", marginTop: "20px" }}
                  >
                    <div className="parent">
                      <img
                        src="/images/hold.png"
                        className="card-img-top image-1"
                        alt="..."
                        style={{ width: "160px", height: "160px" }}
                      />

                      <img
                        src="/images/hold (1).png"
                        className="card-img-top image-2"
                        alt="..."
                        style={{
                          width: `${(this.state.user.countweeks * 160) / 40}px`,
                          height: `${(this.state.user.countweeks * 160) / 40}px`
                        }}
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
                  <div
                    className="card"
                    style={{ width: "10rem", marginTop: "20px" }}
                  >
                    <div className="parent">
                      <img
                        src="/images/footprint.png"
                        className="card-img-top image-1"
                        alt="..."
                        style={{ width: "160px", height: "160px" }}
                      />
                      <img
                        src="/images/footprint (1).png"
                        className="card-img-top image2"
                        alt="..."
                        // style={{transform: "translate(5%,-40%) scale(0.3)"}}
                        style={{
                          width: `${(this.state.user.countweeks * 160) / 40}px`,
                          height: `${(this.state.user.countweeks * 160) / 40}px`
                        }}
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
              <div class="row">
                <div
                  className="flip-card"
                  style={{ width: "25rem", height: "15rem" }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={this.state.week.womb_image}
                        alt="Avatar"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="flip-card-back">
                      <h1>{this.state.week.womb_name}</h1>

                      <p>{this.state.week.womb_intro}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="flip-card" style={{ width: "25rem" }}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={this.state.week.profile_intro_image}
                        alt="Avatar"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="flip-card-back">
                      <h1>
                        <a href="#">{this.state.week.profile_intro_name}</a>
                      </h1>

                      <p>{this.state.week.profile_intro_body}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-8"
              style={{ marginTop: "50px", paddingLeft: "80px" }}
            >
              <div
                className="card mb-3 card-week"
                style={{ maxWidth: "800px" }}
              >
                <div className="row no-gutters">
                  <div
                    className="col-md-4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <img
                      src={this.state.week.week_image}
                      className="card-img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body ">
                      <h5 className="card-title" style={{ color: "#2196f3" }}>
                        {this.state.week.week}
                      </h5>
                      <p
                        className="card-text"
                        style={{ fontFamily: `'PT Serif',serif` }}
                      >
                        {this.state.week.mickey}
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
              <div
                className="card mb-3 card-week"
                style={{ maxWidth: "800px", height: "" }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4" style={{ height: "inherit" }}>
                    <img
                      src={this.state.week.nutri_image}
                      className="card-img"
                      alt="..."
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "#ff4081" }}>
                        {ReactHtmlParser(html)}
                      </h5>
                      <p
                        className="card-text"
                        style={{ fontFamily: `'PT Serif',serif` }}
                      >
                        {ReactHtmlParser(html4)}
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
              <div
                className="card mb-3 card-week"
                style={{ maxWidth: "800px" }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={this.state.week.baby_image}
                      className="card-img"
                      alt="..."
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5
                        className="card-title flip-name"
                        style={{
                          fontFamily: `'PT Serif',serif`,
                          color: "#ff9800"
                        }}
                      >
                        {ReactHtmlParser(html1)}
                      </h5>
                      <p
                        className="card-text"
                        style={{ fontFamily: `'PT Serif',serif` }}
                      >
                        {ReactHtmlParser(html2)}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
// {this.state.user.remaining.months} -
// {parseInt(this.state.countdown / 7)} week(s){" "}
// {this.state.countdown % 7} day(s)
