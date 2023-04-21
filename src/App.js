import './css/App.css';
import MainTimer from './components/UI/MainTimer/MainTimer';
import React, { useState } from 'react'
import UserList from './components/UI/UserList/UserList';
import AddUserForm from './components/UI/AddUserForm/AddUserForm'

function App() {

  const[users,setUsers] = useState([])

  const addNewUser = (newUser)=>{
    setUsers([...users,newUser])}

  const removeUser = (user)=>{
    setUsers(users.filter(u=>u.id !== user.id))
  }
    
  return (
    <div className="App">
      <div className='main'>
        <AddUserForm add={addNewUser}/>
        <MainTimer/>
        <UserList props={users} remove={removeUser}/>
      </div>
    </div>
  );
}

export default App;
