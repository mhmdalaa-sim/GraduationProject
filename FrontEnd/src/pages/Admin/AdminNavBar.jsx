import React from 'react'
import { Navbar ,Container,NavbarBrand,NavLink,Nav ,NavDropdown} from 'react-bootstrap'
import logo from './Group 18.svg'
import logo1 from './add (1).png'
import logo2 from './warehouse.png'
import logo3 from './add.png'
import logo4 from './refresh-page-option.png'
import logo5 from './deletedlogo.png'
import logo6 from './userlogo.png'

import{Link} from "react-router-dom"
function AdminNavBar() {

    const navbar = {backgroundColor: '#448AE5',

    fontFamily: 'Lalezar',
    fontSize:"1.4rem",
    marginRight:"5px"
  };
    const navstyle={
    color:"white",fontFamily: 'Lalezar',
    fontSize:"1.4rem",
    
                    }   

                    const dropnavbar = {backgroundColor: '#448AE5',
                    paddingTop:"1%",
                    color:"white",
                
                };

  return (
    <Navbar style={navbar}>
    <Container>
    <Navbar.Brand as={Link} to="/AdminMain"><img src={logo}  /></Navbar.Brand>
    <Nav className="justify-content-end" >
    
    
    <NavDropdown title={

     <span style={{color:'white'}}>قائمة المحذوفات</span>
    } id="nav-dropdown" style={dropnavbar}>
        <NavDropdown.Item style={dropnavbar} eventKey="4.1"  as={Link} to="/DeletedUsersList" >مستخدم</NavDropdown.Item>
         <NavDropdown.Item style={dropnavbar} eventKey="4.2"  as={Link} to="/DeletedWareHouses">مخزن</NavDropdown.Item>
         <NavDropdown.Item style={dropnavbar} eventKey="4.3"  as={Link} to="/DeletedItems">صنف</NavDropdown.Item>

      </NavDropdown> <NavLink><img src={logo5}  /></NavLink>

    
    
   <NavDropdown title={ 

<span style={{color:'white'}}>اضافه</span>
    }
    id="nav-dropdown" style={dropnavbar}>
        
        <NavDropdown.Item style={dropnavbar} eventKey="4.1"  as={Link} to="/NewUser">مستخدم</NavDropdown.Item>
       
        <NavDropdown.Item style={dropnavbar} eventKey="4.2" as={Link } to ="/Admin/NewWarehouse">مخزن</NavDropdown.Item>
        
      </NavDropdown> <NavLink><img src={logo3}  /></NavLink>
      
      <Nav.Link style={navstyle}  as={Link} to="/UsersList" >  المستخدمين  <img src={logo6}  /></Nav.Link>

    
    <Nav.Link style={navstyle}  as={Link} to="/WareHouses" >  المخازن  <img src={logo2}  /></Nav.Link>
    
   
     
     
    
     <Nav.Link style={navstyle} as={Link} to="/itemslist" > اضافه صنف  <img src={logo1}  /></Nav.Link>
     
   
     
    </Nav>
    </Container>
  </Navbar>
  )
}

export default AdminNavBar