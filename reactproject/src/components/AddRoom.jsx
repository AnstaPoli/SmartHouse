import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function AddRoom(props) {

    const [nameRoom , setNameRoom]=useState('');

    const takeName = (e) => {
        setNameRoom(e.target.value);
    }

    const [typeRoom , setTypeRoom] = useState('')
    const takeSelectRoom = (e)=>{
     setTypeRoom(e.target.value)
    }

    const [colorRoom , setColorRoom] = useState('')
    const takeSelectColor = (e)=>{
        setColorRoom(e.target.value)
    }
    
const addRoom = () =>{
    if (nameRoom) {
        props.saveRoom(typeRoom,nameRoom,colorRoom)
    }
    else{
        alert("enter name, type and color room please")
    }
}

    return (
        <div className="createRoom">
            <select name="rooms" id="rooms" onChange={takeSelectRoom}>
            <option selected value="">Select type room</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Bedroom">Bedroom</option>
             </select>

            <input type="text" maxLength={5} onChange={takeName} placeholder="Room name"/>

             <select name="colors" id="colors" onChange={takeSelectColor}>
                <option selected value="">Select color room</option>
                <option value="white">White</option>
                <option value="grey">Grey</option>
                <option value="red">Red</option>
                <option value="dodgerblue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
            </select>

            <Link to='/'> 
            <button onClick={addRoom}>Create</button>
            </Link>
        </div>
    )
}
