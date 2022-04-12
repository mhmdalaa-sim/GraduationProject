import React from 'react'
import { Container,Row,Col,Button,Form,FormControl } from 'react-bootstrap'
function RefundTableRows({rowsData, deleteTableRows, handleChange}) {
    return(
        
        rowsData.map((data, index)=>{
            const {notes,value,status,estimatedquantity,quantity,date, unit,name, id}= data;
            return(
                
                <tr key={index}>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
                <td>
               <input type="text" value={notes} onChange={(evnt)=>(handleChange(index, evnt))} name="notes" className="form-control"/>
                </td>

                <td><input type="text" value={value}  onChange={(evnt)=>(handleChange(index, evnt))} name="value" className="form-control" /> </td>
            
                <td><input type="text" value={status}  onChange={(evnt)=>(handleChange(index, evnt))}  name="status" className="form-control"  /> </td>
                    <td><input type="number" value={estimatedquantity}  onChange={(evnt)=>(handleChange(index, evnt))} name="estimatedquantity" className="form-control"  /> </td>
                <td><input type="number" value={quantity}  onChange={(evnt)=>(handleChange(index, evnt))} name="quantity" className="form-control" /> </td>
                
                <td><input type="date" value={date}  onChange={(evnt)=>(handleChange(index, evnt))} name="date" className="form-control" /> </td>
                <td><input type="text" value={unit}  onChange={(evnt)=>(handleChange(index, evnt))} name="unit" className="form-control" /> </td>
                <td><input type="text" value={name}  onChange={(evnt)=>(handleChange(index, evnt))} name="name" className="form-control" /> </td>
                <td><input type="number" value={id}  onChange={(evnt)=>(handleChange(index, evnt))} name="id" className="form-control" /> </td>
                
            </tr>
            
                    
            )
        })
   
    )
}

export default RefundTableRows