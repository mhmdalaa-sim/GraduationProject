import React from 'react'
import { Navbar ,Container,NavbarBrand,NavLink,Nav } from 'react-bootstrap'
import logo from './Group 18.svg'
import logo2 from './contact-form.svg'
import refund from './refund.svg'
import{Link} from "react-router-dom"

const navbar = {backgroundColor: '#448AE5'};
const navstyle={
color:"white"
}

export default function () {
  return (
    <>
        <Navbar style={navbar}>
    <Container>
    <Navbar.Brand ><img src={logo}  /></Navbar.Brand>
    <Nav className="justify-content-end" >
    <Link to='/ExamineMain/Report'>
    
    <Nav.Link style={navstyle}  href="#Report"  >  محضر لجنه فحص <img src={logo2}  /></Nav.Link>
     </Link>
   
     <Link to='/ExamineMain/RefundsDashboard'>
    
     <Nav.Link style={navstyle} href="#RefundsDashboard"  > اظهار المستردات <img src={refund}  /></Nav.Link>
     </Link>
   
     
    </Nav>
    </Container>
  </Navbar>

    </>
  )
}
