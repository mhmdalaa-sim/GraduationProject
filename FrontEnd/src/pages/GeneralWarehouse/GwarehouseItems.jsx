import React from 'react'
import GeneralNav from './GeneralNav'
import GitemRow from './GitemRow'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'
import {useParams} from "react-router-dom"
function GwarehouseItems({aylist}) {
    const prams = useParams()
    const rowstyle={

        marginTop:"5%"
      }

      const textstyle={

        fontFamily: 'Lalezar',
        fontSize:"2rem"
      }
  return (
    <>
    <GeneralNav></GeneralNav>
    <h1 style={{textAlign:"center", paddingTop:"5%", fontFamily: 'Lalezar',
        fontSize:"4rem"}}>{prams.id} اصناف المخزن رقم   </h1>
    <Container> 
        <Row>
        <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>

        {aylist.map((item)=>{


return <GitemRow key={item.id} item={item}></GitemRow>
})}

<hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px"}}></hr>


<Container fluid="md">
  <Row style={rowstyle}>
    
    <Col style={{textAlign:'center'}}>
    <Row fluid>
 
    <Col> <Form.Label ><h3 style={textstyle}> : تاريخ الانشاء  </h3></Form.Label>
  

    </Col>

    <Col> <Form.Label ><h3 style={textstyle}> : رئيس المخزن </h3></Form.Label>
    
    </Col>

    <Col> <Form.Label ><h3 style={textstyle}> : موقع المخزن </h3></Form.Label>
    <h2></h2>

    </Col>
   
    </Row>



    <Row fluid>
 
    <Col> <Form.Label ><h3 style={textstyle}> : القسم التابع له المخزن </h3></Form.Label>
  

    </Col>

    <Col> <Form.Label ><h3 style={textstyle}> : حاله المخزن </h3></Form.Label>
    
    </Col>

    <Col> <Form.Label ><h3 style={textstyle}> : اسم المخزن</h3></Form.Label>
    <h2></h2>

    </Col>
   
    </Row>
    
  </Col>
  </Row>
  <Row style={rowstyle}>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label><h3 style={textstyle}>الوصف</h3></Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Row>

  <hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px",color:"black"}}></hr>

 
  <Row style={rowstyle}>
  <Col style={{textAlign:'center'}}> 
    <h1 style={textstyle}>
        رؤساء سابقين للمخزن
    </h1>  


  
  </Col>
  


  </Row>

  <Row fluid style={{textAlign:'center',paddingTop:"5%"}}>
 
 <Col> <Form.Label ><h3 style={textstyle}> : تاريخ التقاعد </h3></Form.Label>


 </Col>

 <Col> <Form.Label ><h3 style={textstyle}> : تاريخ الاداره </h3></Form.Label>
 
 </Col>

 <Col> <Form.Label ><h3 style={textstyle}> : الاستاذ</h3></Form.Label>
 <h2></h2>

 </Col>

 </Row>

 <Row fluid style={{textAlign:'center',paddingTop:"5%"}}>
 
 <Col> <Form.Label ><h3 style={textstyle}> : تاريخ التقاعد </h3></Form.Label>


 </Col>

 <Col> <Form.Label ><h3 style={textstyle}> : تاريخ الاداره </h3></Form.Label>
 
 </Col>

 <Col> <Form.Label ><h3 style={textstyle}> : الاستاذ</h3></Form.Label>
 <h2></h2>

 </Col>

 </Row>
  

 <Row fluid style={{textAlign:'center',paddingTop:"5%"}}>
 
 <Col> <Form.Label ><h3 style={textstyle}> : تاريخ التقاعد </h3></Form.Label>


 </Col>

 <Col> <Form.Label ><h3 style={textstyle}> : تاريخ الاداره </h3></Form.Label>
 
 </Col>

 <Col> <Form.Label ><h3 style={textstyle}> : الاستاذ</h3></Form.Label>
 <h2></h2>

 </Col>

 </Row>


</Container>
    </>
  )
}

export default GwarehouseItems