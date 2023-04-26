import './css/App.css';
import MainTimer from './components/UI/MainTimer/MainTimer';
import React, { useState } from 'react'
import UserList from './components/UI/UserList/UserList';
import AddUserForm from './components/UI/AddUserForm/AddUserForm'

function App() {

  const[users,setUsers] = useState([])

  const[isCounting,setIsCounting] = useState(false);
  const[timeLeft, setTimeLeft] = useState(0);

  const reset = (sec)=>{
    setTimeLeft(sec)
  }

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
        <MainTimer props= {{isCounting,timeLeft}} timerLoad = {countingProgres} reset = {reset}/>
        <UserList props={{isCounting,timeLeft,users}} remove={removeUser} reset = {reset} timerLoad = {countingProgres}/>
      </div>
    </div>
  );
}

export default App;
