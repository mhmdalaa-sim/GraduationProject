import React from 'react'
import{Link} from "react-router-dom"
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'
import DeanNav from './DeanNav'
import DeanWarehouse from './DeanWarehouse'
function DeanWarehouses({WH}) {
  return (
    <>
      <DeanNav></DeanNav>

      <h1 style={{textAlign:"center",marginTop:"5%",   fontFamily: 'Lalezar',
    fontSize:"4rem"}}>المخازن المتاحه</h1>

       <Container> 
        <Row>
        <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>

       {WH.map((item)=>{


        return <DeanWarehouse key={item.id} item={item}></DeanWarehouse>
       })}
    </>
  )
}

export default DeanWarehouses