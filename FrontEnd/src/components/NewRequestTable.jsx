import React from 'react'
import{Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import { Container,Row,Col,Button,Form,FormControl } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import AddDeleteTableRows from './AddDeleteTableRows'
function NewRequestTable() {

    
  return (
<>
<h1 style={{textAlign:"center",fontFamily: 'Lalezar',
        fontSize:"4rem",paddingTop:"5%"}}> طلب ازن وصرف جديد </h1>
<Form>
        <Container style={{ fontFamily: 'Lalezar',
        fontSize:"1rem",marginTop:"5%"}}>
  <Row className="justify-content-centre">
    <Col style={{marginRight:"2%"}}>
    <Form.Label ><h3>التاريخ</h3></Form.Label> <Form.Control type="date" placeholder="" />
    <Row style={{marginTop:"3%"}}><Form.Label ><h3>اسم  (المخزن/الإدارة/العامل) </h3></Form.Label> <Form.Control type="text" placeholder="" /></Row>
    </Col>

    <Col style={{marginRight:"2%"}}>
    <Row ><Form.Label ><h3>رقم الازن</h3></Form.Label> <Form.Control  type="number" placeholder="" /></Row>
    <Row style={{marginTop:"3%"}}><Form.Label ><h3>سند الصرف</h3></Form.Label> <Form.Control type="text" placeholder="" /></Row>
        
    </Col>

    <Col >
    <Row><Form.Label ><h3>مخزن</h3></Form.Label> <Form.Control type="text" placeholder="" /></Row>
    <Row style={{marginTop:"3%"}}>  <Form.Label ><h3>تاريخ الطلب</h3></Form.Label> <Form.Control type="date" placeholder="" /></Row>
    
        
    </Col>


  </Row>
  

</Container>

</Form>



<AddDeleteTableRows></AddDeleteTableRows>

<Button type="submit" style={{
    marginLeft:"10%",fontFamily: 'Lalezar',
        fontSize:"2rem" ,marginTop:"1%",borderRadius: "10px",
}}>تاكيد </Button>

</>
  )
}

export default NewRequestTable