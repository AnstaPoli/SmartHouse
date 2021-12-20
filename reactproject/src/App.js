import React, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import AddRoom from './components/AddRoom';
import Room from './components/Room';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import RoomBlock from './components/RoomBlock';



function App() {

const[rooms,setRooms] = useState([])

  const saveRoom = (t,n,c) => {
  setRooms([...rooms, {type:t,name:n,color:c,products:[]}]);
  console.log(rooms);
  }

 const addProduct = (product,index) => {
   let temp = [...rooms]
   let selectRooms = temp.filter((item,i)=> index==i)
  
 }
  
  return (
    <div className="App">
       <h1>Smart House</h1> 
       <Router>
         <Routes>
           <Route path='/' element={<Home rooms={rooms}/>}/>
           <Route path='/addroom' element={<AddRoom saveRoom={saveRoom}/>}/>
           {rooms.map((item,index)=>(
             <Route path={`room/${item.name}`} element={<Room rooms={item} index={index} addProduct={addProduct} />}/>
           
           ))}
          
         </Routes>
       </Router>
    
    </div>
  );
}

export default App;
