import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Subbar from './Subbar'
import Week from './Week'

class Byweeks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
componentDidMount=()=>{
        this.getArticles()

    }
getArticles= async ()=>{
        const response = await fetch(`${process.env.REACT_APP_API}byweek`, {
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
                       by_weeks:data.by_week
                    })
                }
    }
    render() { 
        console.log("check data",this.state.by_weeks)
        console.log("check token",this.props.token)
        return ( 
            <div style={{marginTop:"50px"}}>
                
                <div className="row">
                <div class="col-12 col-md-4">
                <Subbar by_week={this.state.by_weeks} token={this.state.token} user={this.state.user} />
                </div>
    <div class="col-6 col-md-8">
    

        <Switch>{this.state.by_weeks && 
        this.state.by_weeks.map((el,idx)=> 
            <Route  path={`/user/byweek/week/${idx+1}`} exact={true} component={(props)=><Week week={el} token={this.state.token} user={this.state.user} {...props}/>}  />

        )
        }
        </Switch>
        </div>
                </div>
                
                 
    
        
       
           
            </div>
         );
    }
}

export default Byweeks;