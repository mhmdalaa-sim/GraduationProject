import React from 'react'
import {Form,FormControl,FormGroup,FormLabel,Row,Col,Button} from 'react-bootstrap'
export default function Report() {
    const style={
    
        padding:"10px",
        
    }

    const lablestyle={
       
        padding:"10px",
        float:"right"
        
    }


  return (

    <div style={style}>

<Form>
<Row className="mb-3 " style={style}>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={lablestyle} >:برئاسه السيد</Form.Label>
      <Form.Control style={{width:"25%",float:"right"}} type="email" placeholder="" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={lablestyle}>:التاريخ</Form.Label>
      <Form.Control  style={{width:"25%",float:"right"}} type="email" placeholder="" />
    </Form.Group>

  </Row>

  <Row  className="mb-3 " >
  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={lablestyle}>:وعضويه كل من</Form.Label>
    </Form.Group>
  </Row>

  <Row className="mb-3 " style={style}>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={lablestyle} >:السيد</Form.Label>
      <Form.Control style={{width:"25%",float:"right"}} type="email" placeholder="" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={lablestyle}>:الوظيفه</Form.Label>
      <Form.Control  style={{width:"25%",float:"right"}} type="email" placeholder="" />
    </Form.Group>

  </Row>

  <Row className="mb-3 " style={style}>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={lablestyle} >:السيد</Form.Label>
      <Form.Control style={{width:"25%",float:"right"}} type="email" placeholder="" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={lablestyle}>:الوظيفه</Form.Label>
      <Form.Control  style={{width:"25%",float:"right"}} type="email" placeholder="" />
    </Form.Group>

  </Row>

  <Row className="mb-3 " style={style}>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={lablestyle} >:السيد</Form.Label>
      <Form.Control style={{width:"25%",float:"right"}} type="email" placeholder="" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={lablestyle}>:الوظيفه</Form.Label>
      <Form.Control  style={{width:"25%",float:"right"}} type="email" placeholder="" />
    </Form.Group>

  </Row>

  <Row className="mb-3 " style={style}>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={lablestyle} >:السيد</Form.Label>
      <Form.Control style={{width:"25%",float:"right"}} type="email" placeholder="" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={lablestyle}>:الوظيفه</Form.Label>
      <Form.Control  style={{width:"25%",float:"right"}} type="email" placeholder="" />
    </Form.Group>

  </Row>

  <Row className="mb-3 " style={style}>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={lablestyle} >وقامت اللجنه بفحص الأصناف المدرجه في ظهره بالنسبه المئويه ووفقا لما ارتاته من  القبول او الرفض والأسباب المبينه قربن كل

صنف ولذلك علي مقتضي امر التوريد الصادر الي</Form.Label>
<Form.Control  style={{width:"10%",float:"right"}} type="email" placeholder="" />
<Form.Label style={lablestyle} > برقم
</Form.Label>
<Form.Control  style={{width:"5%",float:"right"}} type="email" placeholder="" />
<Form.Label style={lablestyle} > بتاريخ
</Form.Label>
<Form.Control type="date" style={{width:"15%",float:"right"}} name='date'   />

     
    </Form.Group>
    
  </Row>


  <Button type="submit" style={{width:"10%",float:'right'}}>تاكيد</Button>
</Form>



    </div>
  )
}
