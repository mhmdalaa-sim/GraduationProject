
import { Container,Row,Col,Button,Form,FormControl } from 'react-bootstrap'
function TableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {notes,value,price,status,quantity,allowedquantity,reqquantity, unit,name, id}= data;
            return(
                
                <tr key={index}>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
                <td>
               <input type="text" value={notes} onChange={(evnt)=>(handleChange(index, evnt))} name="notes" className="form-control"/>
                </td>

                <td><input type="text" value={value}  onChange={(evnt)=>(handleChange(index, evnt))} name="value" className="form-control" /> </td>
                <td><input type="number" value={price}  onChange={(evnt)=>(handleChange(index, evnt))} name="price" className="form-control" /> </td>
                <td><input type="text" value={status}  onChange={(evnt)=>(handleChange(index, evnt))}  name="status" className="form-control"   disabled
    readOnly  /> </td>
                <td><input type="number" value={quantity}  onChange={(evnt)=>(handleChange(index, evnt))} name="quantity" className="form-control" /> </td>
                <td><input type="number" value={allowedquantity}  onChange={(evnt)=>(handleChange(index, evnt))} name="allowedquantity" className="form-control"  disabled
    readOnly /> </td>
                <td><input type="number" value={reqquantity}  onChange={(evnt)=>(handleChange(index, evnt))} name="reqquantity" className="form-control" /> </td>
                <td><input type="text" value={unit}  onChange={(evnt)=>(handleChange(index, evnt))} name="unit" className="form-control" /> </td>
                <td><input type="text" value={name}  onChange={(evnt)=>(handleChange(index, evnt))} name="name" className="form-control" /> </td>
                <td><input type="number" value={id}  onChange={(evnt)=>(handleChange(index, evnt))} name="id" className="form-control" /> </td>
                
            </tr>
            
                    
            )
        })
   
    )
    
}

export default TableRows;