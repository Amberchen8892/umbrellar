import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Subar_symptom from './Subar_symptom'
import Symptom from './Symptom'
class Symptoms extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount=()=>{
        this.getSymptoms()

    }
    getSymptoms= async ()=>{
        const response = await fetch(`${process.env.REACT_APP_API}getsymptoms`, {
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
                       symptoms:data.symptoms
                    })
                }
    }
    render() { 
        return ( 
            <div style={{marginTop:"50px"}}>
                <div className="row">
                <div class="col-12 col-md-4" style={{height:"85vh",overflowY:"scroll"}}>
                <Subar_symptom symptoms={this.state.symptoms} token={this.state.token} user={this.state.user} />
                
                </div>
    <div class="col-6 col-md-8" style={{height:"85vh",overflowY:"scroll"}}>
    

        <Switch>{this.state.symptoms && 
        this.state.symptoms.map((el,idx)=> 
            <Route  path={`/user/symptoms/${el.week}`} exact={true} component={(props)=><Symptom symptom={el} token={this.state.token} user={this.state.user} {...props}/>}  />

        )
        }
        </Switch>
        </div>
                </div>
            </div>
         );
    }
}
 
export default Symptoms;