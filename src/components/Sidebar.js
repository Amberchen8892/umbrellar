import React, { Component } from "react";
import Link from "react-router-dom/Link";
import { Button, Navbar, Nav, Form, NavDropdown, FormControl } from 'react-bootstrap';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
       
        
 <Navbar bg="light" expand="lg">
   <Navbar.Brand href="#home">Make life easier</Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="mr-auto">
       <Nav.Link href="/user/profile">Profile</Nav.Link>
       <Nav.Link href="/user/update">Update</Nav.Link>
       <Nav.Link href="/user/posts">Posts</Nav.Link>
       <Nav.Link href="/user/community">Community</Nav.Link>
       <Nav.Link href="/user/byweek/week/1">By Week</Nav.Link>
       <Nav.Link href="/user/babies/week/1">Babies</Nav.Link>
       <Nav.Link href="/user/nutritions/week/1">Nutrition</Nav.Link>
       <Nav.Link href="/user/inthewombs/week/1">In the womb</Nav.Link>
       <Nav.Link href="/user/losses/5">Pregnancy Loss</Nav.Link>
       <Nav.Link href="/user/symptoms/18">Symptoms</Nav.Link>
       {/* <NavDropdown title="Dropdowns" id="basic-nav-dropdown">
         <NavDropdown.Item href="#action/3.1">Symptoms</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">Pregnancy Loss</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Labor-Delivery</NavDropdown.Item>
         <NavDropdown.Item href="/user/nutritions/week/1">Nutrition</NavDropdown.Item>
         <NavDropdown.Divider />
         <NavDropdown.Item href="#action/3.4">Planing</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.4">Excercise</NavDropdown.Item>
       </NavDropdown> */}
     </Nav>
    
   </Navbar.Collapse>
 </Navbar>

      </div>
      

      
      
    );
  }
}

export default Sidebar;
