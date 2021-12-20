import React, {useState} from 'react'

export default function Room(props) {

    const [displayProd,setDisplayProd]=useState('none');
    const [product, setProduct] = useState("pr");
  
  
    return (
        <div>
            <div className="m">

            <div>
         
           <p>Room name:{props.rooms.name}</p>
           <p>Type room:{props.rooms.type}</p> 
        
            <button onClick={() => setDisplayProd('block')}>Add product</button>
            </div>

            <div className="cellProd">
         

             </div>

           </div>

           <div className="createRoom" style={{display: displayProd}}>
               <select name="products" id="products" onChange={e=>{setProduct(e.target.value)}}>
               <option value="">Select products</option>
               <option value="air">Airconditioner</option>
               <option value="boiler">Boiler</option>
               <option value="stereo">Stereo</option>
               <option value="lamp">Lamp</option>
               </select>
              
               <button onClick={props.addProduct(product,props.index)} >Add</button>
             
           </div>
        </div>
    )
}
