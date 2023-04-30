import { useState } from 'react'
import '../../../css/userItem.css'
import Timer from '../MainTimer/Timer/Timer'

const UserItem = ({props,remove,userProps,reset,timerLoad}) => {
  console.log(props.resetState)
  const[timeLeft, setTimeLeft] = useState(0);
  const[userInfo,setUserInfo] = useState(false)
  const[userLaps,setUserLaps] = useState(0)

/*   props.resetState
  ? setUserLaps(1)
  : console.log(props.resetState) */

  const counterLaps = () => {
    (userProps.laps-1) > userLaps
      ? setUserLaps(userLaps+1) 
      : setUserLaps('--');
    }


  

  const showUserInfo =()=> (userInfo? setUserInfo(false) : setUserInfo(true))

  return (
    <div className='list-item'>
        <div className='user-title'>
            <div className='user-wrapper' onClick={showUserInfo}>
              <div className='user-number'>{userProps.userNumber}</div>
              <div className='user-name'>{userProps.userName}</div>
              <div className='user-lap'>
                <span>{userLaps}</span>
                <span>/</span>
                <span>{userProps.laps}</span>
              </div>
              <Timer props={props} timerLoad={timerLoad} reset={reset}/>
            </div>
            { ((userProps.laps-1) > userLaps) ?
              <button disabled={!props.isCounting} className='user-finish' onClick={counterLaps}>lap</button>
              : <button disabled={!props.isCounting} className='user-finish' onClick={counterLaps}>finish</button>
            }
        </div>
          {userInfo ?
            <div className='user-info'>
              <div className='user-laps' onClick={showUserInfo}>
                <p>Laps</p>
                <ol>
                    <li></li>
                    <li>00:00:55</li>
                </ol>
              </div>
              <button className='user__delete' 
              onClick={()=>remove(userProps)}>X</button>
            </div> 
            :<div/>
          }

        
    </div>
  )
}

export default UserItem