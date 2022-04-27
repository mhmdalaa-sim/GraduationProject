import React from 'react'
import { Navbar ,Container,NavbarBrand,NavLink,Nav ,NavDropdown} from 'react-bootstrap'
import logo1 from './warehouse.png'
import logo2 from './documents.png'
import logo3 from './refund.png'
import logo4 from './add.png'
import logo from './Group 18.svg'
import{Link} from "react-router-dom"
function GeneralNav() {

    const navbar = {backgroundColor: '#448AE5',
    fontFamily: 'Lalezar',
    fontSize:"1.5rem"

};
const navstyle={
color:"white"
}
  return (
    <>
    <Navbar style={navbar}>
<Container>
<Navbar.Brand ><img src={logo}  /></Navbar.Brand>
<Nav className="justify-content-end" >
<Nav.Link style={{color:"white",paddingTop:"25px"}}  as={Link} to="/General/additems"  > تسجيل الاصناف <img style={{width:"25%"}} src={logo4}  /></Nav.Link>
<Nav.Link style={{color:"white",paddingTop:"23px"}}  as={Link} to="/General/refundsDashboard"  > طلبات الارتجاع <img style={{width:"30%",paddingBottom:"2px"}} src={logo3}  /></Nav.Link>
 <Nav.Link style={{color:"white",paddingTop:"30px"}}  as={Link} to="/General/Requests"  > استمارات الصرف <img style={{width:"25%"}} src={logo2}  /></Nav.Link>
 <Nav.Link style={{color:"white",paddingTop:"27px"}}  as={Link} to="/General/WareHousesItems"   > الاصناف المتاحه  <img style={{width:"25%"}} src={logo1}  /></Nav.Link>
 
</Nav>
</Container>
</Navbar>
</>
  )
}

export default GeneralNav