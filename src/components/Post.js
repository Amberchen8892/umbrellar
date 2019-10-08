import React, { Component } from "react";
import moment from "moment";
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
      `${process.env.REACT_APP_API}delete/${this.state.id}`,
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
      return window.location.replace(`${process.env.REACT_APP_FRONT_URL}/user/posts`);
    if (data.status !== 200) return alert("There is something wrong");
  };

  handleEdit = async e => {
    e.preventDefault();
    let editpost = {
      body: this.state.body,
      id: this.state.post.id
    };
    const response = await fetch(
      `${process.env.REACT_APP_API}edit_post/${this.state.post.id}`,
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
    
    return (
      <div className="container-post" style={{ marginTop: "50px" }}>
        <div className="card text-center" style={{marginBottom:"20px"}}>
          <div className="card-header" style={{backgroundColor:"#b3e5fc"}}>
            <div className="row">
              <div className="col-md-2" style={{ display:"flex", justifyContent:"center",alignItems:"center"}}>
              <div style={{ display:"flex", justifyContent:"center",alignItems:"center"}}>
              <img src={this.state.user.profile_url} style={{width:"50px", height:"50px", borderRadius:"50%", marginRight:"10px"}} />
              </div>
              </div>
              <div className="col-md-4" style={{marginLeft:"-20px"}}>
                <div style={{marginLeft:"-95px"}}>
                <div style={{marginTop:"10px", marginBottom:"-5px"}}>
                <h6 style={{color:"#2196f3", fontSize:"16px"}}>{this.state.user.username}</h6>
                </div>
                <div style={{fontSize:"12px"}}><p >{moment(this.state.post.created).format('ll')}</p></div>
                {/* <div><p>{moment(this.state.post.created).startOf('hour').fromNow()} </p></div> */}
                </div>
                
              </div>
            </div>
            
            
            
          </div>
          <div className="card-body">
            
            <p className="card-text" style={{color:"#311b92",fontFamily: `'Playfair Display',serif`}}>{this.state.post.body}</p>
            <div>
              
              
            </div>
          </div>
          <div className="card-footer text-muted" style={{display:'flex', height:"40px", alignItems:"center", backgroundColor:"#b3e5fc"}}>
            <div className="row" style={{width:"100%"}}>
              <div className="col-6 col-md-6" style={{display:"flex", alignItems:"cengter", marginTop:"10px"}}>
              {this.state.post.updated && (
              <p style={{fontSize:"12px"}}>Updated on:{moment(this.state.post.updated).format('ll')}</p>
            )}
              </div>
              <div className="col-6 col-md-6"style={{display:"flex",justifyContent:"flex-end", alignItems:"center", marginTop:"5px"}} >
                <span><a data-toggle="modal" data-target="#exampleModalCenter"><i class="far fa-edit"></i></a></span>
                <span style={{marginLeft:"10px"}}><a onClick={e => this.deletePost(e)}><i class="far fa-trash-alt"></i></a></span>
              </div>
              
            </div>
           
           
          </div>
          {this.state.post.img_url && (
              <img style={{width:"40rem", height:"200px"}} src={this.state.post.img_url} class="card-img-top" alt="..."/>
          )}
        

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
