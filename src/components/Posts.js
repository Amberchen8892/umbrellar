import React, { Component } from "react";
import moment from "moment";

import Post from "./Post"
const dateTime = require("date-time");


class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      posts:this.props.posts,
      body:'',
      img_url:'',
      today: moment(new Date()).format('ll'),
      countdown:moment(this.props.user.due_date).diff(moment().format('L'), 'days')
      
      
      
    };
    
  }
  componentDidMount=()=>{
    // this.setState({posts:this.props.user.post})
    // this.getPosts()
    
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.posts !== prevProps.posts) {
      this.setState({posts:this.props.posts});
    }
  }



  handlePost = async e => {
    e.preventDefault();
    let newpost={
      body:this.state.body,
      img_url:this.state.img_url
    };
    const response = await fetch(`${process.env.REACT_APP_API}create_posts`, {
      method: "POST",
      body: JSON.stringify(newpost),
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': `Token ${this.props.token}`
      })
    });
    const data= await response.json()
      if(data.status === 200){
        this.setState({
          body:'',
          img_url:''
        })
        this.props.fetch()
        
      }
      if (data.status !== 200)
        return alert("There is something wrong")
  }


//   getPosts= async ()=>{
//     const response = await fetch(`${process.env.REACT_APP_API}posts`, {
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Token ${this.props.token}`
//       },
//     });
//     const data= await response.json()
//     if(data.status!==200){
// alert('get POSTS fail')

//     } else if (data.status===200){
//       this.setState({
//            posts:data.posts
//         })
//     }
//   }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
      console.log('posts in posts', this.state.posts)
      console.log('posts in posts', this.props.posts)
    return (
      <div className="body-profile">
        <div
        className="container-prfile"
        style={{ marginTop: "20px", width: "100vw", height: "100%" }}
      >
        
        <div class="row">
          <div
            class=".col-6 .col-md-4"
            style={{ marginLeft: "30px", marginTop: "20px" }}
          >
              <div className="card shadow-lg" style={{ width: "25rem" }}>
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
                      <div class="col-6">
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
                              <div class="col-6" style={{marginRight:"-35px"}}>week(s)</div>
                              <div class="col-6"style={{marginRight:"-10px"}}>day(s)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="flex-container">
                          <div style={{ textAlign: "center" }}>
                            Estimated due date
                          </div>
                          <div style={{ textAlign: "center" }}>
                            {/* {this.state.user.due_date} */}
                          </div>
                         <div style={{display:"flex", justifyContent:"center"}}> <div style={{width:"100px", height:"110px",backgroundColor:"white", border:"2px solid grey" }}>
                           <div style={{width:"97px", height:"30px", backgroundColor:"#2196f3", textAlign:"center", color:"white"}}>{moment(this.state.user.due_date).format('MMMM')}</div>
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
          <div
            class=".col-6 .col-md-4"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="jumbotron custome-jumbotron shadow-jumbo shadow">
              <form
                onSubmit={e => this.handlePost(e)}
                onChange={e => this.handleChange(e)}
              >
                <div className="form-group">
                  <div style={{display:"flex"}}>
                    <img  src={this.state.user.profile_url} style={{width:"64px", height:"64px", borderRadius:"50%"}}/>
                    <div style={{marginLeft:"10px"}}>
                    <h3 style={{color:"#673ab7"}}>{this.state.user.username}</h3>
                    <p><img src="/images/calendar.png" style={{width:"20px", height:"20px", marginRight:"5px" }}/>{this.state.today}</p>
                    </div>
                    
                  </div>
                  <hr className="my-4" />
                  <input className="form-control textform" id="exampleFormControlTextarea1"name="body" placeholder="what's on your mind?"rows="4" value={this.state.body} style={{color:"#00b0ff"}} />
                  <input className="form-control textform" id="exampleFormControlTextarea1"name="img_url" placeholder="Wanna share your picture?"rows="4" value={this.state.img_url} style={{color:"#00b0ff", marginTop:"30px"}} />
                  
                </div>
                <div style={{display:'flex', justifyContent:"center", alignItems:"center"}}><button onClick={e => this.handlePost(e)} style={{backgroundColor:"#673ab7", width:"60px", height:"30px",borderRadius:"10px", color:"white"}}>Post</button></div>
                
              </form>
              <hr className="my-4" />
              <p style={{fontFamily: `'Raleway',serif`, color:"#ff5722"}}>
                "I’m writing my story so that others might see fragments of themselves"
              </p>
            </div>
            {this.state.posts && this.state.posts.map((item, key) => <div className='shadow'> 
    <Post key={item.id} user={this.state.user} post={item} comments={item.comments} token={this.props.token} fetch={this.props.fetch}/>
    </div>
)}
        
          </div>
          <div
            class=".col-6 .col-md-4"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="card shadow-lg" style={{ width: "18rem", marginBottom:"30px" }}>
              <img src="/images/advert5.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Car Seat</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://www.amazon.com/s?k=car+seat&ref=nb_sb_noss_1" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem", marginBottom:"30px" }}>
              <img src="/images/advert1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Elephant Hooded Towel</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://www.carters.com/carters-baby-girl-accessories/V_126H530.html" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem", marginBottom:"30px" }}>
              <img src="/images/advert2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Burp Cloths</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://www.carters.com/carters-baby-boy-accessories/V_17579210.html" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem", marginBottom:"30px" }}>
              <img src="/images/advert3.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pregnancy Pillow</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://www.amazon.com/PharMeDoc-Pregnancy-Maternity-Detachable-Extension/dp/B07WDYX3RL/ref=sr_1_2?crid=3CBNN9MV0AMDJ&keywords=pillow+for+pregnant+women&qid=1570178875&sprefix=pillow+for+pre%2Caps%2C642&sr=8-2" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
        
      </div>

      
      
    );
  }
}

export default Posts;
