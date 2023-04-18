import './css/App.css';
import MainTimer from './components/UI/MainTimer/MainTimer';
import React, { useState } from 'react'
import UserList from './components/UI/UserList/UserList';

function App() {

  const[users,setUsers] = useState([{id:41, userName:'Baruzdin D.', distance:3, personalTimer:0},
    {id:654, userName:'Orlov S.', distance:5, personalTimer:124}])

  return (
    <div className="App">
      <div className='main'>
        <form className='addUser'>
          <div className='addUser__main'>
            <input className='user__number text-size' type='number' placeholder='№'></input>
            <input className='user__name text-size' type='text' placeholder='name'></input>
          </div>
          <div className='user__distanceSettings'>
            <select className='user__distance'>
              <option disabled>distance</option>
              <option className='text-size' value={'3'}>3 km</option>
              <option className='text-size' value={'5'}>5 km</option>
            </select>
            <select className='user__length'>
              <option disabled>length</option>
              <option className='text-size' value={'200'}>200</option>
              <option className='text-size' value={'400'}>400</option>
            </select>
          </div>
          <button className='text-size'>add</button>
        </form>
        <MainTimer/>
        <UserList props={users}/>
      </div>
    </div>
  );
}

export default App;
