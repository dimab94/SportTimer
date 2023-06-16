import './css/App.css';
import MainTimer from './components/UI/MainTimer/MainTimer';
import React, { useMemo, useState } from 'react'
import UserList from './components/UI/UserList/UserList';
import AddUserForm from './components/UI/AddUserForm/AddUserForm'

function App() {

  const[users,setUsers] = useState([])
  const[isCounting,setIsCounting] = useState(false);
  const[resetState,setResetState] = useState(false)
  
  const resetLaps=(e)=>
    setResetState(e)
  

  const countingProgres=(bulean)=>{
    setIsCounting(bulean)
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
        <MainTimer timerIsActive= {isCounting} timerLoad = {countingProgres} resetLaps={resetLaps}/>
        {users.length !==0
          ? <UserList props={{isCounting,resetState}} users={users} remove={removeUser} timerLoad = {countingProgres} resetLaps={resetLaps}/>
          : <div>Участники не добавлены</div>
        }
      </div>
    </div>
  );
}

export default App;

/* Оставщийся функционал:
    - добавить "финиш" +
    - при нажатии кнопки старт чтоб не запускался таймер у юзера +
    - функционал для отмены последнего круга
    - сделать деструктуризацию (Нахуй не надо)
    - Поприятней интерфейс (подсвечивание тех кто финишировал зеленым)
    - Проверка полей ввода
    - сохранение информации localStorage
    -----------------------
    попробовать реализовать единый итоговый протокол
    PWA?
    Service Workers */
    
