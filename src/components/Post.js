import React, { Component } from "react";
import Comments from './Comments'
import Comment from './Comment'
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      body: this.props.post.body,
      post: this.props.post,
      user: this.props.user      
    };
  }
  componentDidMount(){
      this.setState({comments:this.props.comments})
  }

  getComment=(object)=>{
      this.setState(object)
  }

  deletePost = async e => {
    e.preventDefault();
    let deletePost = {
      id: this.state.post.id
    };

    const response = await fetch(
      `process.env.REACT_APP_APIdelete/${this.state.id}`,
      {
        method: "POST",
        body: JSON.stringify(deletePost),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Token ${this.props.token}`
        })
      }
    );
    const data = await response.json();
    if (data.status === 200)
      return window.location.replace("process.env.REACT_APP_FRONT_URL/user/posts");
    if (data.status !== 200) return alert("There is something wrong");
  };

  handleEdit = async e => {
    e.preventDefault();
    let editpost = {
      body: this.state.body,
      id: this.state.post.id
    };
    const response = await fetch(
      `process.env.REACT_APP_APIedit_post/${this.state.post.id}`,
      {
        method: "POST",
        body: JSON.stringify(editpost),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Token ${this.props.token}`
        })
      }
    );
    const data = await response.json();
    if (data.status === 200)
      return window.location.replace("process.env.REACT_APP_FRONT_URL/user/posts");
    if (data.status !== 200) return alert("There is something wrong");
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

    


  render() {
    return (
      <div className="container-post" style={{ marginTop: "50px" }}>
        <div className="card text-center">
          <div className="card-header">{this.state.user.username}</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">{this.state.post.body}</p>
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={e => this.deletePost(e)}
              >
                Delete
              </button>
              <button type="submit" className="btn btn-primary">
                Comment
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="card-footer text-muted">
            {this.state.post.created}
          </div>

          <div className="card-body">
            <Comments 
            user={this.state.user} 
            token={this.props.token} 
            post={this.state.post} 
            comments={this.state.post.comments} 
            data={this.getComment.bind(this)}/>
          
          </div>
        </div>
        {/* model */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={e => this.handleEdit(e)}
                  onChange={e => this.handleChange(e)}
                >
                  <div className="form-group">
                    <input
                      className="form-control textform"
                      id="exampleFormControlTextarea1"
                      name="body"
                      placeholder="what's on your mind?"
                      rows="4"
                      value={this.state.body}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <h1>haha</h1>
              </div>
            </div>
          </div>
        </div>
        {/* end model */}
      </div>
    );
  }
}

export default Post;
