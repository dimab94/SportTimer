import { useEffect, useState } from 'react'
import '../../../css/userItem.css'
import Timer from '../MainTimer/Timer/Timer'
import { getPadTime } from '../../../helpers/getPadTime';

const UserItem = ({props,remove,userProps,timerLoad,resetLaps}) => {


  const[timeLeft, setTimeLeft] = useState(0);
  const[userInfo,setUserInfo] = useState(false)
  const[userLaps,setUserLaps] = useState(0)
  const[timeLaps, setTimeLaps] = useState([])
  const[sumLaps, setSumLaps] = useState(0)

  const counterLaps = () => {
    (userProps.laps-1) > userLaps
      ? setUserLaps(userLaps+1) 
      : setUserLaps('--');

      const hours = getPadTime(Math.floor(timeLeft/3600));
      const minutes = getPadTime(Math.floor(timeLeft/60) - hours*60);
      const seconds = getPadTime(timeLeft - (minutes * 60 + hours * 3600));
      const sum = timeLeft - sumLaps
      setSumLaps(timeLeft)
      setTimeLaps(
        [...timeLaps,
          {hours:hours,
          minutes:minutes,
          seconds:seconds,
          minSum: getPadTime(Math.floor(sum/60)),
          secSum: getPadTime(sum - Math.floor(sum/60)),
          id:Date.now()}
        ])
    }

  const timerIsActive = props.isCounting  
  const mainReset = props.resetState

  const reset =(e)=>{
    setTimeLeft(e)
  }

  useEffect(()=>{
    if(mainReset){
      setTimeLeft(0)
      setUserLaps(0)
      resetLaps(false)
      setTimeLaps([])
      setSumLaps(0)
    }
},[mainReset])



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
              <Timer props={{timeLeft,timerIsActive}} reset={reset} timerLoad={timerLoad}/>
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
                  {timeLaps.map((userLapTime)=><li key = {userLapTime.id}> {userLapTime.hours}:{userLapTime.minutes}:{userLapTime.seconds} ({userLapTime.minSum}:{userLapTime.secSum})</li>)}
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