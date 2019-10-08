import React, { Component } from "react";
import Link from 'react-router-dom/Link';
import About from '../pages/about'




class Footer extends Component {
  
  render() {
    
    return (
        <>
        
      
        <nav class="navbar fixed-bottom custome-nav">
        <div className="container">
            <div className="row">
                <div className="col-6 col-md-4 box-1" style={{color:'white'}}>UMBRELLA</div>
                <div className="col-6 col-md-4 box-2">
                    <ul>
                        <li style={{color:'white', textDecoration: "none"}}>
                            <Link style={{color:'white', textDecoration: "none"}}to='/about'>About</Link></li>
                        <li style={{color:'white'}}>Careers</li>
                        <li style={{color:'white'}}>Contact</li>
                        <li style={{color:'white'}}>Careers</li>
                        <li style={{color:'white'}}>Advertise</li>
                        <li style={{color:'white'}}>Share Your Stories</li>
                    </ul>
                </div>
                <div className="col-6 col-md-4">
                    <div className='row box-3' style={{color:'white'}}>Follow us </div>
                    <div className='row box-4'>
                    <div className="col">
                        <img src='/images/facebook.png' alt="Facebook"/>
                    </div>
                    <div className="col">
                    <img src='/images/instagram.png' alt="Facebook"/>
                    </div>
                    <div className="col">
                    <img src='/images/twitter.png' alt="Facebook"/>
                    </div>
                    </div>
                </div>
                
                <div className="w-100"></div>
                <div className="col-intro">
                    <p style={{color:'white'}}>
                        Umbrella provides information of a general nature and is designed for educational purposes only. This site does not provide medical advice, diagnosis or treatment.Your use of the site indicates your agreement to be bound by our  Terms of Use and Privacy Policy. Information on our advertising guidelines can be found here.
                    </p>
                </div>
                
            </div>
            </div>
        
        </nav>
      
      </>
      
    );
  }
}

export default Footer;
