import React, { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <div className="about">
                <div className="row">
        <div className="col-12 col-md-8 about-text" >
        <h1 style={{textAlign:"center", color:"rgb(236, 108, 69"}}>About</h1>
                <p>It’s long been said that motherhood doesn’t come with a manual but we thought, why not?</p>

<p>Umbrella was born to send expert ideas and mom-to-mom inspiration to women exactly when they need it. Because an uplifting online community full of expert tricks-of-the-trade and inspiring stories were exactly what we were missing the first time we became moms.</p>

<p>Our personalized, week-by-week guides know exactly where you are in the journey because we’ve been there too. Awful morning sickness? BEEN THERE. Diaper blowout on an airplane? DONE IT (hand over the wipes). Managing a demanding job and a growing family and an awesome workout routine? HONESTY TIME: WE’RE WORKING ON IT.</p>

<p>Founded by a mom and an entrepreneur who used to struggle to make her life easier with a newborn. Umbrella is always looking for new ways to make mothers’ lives better.</p>

<p>We’re just getting started. Join us.</p>
        </div>
        <div className="col-6 col-md-4"></div>
      </div>
                </div>
                

            </div>
         );
    }
}
 
export default About;
