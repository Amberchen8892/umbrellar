import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Subar_womb from './Subar_womb'
import Womb from './Womb'

class Babies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
componentDidMount=()=>{
        this.getArticles()

    }
getArticles= async ()=>{
        const response = await fetch(`${process.env.REACT_APP_API}babyinthewomb`, {
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
                       wombs:data.wombs
                    })
                }
    }
    render() { 
       
        return ( 
            <div>
                
                <div className="row">
                <div class="col-12 col-md-3">
                <Subar_womb wombs={this.state.wombs} token={this.state.token} user={this.state.user} />
                
                </div>
    <div class="col-6 col-md-9">
    

        <Switch>{this.state.wombs && 
        this.state.wombs.map((el,idx)=> 
            <Route  path={`/user/inthewombs/week/${idx+1}`} exact={true} component={(props)=><Womb womb={el} token={this.state.token} user={this.state.user} {...props}/>}  />

        )
        }
        </Switch>
        </div>
                </div>
                
                 
    
        
       
           
            </div>
         );
    }
}

export default Babies;