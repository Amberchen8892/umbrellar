import React, { Component } from "react";
import Post from "./Post"

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      body:'',
      
      
      
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
    const response = await fetch("process.env.REACT_APP_APIcreate_posts", {
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
    const response = await fetch("process.env.REACT_APP_APIposts", {
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
      console.log('posts', this.state.posts)
    return (

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
                src="/images/flip1.jpeg"
                className="card-img-top"
                alt="..."
                style={{ height: "15rem" }}
              />
              <div className="card-body">
                <h4 className="card-title"> {this.state.user.remaining <= 3 ? "1st trimester" : (this.state.user.remaining <= 6? "2nd trimester" : "3rd trimester") } </h4>
                <h5 className="card-title">{this.state.user.weeks}</h5>
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
                  <p>hahahah</p>
                  <hr className="my-4" />
                  <input className="form-control textform" id="exampleFormControlTextarea1"name="body" placeholder="what's on your mind?"rows="4" value={this.state.body} />
                  
                </div>
                
              </form>
              <hr className="my-4" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
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
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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
        </div>
        
      </div>
      
    );
  }
}

export default Posts;
