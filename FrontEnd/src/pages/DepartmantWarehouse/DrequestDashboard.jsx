import React from 'react'
import SearchPage from '../../components/SearchPage'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import Request from '../../components/Request'
import { Link } from 'react-router-dom'
import DepartmentNav from './DepartmentNav'
function DrequestDashboard({Req}) {
  return (
    <>
    <DepartmentNav></DepartmentNav>
    <h1 style={{textAlign:"center", fontFamily: 'Lalezar',
  fontSize:"4rem",paddingTop:"3%"}}>استمارات الصرف </h1>

<Container> 
      <Row>
      <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
      </Row>
      </Container>

      {Req.map((item)=>{


return <Request Key={item.id} item={item}></Request>
})}




<Link to="/NewRequestTable"><Button type="submit" style={{
  marginLeft:"10%",fontFamily: 'Lalezar',
      fontSize:"2rem" ,marginTop:"5%",borderRadius: "10px",
}}>عمل استماره جديده</Button></Link>

    </>
  )
}

export default DrequestDashboard