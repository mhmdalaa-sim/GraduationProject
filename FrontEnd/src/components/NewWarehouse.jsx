import React from 'react'
import {Form,FormControl,FormGroup,FormLabel,Row,Col,Button, Container} from 'react-bootstrap'
import logo1 from "./Path 666.svg"

function NewWarehouse() {

    const inputstyle={
        marginTop:"5%",
        fontFamily: 'Lalezar',
        fontSize:"2rem"
    }

    const lableStyle={
        marginTop:"3.5%",
        fontFamily: 'Lalezar',
        fontSize:"2rem"
    }
  return (
<>

<h1 style={{textAlign:"center",marginTop:"5%",fontFamily: 'Lalezar',
    fontSize:"4rem"}}>مخزن جديد</h1>

<Container fluid style={{padding:"5%"}}>


    <Form>
    <Row>
    <Col> <img src={logo1} style={{width:"50%",height:"50%"}} /></Col>
    <Col>
    <Row style={inputstyle}>
    <Form.Control type="text" placeholder="ادخل اسم المخزن"  />
    </Row> 
    <Row style={inputstyle}>
    <Form.Control type="text" placeholder="ادخل موقع المخزن" />
    </Row> 
    <Row style={inputstyle}>
    <Form.Select aria-label="Default select example">
        <option>اختر من الاقسام المتاحه</option>
        <option value="1">قسم قيزياء</option>
        <option value="2">قسم حاسب الي</option>
        <option value="3">قسم كيمياء</option>
        <option value="4">قسم نبات</option>
        <option value="5">قسم حيوان</option>
        <option value="6">قسم علوم بحار</option>
    </Form.Select>
    </Row> 
    <Row style={inputstyle}>
    <Form.Control type="text" placeholder="ادخل اسم مدير المخزن" />
    </Row> 
    <Row style={inputstyle}>
    <Form.Control type="date" name='date'/>
    </Row> 
    </Col>

    <Col>
    <Row style={lableStyle}>
    <Form.Label><h3>اسم المخزن</h3></Form.Label>
        </Row>
        <Row style={lableStyle}>
    <Form.Label><h3>موقع المخزن</h3></Form.Label>
        </Row>
        <Row style={lableStyle}>
    <Form.Label><h3>القسم التابع له المخزن</h3></Form.Label>
        </Row> 
        <Row style={lableStyle}>
    <Form.Label><h3>مدير المخزن</h3></Form.Label>
        </Row> 
        <Row style={lableStyle}>
    <Form.Label><h3>تاريخ الانشاء</h3></Form.Label>
        </Row>  
            
        
         </Col>
    

    </Row>

    <Row style={{justifyContent:"centre",width:"100%",}}>
    <Col ></Col>
    <Col style={{textAllign:"centre"}}> <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{textAlign:"center"}} >
      <Form.Label ><h3   style={{textAlign:"center",marginTop:"5%",fontFamily: 'Lalezar',
    fontSize:"2rem"}}>الوصف</h3></Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group></Col>
    <Col > </Col>
   
    </Row>

<Button type='submit' style={{marginTop:"5%",marginLeft:"5%",fontFamily: 'Lalezar',
    fontSize:"2rem"}}  size="lg">اضافه</Button>
    </Form>
</Container>
</>
  )
}

export default NewWarehouse