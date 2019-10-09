import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Subar_baby from './Subar_baby'
import Baby from './Baby'

class Babies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
componentDidMount=()=>{
        this.getArticles()

    }
getArticles= async ()=>{
        const response = await fetch(`${process.env.REACT_APP_API}getbaby`, {
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
                       babies:data.babies
                    })
                }
    }
    render() { 
       
        return ( 
            <div style={{marginTop:"50px"}}>
                
                <div className="row">
                <div class="col-12 col-md-4" style={{height:"90vh",overflowY:"scroll"}}>
                <Subar_baby babies={this.state.babies} token={this.state.token} user={this.state.user} />
                
                </div>
    <div class="col-6 col-md-8" style={{height:"90vh",overflowY:"scroll"}}>
    

        <Switch>{this.state.babies && 
        this.state.babies.map((el,idx)=> 
            <Route  path={`/user/babies/week/${el.week}`} exact={true} component={(props)=><Baby baby={el} token={this.state.token} user={this.state.user} {...props}/>}  />
           

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