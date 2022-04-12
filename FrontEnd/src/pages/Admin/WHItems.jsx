import React from 'react'
import {useParams} from "react-router-dom"
import AdminNavBar from './AdminNavBar'
import ItemRow from '../../components/ItemRow'
import { Container,Row,Col,Button,Form,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'
function WHItems({aylist}) {
    const prams = useParams()
    const rowstyle={

        marginTop:"5%"
      }
  return (
<>
<AdminNavBar></AdminNavBar>
<h1 style={{textAlign:"center", paddingTop:"5%"}}>{prams.id} اصناف المخزن رقم   </h1>



<Container> 
        <Row>
        <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>


{aylist.map((item)=>{


return <ItemRow key={item.id} item={item}></ItemRow>
})}

<hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px"}}></hr>


<Container fluid="md">
  <Row style={rowstyle}>
    
    <Col style={{textAlign:'center'}}>
    <Row fluid>
 
    <Col> <Form.Label ><h3> : تاريخ الانشاء  </h3></Form.Label>
  

    </Col>

    <Col> <Form.Label ><h3> : رئيس المخزن </h3></Form.Label>
    
    </Col>

    <Col> <Form.Label ><h3> : موقع المخزن </h3></Form.Label>
    <h2></h2>

    </Col>
   
    </Row>



    <Row fluid>
 
    <Col> <Form.Label ><h3> : القسم التابع له المخزن </h3></Form.Label>
  

    </Col>

    <Col> <Form.Label ><h3> : حاله المخزن </h3></Form.Label>
    
    </Col>

    <Col> <Form.Label ><h3> : اسم المخزن</h3></Form.Label>
    <h2></h2>

    </Col>
   
    </Row>
    
  </Col>
  </Row>
  <Row style={rowstyle}>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label><h3>الوصف</h3></Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Row>

  <hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px",color:"black"}}></hr>

 
  <Row style={rowstyle}>
  <Col style={{textAlign:'center'}}> 
    <h1>
        رؤساء سابقين للمخزن
    </h1>  


  
  </Col>
  


  </Row>

  <Row fluid style={{textAlign:'center',paddingTop:"5%"}}>
 
 <Col> <Form.Label ><h3> : تاريخ التقاعد </h3></Form.Label>


 </Col>

 <Col> <Form.Label ><h3> : تاريخ الاداره </h3></Form.Label>
 
 </Col>

 <Col> <Form.Label ><h3> : الاستاذ</h3></Form.Label>
 <h2></h2>

 </Col>

 </Row>

 <Row fluid style={{textAlign:'center',paddingTop:"5%"}}>
 
 <Col> <Form.Label ><h3> : تاريخ التقاعد </h3></Form.Label>


 </Col>

 <Col> <Form.Label ><h3> : تاريخ الاداره </h3></Form.Label>
 
 </Col>

 <Col> <Form.Label ><h3> : الاستاذ</h3></Form.Label>
 <h2></h2>

 </Col>

 </Row>
  

 <Row fluid style={{textAlign:'center',paddingTop:"5%"}}>
 
 <Col> <Form.Label ><h3> : تاريخ التقاعد </h3></Form.Label>


 </Col>

 <Col> <Form.Label ><h3> : تاريخ الاداره </h3></Form.Label>
 
 </Col>

 <Col> <Form.Label ><h3> : الاستاذ</h3></Form.Label>
 <h2></h2>

 </Col>

 </Row>


</Container>



</>
  )
}

export default WHItems