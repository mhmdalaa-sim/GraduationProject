import React from 'react'
import GeneralNav from './GeneralNav'
import{Link} from "react-router-dom"
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'
import GwareHouse from './GwareHouse'
function GwarehouseList({WH}) {
  return (<>
    <GeneralNav></GeneralNav>
   
   
   
   
    <h1 style={{textAlign:"center",marginTop:"5%",   fontFamily: 'Lalezar',
    fontSize:"4rem"}}>المخازن المتاحه</h1>

       <Container> 
        <Row>
        <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>

       {WH.map((item)=>{


        return <GwareHouse key={item.id} item={item}></GwareHouse>
       })}
   </>
   
  )
}

export default GwarehouseList