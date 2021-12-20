import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function RoomBlock(props) {
    


    return (
        <Link to='./room'>

        <div style={{backgroundColor:props.color}} className="blockRoom">
           {props.name}
           
        </div>
        </Link>
    )
}
