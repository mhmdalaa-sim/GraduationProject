import React from 'react'
import GdashboardItem from '../GeneralWarehouse/GdashboardItem'
import SearchPage from '../../components/SearchPage'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DepartmentNav from './DepartmentNav'
import DdashboardItem from './DdashboardItem'
function DrefundDashboard({Refund}) {
  return (
    <>
    <DepartmentNav></DepartmentNav>

    <h1 style={{textAlign:"center", fontFamily: 'Lalezar',
    fontSize:"4rem",paddingTop:"3%"}}>طلبات الاسترداد</h1>

<Container> 
        <Row>
        <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>
        
        
{Refund.map((item)=>{


    return <DdashboardItem Key={item.id} item={item}></DdashboardItem>
})}


<Link to="/NewRefundTable"><Button type="submit" style={{
    marginLeft:"10%",fontFamily: 'Lalezar',
        fontSize:"2rem" ,marginTop:"5%",borderRadius: "10px",
}}>عمل طلب ارجاع جديد</Button></Link>

    </>
  )
}

export default DrefundDashboard