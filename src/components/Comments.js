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

    };
  }
  componentDidMount = () => {
    this.setState({ comments: this.props.comments });
  };

  handleComment = async e => {
    e.preventDefault();
    let comment = {
      body: this.state.body,
      id: this.state.post.id
    };
    const response = await fetch(
      `https://127.0.0.1:5000/posts/${this.state.post.id}/comments`,
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
        },
        () => this.props.data({ comments: this.state.comments })
      );
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
    return (
      <div>
        <div>
          <img
            src={this.state.user.profile_url}
            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          />
          <form
            onSubmit={e => this.handleComment(e)}
            onChange={e => this.handleChange(e)}
          >
            <input
              style={{ borderRadius: "10px" }}
              name="body"
              value={this.state.body}
            />
          </form>
        </div>
        {this.state.comments &&
          this.state.comments.map((item, key) => (
            <Comment
              item={item}
              key={item.id}
              user={this.state.user}
              token={this.props.token}
            />
          ))}
      </div>
    );
  }
}

export default Comments;
