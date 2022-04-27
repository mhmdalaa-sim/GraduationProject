import React from 'react'
import RefundTableRows from './RefundTableRows'
import { Container,Row,Col,Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { useState } from "react/cjs/react.development"
function RefundAddDeleteTableRows() {

    const tablestyle={

        float:"centre",
        width:"80%",
        margin:"5%",
        fontFamily: 'Lalezar',
    fontSize:"3rem"

    }


    const [rowsData, setRowsData] = useState([]);
 
    const addTableRows = ()=>{
  
        const rowsInput={
            notes:'',
            value:'',
            status:'',
            estimatedquantity:'',
            quantity:'',
           date:"",
            unit:'',
            name:'' , 
            id:'' , 
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  
 
 
}
  return (
    <>
        

<Table striped bordered hover size="lg" style={tablestyle} >
  <thead>
    <tr class="   ">
    <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
    
      
     
      
   
     
    
     
    
      <th class="">  الملاحظات</th>
      <th class="">  القيمه المقدرة</th>
      <th class="">حاله الصنف</th>
      <th class="">الكميه المقدره  </th>
      <th class="">الكميه  </th>
      <th class=""> تاريخ الصنف </th>
      <th class="" >الوحده</th>
      <th class="">اسم الصنف</th>
      <th class="">رقم الصنف</th>
     
      
    </tr>
  </thead>

  <tbody>
  <RefundTableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
  </tbody>
 
</Table>
    </>
  )
}

export default RefundAddDeleteTableRows