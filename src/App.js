import './css/App.css';
import MainTimer from './components/UI/MainTimer/MainTimer';
import React, { useState } from 'react'
import UserList from './components/UI/UserList/UserList';

function App() {

  const[users,setUsers] = useState([])

  const [user,setUser] = useState ({userNumber:'',userName:'',distance:'3',lap:'200'})

  const addNewUser = (e)=>{
    e.preventDefault()
    setUsers([...users , {...user,id:Date.now()}])
    setUser({...user,userName:'',userNumber:''})
  }

    
  return (
    <div className="App">
      <div className='main'>
        <form className='addUser'>
          <div className='addUser__main'>
            <input
              value={user.userNumber}
              onChange={ev=>setUser({...user,userNumber: ev.target.value})}
              className='user__number text-size' type='number' placeholder='№'></input>
            <input 
              value={user.userName}
              onChange={ev=>setUser({...user,userName: ev.target.value})}
              className='user__name text-size' type='text' placeholder='name'>
            </input>
          </div>
          <div className='user__distanceSettings'>
            <select 
              value={user.distance}
              onChange={ev=>setUser({...user,distance: ev.target.value})}
              className='user__distance'>
                <option disabled>distance</option>
                <option className='text-size' value={'3'}>3 km</option>
                <option className='text-size' value={'5'}>5 km</option>
            </select>
            <select
              value={user.lap}
              onChange={ev=>setUser({...user,lap: ev.target.value})}
              className='user__length'>
                <option disabled>length</option>
                <option className='text-size' value={'200'}>200</option>
                <option className='text-size' value={'400'}>400</option>
            </select>
          </div>
          <button onClick={addNewUser} className='text-size'>add</button>
        </form>
        <MainTimer/>
        <UserList props={users}/>
      </div>
    </div>
  );
}

export default App;
