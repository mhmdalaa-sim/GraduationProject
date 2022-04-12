import React from 'react'
import {useState} from "react"
import UsersData from '../../data/UsersData'
import AdminNavBar from './AdminNavBar'
import { Container,Row,Col,Button } from 'react-bootstrap'
import{Link} from "react-router-dom"
import SearchPage from '../../components/SearchPage'
function UsersList() {

    const[UD,setUD]=useState(UsersData)

    const style={
        backgroundColor:"#448AE5",
        color:"white",
        borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D",
        marginTop:"3%",
        padding:"1%",
        fontFamily: 'Lalezar',
    fontSize:"2rem",
    
        

    }
  return (
   <>
   <AdminNavBar></AdminNavBar>
     
   <Container> 
        <Row>
        <Col style={{float:"right", marginTop:"5%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>
       {UD.map((item)=>{
           return <>
           <Container style={style}>
     
      <Row className="justify-content-end">
      <Col >
    
      
      <Link to={`/UpdateUser`}><Button style={{float:'left',color:'white', borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D"
        }}>تعديل </Button></Link>
        
        </Col>

        <Col sm m lg="auto" style={{float:'right'}}>
          <h5 > {item.date}: تاريخ الادخال </h5>
        </Col>

        <Col sm m lg="auto" style={{float:'right'}}>
          <h5 > {item.role}: الدور </h5>
        </Col>

        <Col sm m lg="auto" style={{float:'right'}}>
          <h5 >{item.name} : اسم المستخدم </h5>
        </Col>

        <Col sm m lg="auto" style={{float:'right'}}>
          <h5 >- {item.id}</h5>
        </Col>
        

        
        
      </Row>
      
    
      
    </Container>

           </>
           
       })}
   </>
  )
}

export default UsersList