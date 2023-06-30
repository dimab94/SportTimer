import './css/App.css';
import MainTimer from './components/UI/MainTimer/MainTimer';
import React, { useState } from 'react'
import UserList from './components/UI/UserList/UserList';
import AddUserForm from './components/UI/AddUserForm/AddUserForm'

function App() {

  const[users,setUsers] = useState([])
  const[isCounting,setIsCounting] = useState(false);
  const[resetState,setResetState] = useState(false)
  const[timeLeft, setTimeLeft] = useState(0);

  const reset =(e)=>{
    setTimeLeft(e)
  }
  
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
        <AddUserForm add={addNewUser} props ={{isCounting,resetState}} />
        <MainTimer timerIsActive= {isCounting} timerLoad = {countingProgres} resetLaps={resetLaps} reset={reset} timeLeft={timeLeft}/>
        {users.length !==0
          ? <UserList props={{isCounting,resetState,timeLeft}} users={users} remove={removeUser} timerLoad = {countingProgres} resetLaps={resetLaps}/>
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
    - функционал для отмены последнего круга ДОДЕЛАТЬ!! Не работает если отменить последний круг! ++
    - сделать чтоб отображалось время круга, а после финиш - общее  ++
    - Поприятней интерфейс (подсвечивание тех кто финишировал зеленым, большой главный секундомер!) ++
    - отвалился фавикон маленький для декстопа.
    - Проверка полей ввода
    - сохранение информации в кэш и работа когда телефон в спящем или приложуха свернута. (тут скорее через PWA)
    -----------------------
    попробовать реализовать единый итоговый протокол, чтоб все(со всех устройств) кто финишировал попадали сразу в список с итоговым временем.
    PWA?
    Service Workers
    
    Исправить баг со стартом и последующим добавлением юзера.
    */
    
