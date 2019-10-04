import React, { Component } from "react";
import moment from "moment";
import Post from "./Post"


class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      body:'',
      today: moment(new Date()).format('ll')
      
      
      
    };
    
  }
  componentDidMount=()=>{
    // this.setState({posts:this.props.user.post})
    this.getPosts()
  }
  
  handlePost = async e => {
    e.preventDefault();
    let newpost={
      body:this.state.body
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
          posts:data.post_body,
          body:''
        })
        this.props.fetch()
      }
        // return window.location.replace('process.env.REACT_APP_FRONT_URL/user/posts/?id=${id}')
      if (data.status !== 200)
        return alert("There is something wrong")
  }


  getPosts= async ()=>{
    const response = await fetch(`${process.env.REACT_APP_API}posts`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.props.token}`
      },
    });
    const data= await response.json()
    if(data.status!==200){
alert('get POSTS fail')

    } else if (data.status===200){
      this.setState({
           posts:data.posts
        })
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
      console.log('posts', this.state.today)
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
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={this.state.user.cover_url}
                className="card-img-top"
                alt="..."
                style={{ height: "15rem" }}
              />
              <div className="card-body">
                <h4 className="card-title" style={{fontFamily: `'Raleway',serif`, color:"#0091ea"}}> {this.state.user.remaining <= 3 ? "1st trimester" : (this.state.user.remaining <= 6? "2nd trimester" : "3rd trimester") } </h4>
                <h5 className="card-title" style={{fontFamily: `'PT Serif',serif`, color:"#ff8f00"}}>{this.state.user.weeks}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div
            class=".col-6 .col-md-4"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="jumbotron custome-jumbotron shadow-jumbo">
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
                  
                </div>
                
              </form>
              <hr className="my-4" />
              <p style={{fontFamily: `'Raleway',serif`, color:"#ff5722"}}>
                "I’m writing my story so that others might see fragments of themselves"
              </p>
            </div>
            {this.state.posts && this.state.posts.map((item, key) =>
    <Post key={item.id} user={this.state.user} post={item} comments={item.comments} token={this.props.token} />
)}
        
          </div>
          <div
            class=".col-6 .col-md-4"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="card" style={{ width: "18rem", marginBottom:"30px" }}>
              <img src="/images/advert5.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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
                <h5 className="card-title">Card title</h5>
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
                <h5 className="card-title">Card title</h5>
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
                <h5 className="card-title">Card title</h5>
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
