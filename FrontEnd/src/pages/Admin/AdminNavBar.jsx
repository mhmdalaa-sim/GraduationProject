import React from 'react'
import { Navbar ,Container,NavbarBrand,NavLink,Nav ,NavDropdown} from 'react-bootstrap'
import logo from './Group 18.svg'
import logo1 from './add (1).png'
import logo2 from './warehouse.png'
import logo3 from './add.png'
import logo4 from './refresh-page-option.png'
import{Link} from "react-router-dom"
function AdminNavBar() {

    const navbar = {backgroundColor: '#448AE5',

    fontFamily: 'Lalezar',
    fontSize:"1.5rem"


  };
    const navstyle={
    color:"white",
    
                    }   

                    const dropnavbar = {backgroundColor: '#448AE5',
                    paddingTop:"3%",
                    color:"white"
                    
                
                };

  return (
    <Navbar style={navbar}>
    <Container>
    <Navbar.Brand ><img src={logo}  /></Navbar.Brand>
    <Nav className="justify-content-end" >

    

    <NavDropdown title={

<span style={{color:'white'}}>تعديل</span>
    } id="nav-dropdown" style={dropnavbar}>
        <NavDropdown.Item style={dropnavbar} eventKey="4.1"  as={Link} to="/UsersList" >مستخدم</NavDropdown.Item>
         <NavDropdown.Item style={dropnavbar} eventKey="4.2"  as={Link} to="/WareHouses">مخزن</NavDropdown.Item>

      </NavDropdown> <NavLink><img src={logo4}  /></NavLink>
    
   <NavDropdown title={ 

<span style={{color:'white'}}>اضافه</span>
    }
    id="nav-dropdown" style={dropnavbar}>
        
        <NavDropdown.Item style={dropnavbar} eventKey="4.1"  as={Link} to="/NewUser">مستخدم</NavDropdown.Item>
       
        <NavDropdown.Item style={dropnavbar} eventKey="4.2" as={Link } to ="/Admin/NewWarehouse">مخزن</NavDropdown.Item>
        
      </NavDropdown> <NavLink><img src={logo3}  /></NavLink>
      
    
    
    <Nav.Link style={navstyle}  as={Link} to="/WareHouses" >  المخازن المتاحه <img src={logo2}  /></Nav.Link>
    
   
     
     
    
     <Nav.Link style={navstyle} as={Link} to="/itemslist" > اضافه صنف  <img src={logo1}  /></Nav.Link>
     
   
     
    </Nav>
    </Container>
  </Navbar>
  )
}

export default AdminNavBar