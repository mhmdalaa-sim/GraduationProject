import React from 'react'
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
import{Link} from "react-router-dom"

function GitemRow({item}) {
    const style={
        backgroundColor:"white",
        color:"black",
        borderRadius: "10px",
        marginTop:"3%",
        padding:"1%",
        border: '5px solid #448AE5', 

        fontFamily: 'Lalezar',
  
    }

    const rowstyle={
        fontFamily: 'Lalezar',
      fontSize:"1.5rem"
      }

  return (
    <Container style={style}>
    <Row className="justify-content-end">
    
    <Col >
    
    <Link to={`/Generalitem/${item.id}/${item.Name}`}><Button type="submit" style={{float:'left',backgroundColor:"#448AE5",color:'white',fontFamily: 'Lalezar',
    fontSize:"1.5rem", borderRadius: "10px",
        borderStyle:"solid",
        borderColor: "#15509D",
    }}>اظهار</Button></Link>
    </Col>
    
    <Col sm m lg="auto">
    <h5 style={rowstyle}> {item.date} :التاريخ</h5>
    </Col>
    
    
    <Col sm m lg="auto">
    <h5 style={rowstyle}> اسم الصنف : {item.Name} </h5>
    
    
    </Col>
    
    <Col sm m lg="auto">
    <h5 style={rowstyle}>  {item.id}: رقم الصنف</h5>
    </Col>
    
    
    
    </Row>
    
    
    </Container>
  )
}

export default GitemRow