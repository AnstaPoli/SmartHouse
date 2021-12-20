import React from 'react'
import { Link } from 'react-router-dom'
import RoomBlock from './RoomBlock'

export default function Home(props) {
    return (
        <div>
        
          <div className="rowRooms">

{props.rooms.map((item,i) => {
    return <div  > 
        <Link  to={`room/${item.name}`}>
            <div className="blockRoom" style={{backgroundColor:item.color}}>
        {item.name}
        </div>
        </Link>
        
        </div>
})}
          </div>

          <div>
              <Link to='./addroom'>
           <button className="homeBut">+</button>

              </Link>
          </div>
        </div>
    )
}
