import React from 'react'
import DitemRow from './DitemRow'
import DepartmentNav from './DepartmentNav'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'
function DepratmentItems({aylist}) {

    const rowstyle={

        marginTop:"5%"
      }

      const textstyle={

        fontFamily: 'Lalezar',
        fontSize:"2rem"
      }
  return (

    
  <>

<DepartmentNav></DepartmentNav>
    <h1 style={{textAlign:"center", paddingTop:"5%", fontFamily: 'Lalezar',
        fontSize:"4rem"}}> الاصناف المتاحه    </h1>
    <Container> 
        <Row>
        <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>

        {aylist.map((item)=>{


return <DitemRow key={item.id} item={item}></DitemRow>
})}



  </>
  )
}

export default DepratmentItems