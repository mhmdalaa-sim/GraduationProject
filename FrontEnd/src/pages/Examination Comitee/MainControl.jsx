import React from 'react'
import { BrowserRouter as Router,Link,Route,Routes } from "react-router-dom"
import {useState} from "react"
import { Container,Row,Col,Button } from 'react-bootstrap'

function MainControl() {
  return (<>
    

    <h1>MainControl</h1>
    <Link to="/ExamineMain"><Button>ExaminationComitee</Button></Link>
    <Link to="/AdminMain"><Button>Admin</Button></Link>
    <Link to="/GeneralWarehouse"><Button>GeneralWarehouse</Button></Link>
    <Link to="/DepartmentWarehouse"><Button>DepartmentWarehouse"</Button></Link>
    <Link to="/Dean"><Button>Dean</Button></Link>
    

  </>
   
  )
}

export default MainControl