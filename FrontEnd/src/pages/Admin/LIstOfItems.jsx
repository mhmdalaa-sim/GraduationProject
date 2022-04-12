import React from 'react'
import ItemRow from '../../components/ItemRow'
import AdminNavBar from './AdminNavBar'
import{Link} from "react-router-dom"
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'
function LIstOfItems({aylist}) {
  return (
    <>
        <AdminNavBar></AdminNavBar>

        <h1 style={{textAlign:"center" ,marginTop:"3%", fontFamily: 'Lalezar',
    fontSize:"4rem"}}>الاصناف الموجوده</h1>
        <Container> 
        <Row>
        <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>

       
        
        {aylist.map((item)=>{


            return <ItemRow key={item.id} item={item}></ItemRow>
        })}

        <Link to="/Admin/NewItem"><Button style={{marginTop:"5%",marginLeft:"10%",   fontFamily: 'Lalezar',
    fontSize:"1.5rem", borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D",}}>اضافه صنف جديد</Button></Link>
    </>
  )
}

export default LIstOfItems