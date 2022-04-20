import React from 'react'
import SearchPage from '../../components/SearchPage'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeanNav from './DeanNav'
import DeanRefundItem from './DeanRefundItem'
function DeanRefundsDashboard({Refund}) {
  return (
   <>
    <DeanNav></DeanNav>

    <h1 style={{textAlign:"center", fontFamily: 'Lalezar',
    fontSize:"4rem",paddingTop:"3%"}}>طلبات الاسترداد</h1>

<Container> 
        <Row>
        <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>
        
        
{Refund.map((item)=>{


    return <DeanRefundItem Key={item.id} item={item}></DeanRefundItem>
})}




   </>
  )
}

export default DeanRefundsDashboard