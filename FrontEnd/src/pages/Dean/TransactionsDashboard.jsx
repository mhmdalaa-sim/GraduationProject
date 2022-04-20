import React from 'react'
import SearchPage from '../../components/SearchPage'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeanNav from './DeanNav'
import TransactionsDashboardItem from './TransactionsDashboardItem'
function TransactionsDashboard({Transaction}) {
  return (
    <>
        <DeanNav></DeanNav>
    <h1 style={{textAlign:"center", fontFamily: 'Lalezar',
  fontSize:"4rem",paddingTop:"3%"}}> التحويلات </h1>

<Container> 
      <Row>
      <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
      </Row>
      </Container>


      {Transaction.map((item)=>{


return <TransactionsDashboardItem Key={item.id} item={item} ></TransactionsDashboardItem>
})}

      
    </>
  )
}

export default TransactionsDashboard