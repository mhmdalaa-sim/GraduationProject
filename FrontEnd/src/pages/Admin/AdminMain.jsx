import React from 'react'
import { Container ,Row,Col,Card, } from 'react-bootstrap'
import AdminNavBar from './AdminNavBar'
import Logo1 from "./Union 1.svg"

function AdminMain() {
  return (
  <>
      <AdminNavBar></AdminNavBar>

      <Container>

      
          <Row className="justify-content-end">
         
              <Col>
                  <Container style={{backgroundColor: '#448AE5',color:"white",
                    borderRadius: "10px",
                    borderStyle:"solid",
                    borderColor: "#15509D",
                    marginTop:"10%",
                    padding:"10%",}}>

                        <Row>
                        <h1 style={{textAlign:"center" , fontFamily: 'Lalezar',
                        fontSize:"2rem",paddingBottom:"9%"}}> عدد المستخدمين </h1>
                                
                        </Row>

                    <Row> <Col><img src={Logo1} style={{width:"60%"}}></img></Col> 

                    <Col><h2 style={{textAlign:"center" , fontFamily: 'Lalezar',
                        fontSize:"4.5rem",paddingBottom:"0%"}}> 7  </h2></Col> 
                    
                    
                    </Row>
                     

                      
                  </Container>
              </Col>
              

              <Col>
                  <Container style={{backgroundColor: '#448AE5',color:"white",
                    borderRadius: "10px",
                    borderStyle:"solid",
                    borderColor: "#15509D",
                    marginTop:"10%",
                    padding:"10%",}}>

                        <Row>
                        <h1 style={{textAlign:"center" , fontFamily: 'Lalezar',
                        fontSize:"2rem",paddingBottom:"9%"}}> عدد المستخدمين </h1>
                                
                        </Row>

                    <Row> <Col><img src={Logo1} style={{width:"60%"}}></img></Col> 

                    <Col><h2 style={{textAlign:"center" , fontFamily: 'Lalezar',
                        fontSize:"4.5rem",paddingBottom:"0%"}}> 7  </h2></Col> 
                    
                    
                    </Row>
                     

                      
                  </Container>
              </Col>

              <Col>
                  <Container style={{backgroundColor: '#448AE5',color:"white",
                    borderRadius: "10px",
                    borderStyle:"solid",
                    borderColor: "#15509D",
                    marginTop:"10%",
                    padding:"10%",}}>

                        <Row>
                        <h1 style={{textAlign:"center" , fontFamily: 'Lalezar',
                        fontSize:"2rem",paddingBottom:"9%"}}> عدد المخازن </h1>
                                
                        </Row>

                    <Row> <Col><img src={Logo1} style={{width:"60%"}}></img></Col> 

                    <Col><h2 style={{textAlign:"center" , fontFamily: 'Lalezar',
                        fontSize:"4.5rem",paddingBottom:"0%"}}> 7  </h2></Col> 
                    
                    
                    </Row>
                     

                      
                  </Container>
              </Col>

          </Row>



          <hr style={{borderRadius:"200%",borderStyle:"solid",height:"2px"}}></hr>
      </Container>
  </>
  )
}

export default AdminMain