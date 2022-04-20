import React from 'react'
import { Navbar ,Container,NavbarBrand,NavLink,Nav ,NavDropdown} from 'react-bootstrap'
import logo1 from './surface1.png'
import logo2 from './documents.png'
import logo3 from './refund.png'
import logo4 from './transaction.png'
import logo5 from './warehouse.png'
import logo6 from './ab-testing.png'
import{Link} from "react-router-dom"
function DeanNav() {

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
<Navbar.Brand ><img src={logo1}  /></Navbar.Brand>
<Nav className="justify-content-end" >
<Nav.Link style={navstyle}  as={Link} to="/Dean/Transactions"  > اظهار التحويلات  <img style={{width:"27%"}} src={logo4}  /></Nav.Link>
<Nav.Link style={navstyle}  as={Link} to="/Dean/Refunds"  > اظهار المستردات  <img  style={{width:"26%"}} src={logo3}  /></Nav.Link>
<Nav.Link style={navstyle}  as={Link} to="/Dean/Warehouses"  > اظهار المخازن <img style={{width:"30%"}} src={logo5}  /></Nav.Link>
 <Nav.Link style={navstyle}  as={Link} to="/Dean/Deprives"  >  اظهار الجرد <img  style={{width:"30%"}} src={logo6}  /></Nav.Link>
 <Nav.Link style={navstyle}  as={Link} to="/Dean/Requests"   > اظهار الطلبات <img style={{width:"30%"}} src={logo2}  /></Nav.Link>
 
</Nav>
</Container>
</Navbar>
</>
  )
}

export default DeanNav