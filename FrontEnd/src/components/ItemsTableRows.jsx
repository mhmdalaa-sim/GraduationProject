import React from 'react'
import { Container,Row,Col,Button,Form,FormControl } from 'react-bootstrap'
function ItemsTableRows({rowsData, deleteTableRows, handleChange}) {
    return(
        
        rowsData.map((data, index)=>{
            const {price,status,Existingfrominventory,stock,increment,shortage,quantity,value, unit,name, id}= data;
            return(
                
                <tr key={index}>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
                <td>
                <input type="number" value={price}  onChange={(evnt)=>(handleChange(index, evnt))} name="price" className="form-control" /> 
                </td>
                <td>
               <input type="text" value={status} onChange={(evnt)=>(handleChange(index, evnt))} name="status" className="form-control"/>
                </td>
                <td><input type="number" value={Existingfrominventory}  onChange={(evnt)=>(handleChange(index, evnt))} name="Existingfrominventory" className="form-control" /> </td>
                <td><input type="number" value={stock}  onChange={(evnt)=>(handleChange(index, evnt))} name="stock" className="form-control" /> </td>
                <td><input type="number" value={increment}  onChange={(evnt)=>(handleChange(index, evnt))} name="increment" className="form-control" /> </td>
                <td><input type="number" value={shortage}  onChange={(evnt)=>(handleChange(index, evnt))} name="shortage" className="form-control" /> </td>
                <td><input type="number" value={quantity}  onChange={(evnt)=>(handleChange(index, evnt))} name="quantity" className="form-control" /> </td>
                <td><input type="number" value={value}  onChange={(evnt)=>(handleChange(index, evnt))} name="value" className="form-control" /> </td>
                <td><input type="text" value={unit}  onChange={(evnt)=>(handleChange(index, evnt))} name="unit" className="form-control" /> </td>
                <td><input type="text" value={name}  onChange={(evnt)=>(handleChange(index, evnt))} name="name" className="form-control" /> </td>
                <td><input type="number" value={id}  onChange={(evnt)=>(handleChange(index, evnt))} name="id" className="form-control" /> </td>
                
            </tr>
            
                    
            )
        })
   
    )
}

export default ItemsTableRows