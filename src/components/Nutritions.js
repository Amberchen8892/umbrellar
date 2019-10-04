import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Subar_nutrition from './Subar_nutrition'
import Nutrition from './Nutrition'

class Nutritions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
componentDidMount=()=>{
        this.getArticles()

    }
getArticles= async ()=>{
        const response = await fetch(`${process.env.REACT_APP_API}getnutri`, {
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
                       nutris:data.nutris
                    })
                }
    }
    render() { 
       
        return ( 
            <div style={{marginTop:"50px"}}>
                
                <div className="row">
                <div class="col-12 col-md-3">
                <Subar_nutrition nutris={this.state.nutris} token={this.state.token} user={this.state.user} />
                
                </div>
    <div class="col-6 col-md-9">
    

        <Switch>{this.state.nutris && 
        this.state.nutris.map((el,idx)=> 
            <Route  path={`/user/nutritions/week/${idx+1}`} exact={true} component={(props)=><Nutrition nutri={el} token={this.state.token} user={this.state.user} {...props}/>}  />

        )
        }
        </Switch>
        </div>
                </div>
                
                 
    
        
       
           
            </div>
         );
    }
}

export default Nutritions;