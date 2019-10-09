import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Subar_loss from './Subar_loss'
import Loss from './Loss'

class Losses extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
componentDidMount=()=>{
        this.getLosses()

    }
getLosses= async ()=>{
        const response = await fetch(`${process.env.REACT_APP_API}getlosses`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${this.props.token}`
            },
          });
        const data= await response.json();
        if(data.status !==200) alert('cannot get data')
              else if (data.status===200){
                  this.setState({
                       losses:data.losses
                    })
                }
    }
    render() { 
       console.log("check loss", this.state.losses)
        return ( 
            <div style={{marginTop:"50px"}}>
                
                <div className="row">
                <div class="col-12 col-md-4" style={{height:"85vh",overflowY:"scroll"}}>
                <Subar_loss losses={this.state.losses} token={this.state.token} user={this.state.user} />
                
                </div>
    <div class="col-6 col-md-8" style={{height:"85vh",overflowY:"scroll"}}>
    

        <Switch>{this.state.losses && 
        this.state.losses.map((el,idx)=> 
            <Route  path={`/user/losses/${el.week}`} exact={true} component={(props)=><Loss loss={el} token={this.state.token} user={this.state.user} {...props}/>}  />

        )
        }
        </Switch>
        </div>
                </div>
                
                 
    
        
       
           
            </div>
         );
    }
}

export default Losses;