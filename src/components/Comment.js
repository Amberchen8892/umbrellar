import React, { Component, useReducer } from "react";
import { Badge, Popover, ListGroup } from "react-bootstrap";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      

    };
    this.deleteComment = this.deleteComment.bind(this);
    this.editComment = this.editComment.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    // this.setState({body:this.props.body})
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = event => {
    // event.preventDefault()
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };

  handleButtonClick = (e) => {
    e.preventDefault()
    this.setState(state => {
      return {
        open: !state.open
      };
    });
  };
  container = React.createRef();
  state = {
    open: false
  };

  deleteComment= async e => {
    e.preventDefault();
    let deleteComment = {
      id: this.props.item.id

    };

    const response = await fetch(
      `${process.env.REACT_APP_API}comment/${this.props.item.id}/delete`,
      {
        method: "POST",
        body: JSON.stringify(deleteComment),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Token ${this.props.token}`
        })
      }
    );
    const data = await response.json();
    if (data.status === 200)
      return window.location.replace(`${process.env.REACT_APP_FRONT_URL}/user/posts`);
    if (data.status !== 200) return alert("There is something wrong");
  }
  

  editComment = async e => {
    e.preventDefault();
    let editcomment = {
      body: this.state.body,
      id: this.props.item.id
    };
    const response = await fetch(
      `${process.env.REACT_APP_API}edit_comment/${this.props.item.id}`,
      {
        method: "POST",
        body: JSON.stringify(editcomment),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Token ${this.props.token}`
        })
      }
    );
    const data = await response.json();
    if (data.status === 200)
      return window.location.replace(`${process.env.REACT_APP_FRONT_URL}/user/posts`);
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
    // console.log("if comment in single comment", this.props.item);


    console.log("check body", this.props.item.body)
    // console.log("check body", this.state.item.body)
    return (
      <div style={{ display: "flex" }}>
        <p style={{ marginRight: "20px" }}>{this.props.item.author}</p>
        <h5>
          <span class="badge badge-success">{this.props.item.body}</span>
        </h5>
        <div className="container-icon" ref={this.container}>
          <span
            style={{ color: "Tomato", marginLeft: "5px" }}
            class="edit_hover_class"
          >
            <a onClick={(e)=>this.handleButtonClick(e)}>
              <i class="fas fa-ellipsis-h"></i>
            </a>
          </span>

          {this.state.open && (
            <div class="dropdown">
                  {this.props.user.id === this.props.item.author_id ? 
                  <ul>
                  <li  ><a style={{display:"flex"}} onClick={this.deleteComment}><span style={{color:"tomato"}}><i class="far fa-trash-alt"></i></span><p style={{marginLeft: "10px", size:"16px", color:"#ff6d00"}}>Delete</p></a></li>
                  <li  ><a 
                            data-toggle="modal"
                            data-target="#exampleModal"
                            style={{display:"flex"}} 
                            onClick={this.editComment}><span style={{color:"tomato"}}><i class="far fa-edit"></i></span><p style={{marginLeft: "10px", size:"16px", color:"#ff6d00"}}>Edit</p></a></li>
                </ul>  :
                <ul>
                
                <li  ><a style={{display:"flex"}} onClick={this.hideComment}><span style={{color:"tomato"}}><i class="far fa-eye-slash"></i></span><p style={{marginLeft: "10px", size:"16px", color:"#ff6d00"}}>Hide</p></a></li>
                
              </ul>
            
            }
              
            </div>
          )}
        </div>
        {/* start Modal */}

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Edit Comment
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
                  onSubmit={e => this.editComment(e)}
                  onChange={e => this.handleChange(e)}
                >
                  <div className="form-group">
                    <input
                      className="form-control textform"
                      id="exampleFormControlTextarea1"
                      name="body"
                      
                      rows="4"
                      value={this.state.body}
                    />
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
        {/* end Modal */}
      </div>
    );
  }
}

export default Comment;
