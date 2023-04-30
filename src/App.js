import './css/App.css';
import MainTimer from './components/UI/MainTimer/MainTimer';
import React, { useMemo, useState } from 'react'
import UserList from './components/UI/UserList/UserList';
import AddUserForm from './components/UI/AddUserForm/AddUserForm'

function App() {

  const[users,setUsers] = useState([])
  console.log(users)
  const[isCounting,setIsCounting] = useState(false);
  const[resetState,setResetState] = useState(false)
  
  const resetLaps=(e)=>
    setResetState(e)
  

  const countingProgres=(count)=>{
    setIsCounting(count)
  }

  const addNewUser = (newUser)=>{
    setUsers([...users,newUser])
  }

  const removeUser = (user)=>{
    setUsers(users.filter(u=>u.id !== user.id))
  }
  
  
  return (
    <div className="App">
      <div className='main'>
        <AddUserForm add={addNewUser}/>
        <MainTimer props= {{isCounting}} timerLoad = {countingProgres} resetLaps={resetLaps}/>
        {users.length !==0
          ? <UserList props={{isCounting,resetState,users}} remove={removeUser} timerLoad = {countingProgres}/>
          : <div>Участники не добавлены</div>
        }
      </div>
    </div>
  );
}

export default App;
