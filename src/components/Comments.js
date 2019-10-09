import React, { Component } from "react";
import Comment from "./Comment";
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.token,
      post: this.props.post,
      user: this.props.user,
      body: "",
      comments: this.props.comments
    };
  }
  componentDidMount = () => {

  };

   componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.post !== prevProps.post) {
      this.setState({post:this.props.post});
    }
  }

  handleComment = async e => {
    e.preventDefault();
    let comment = {
      body: this.state.body,
      id: this.state.post.id
    };
    const response = await fetch(
      `${process.env.REACT_APP_API}posts/${this.state.post.id}/comments`,
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Token ${this.props.token}`
        })
      }
    );
    const data = await response.json();
    if (data.status !== 200) {
      return alert("There is something wrong");
    } else if (data.status === 200) {
      this.setState(
        {
          comments: data.comments,
          body: ""
        })
        this.props.fetch()
      ;
    }
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    // if (this.state.comments) console.log("comments",this.state.comments);
    // need to know who will go first, redner go first state doesnt have will undifined
    console.log('anh hai', this.state.comments)
    console.log('anh hai', this.props.comments)
    return (
      <div>
        
        
        {this.props.comments.length > 0 &&
          this.props.comments.map((item, key) => (
            <Comment
              item={item}
              key={item.id}
              id={item.id}

              body={item.body}
              user={this.state.user}
              token={this.props.token}
              fetch={this.props.fetch}
            />
          ))}

<div style={{display:"flex"}}>
          <img
            src={this.state.user.profile_url}
            style={{ width: "35px", height: "35px", borderRadius: "50%", marginRight:"20px" }}
          />
          <form
            
            onSubmit={e => this.handleComment(e)}
            onChange={e => this.handleChange(e)}
          >
            <input
              type="text"
              style={{ borderRadius: "10px", width:"500px" , height: "40px"}}
              name="body"
              value={this.state.body}
              placeholder="write your comment"
              
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Comments;
