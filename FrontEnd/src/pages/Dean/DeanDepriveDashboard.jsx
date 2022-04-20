import React from 'react'
import SearchPage from '../../components/SearchPage'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeanNav from './DeanNav'
import DeanDeprive from './DeanDeprive'
function DeanDepriveDashboard({Req}) {
  return (
    <>
    <DeanNav></DeanNav>
     <h1 style={{textAlign:"center", fontFamily: 'Lalezar',
   fontSize:"4rem",paddingTop:"3%"}}>طلبات الجرد </h1>
 
 <Container> 
       <Row>
       <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
       </Row>
       </Container>
 
       {Req.map((item)=>{
 
 
 return <DeanDeprive Key={item.id} item={item}></DeanDeprive>
 })}
 
 
 
 
 
     </>
  )
}

export default DeanDepriveDashboard