import React from 'react'
import { Navbar ,Container,NavbarBrand,NavLink,Nav ,NavDropdown} from 'react-bootstrap'
import logo from './Group 18.svg'
import logo1 from './add (1).png'
import logo2 from './warehouse.png'
import logo3 from './add.png'
import logo5 from './deletedlogo.png'
import logo6 from './userlogo.png'
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu
} from "react-pro-sidebar";
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarSubMenu,
    CDBSidebarFooter,
    CDBBadge,
    CDBContainer,
  } from 'cdbreact';
  import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowRightCircle
  } from "react-icons/fi";
  import{Link} from "react-router-dom"
  import {useState} from "react"
  import "./Header.css";
function SideNav2() {

    const navstyle={
        color:"white",fontFamily: 'Lalezar',
        fontSize:"1.0rem",
                        } 
    const [menuCollapse, setMenuCollapse] = useState(false);
    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
      //condition checking to change state from true to false and vice versa
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
  return (
      <>
       <div style={{position: "fixed",
            width:" 100%",
            height: "100%",
            left: "0",
            top: 0,
            
           }}>
        
      <CDBSidebar textColor="white" backgroundColor=" rgb(68, 138, 229)" maxWidth="500px">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>

        <Navbar.Brand as={Link} to="/AdminMain"> <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt=""
              style={{ width: '100px' }}
            />
      
          </div></Navbar.Brand>
         
        </CDBSidebarHeader>

     
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="fa-light fa-users"> <Nav.Link style={navstyle}  as={Link} to="/UsersList" >  المستخدمين</Nav.Link></CDBSidebarMenuItem>
            <CDBSidebarMenuItem ></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line" iconType="solid">
            <Nav.Link   icon="fa-light fa-warehouse" style={navstyle} as={Link} to="/WareHouses" >  المخازن </Nav.Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem ></CDBSidebarMenuItem>
         
            <CDBSidebarMenuItem icon="fa-light fa-plus">
            <SubMenu  title="اضافه" style={navstyle}>
                <CDBSidebarMenuItem ><MenuItem ><Nav.Link  style={navstyle} as={Link} to="/itemslist" >  صنف</Nav.Link></MenuItem></CDBSidebarMenuItem>
                <CDBSidebarMenuItem ><MenuItem ><Nav.Link  style={navstyle} as={Link} to="/NewUser" >  مستخدم</Nav.Link></MenuItem></CDBSidebarMenuItem>
                <CDBSidebarMenuItem ><MenuItem ><Nav.Link  style={navstyle} as={Link} to ="/Admin/NewWarehouse" >  مخزن</Nav.Link></MenuItem></CDBSidebarMenuItem>
                </SubMenu>
            </CDBSidebarMenuItem>

            <CDBSidebarMenuItem ></CDBSidebarMenuItem>

            <CDBSidebarMenuItem icon="fa-light fa-trash">
            <SubMenu  title="قائمه المحزوفات" style={navstyle}>
                <CDBSidebarMenuItem ><MenuItem ><Nav.Link  style={navstyle} as={Link} to="/DeletedUsersList" >  صنف</Nav.Link></MenuItem></CDBSidebarMenuItem>
                <CDBSidebarMenuItem ><MenuItem ><Nav.Link  style={navstyle} as={Link} to="/DeletedWareHouses" >  مستخدم</Nav.Link></MenuItem></CDBSidebarMenuItem>
                <CDBSidebarMenuItem ><MenuItem ><Nav.Link  style={navstyle} as={Link} to ="/DeletedItems" >  مخزن</Nav.Link></MenuItem></CDBSidebarMenuItem>
                </SubMenu>
            </CDBSidebarMenuItem>

            <CDBSidebarMenuItem ></CDBSidebarMenuItem>

          </CDBSidebarMenu>
          
         

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >

        <CDBSidebarMenuItem icon="fa-solid fa-arrow-left" ><Nav.Link  style={navstyle} as={Link} to="" >  تسجيل خروج</Nav.Link></CDBSidebarMenuItem>
            
          </div>
        </CDBSidebarFooter>

          

        </CDBSidebarContent>
      </CDBSidebar>
      </div>
      
      
      </>
    
  )
}

export default SideNav2