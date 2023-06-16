import { useEffect, useState } from 'react'
import '../../../css/userItem.css'
import Timer from '../MainTimer/Timer/Timer'
import { getPadTime } from '../../../helpers/getPadTime';

const UserItem = ({props,remove,userProps,timerLoad,resetLaps}) => {

  const[timeLeft, setTimeLeft] = useState(0);
  const[userInfo,setUserInfo] = useState(false)
  const[timeLaps, setTimeLaps] = useState([])
  const[sumLaps, setSumLaps] = useState(0)
  const[timerIsActive, setTimerIsActive] = useState (false)

  useEffect(()=> {
    if(userProps.laps>timeLaps.length)
    {setTimerIsActive(props.isCounting)}
  },[props.isCounting])

  const counterLaps = () => {
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
        secSum: getPadTime(sum - (Math.floor(sum/60)*60)),
        id:Date.now()
      }
      ])
    if(userProps.laps<=(timeLaps.length+1)){
      setTimerIsActive(false)
    }
  }

    const mainReset = props.resetState

    const reset =(e)=>{
      setTimeLeft(e)
    }

  useEffect(()=>{
    if(mainReset){
      setTimeLeft(0)
      resetLaps(false)
      setTimeLaps([])
      setSumLaps(0)
    }
},[mainReset])

const removeLap = (timeLaps)=>{ 
  if (props.isCounting && userProps.laps>=(timeLaps.length)){
    timeLaps.splice(timeLaps.length-1, 1);
    setTimeLaps([...timeLaps]);
    setTimerIsActive(true)
  }
}



  const showUserInfo =()=> (userInfo? setUserInfo(false) : setUserInfo(true))

  return (
    <div className='list-item'>
        <div className='user-title'>
            <div className='user-wrapper' onClick={showUserInfo}>
              <div className='user-number'>{userProps.userNumber}</div>
              <div className='user-name'>{userProps.userName}</div>
              <div className='user-lap'>
                <span>{timeLaps.length}</span>
                <span>/</span>
                <span>{userProps.laps}</span>
              </div>
              <Timer props={{timeLeft,timerIsActive}} reset={reset} timerLoad={timerLoad}/>
            </div>
            { ((userProps.laps-1) > timeLaps.length) ?
              <button disabled={!timerIsActive} className='user-finish' onClick={counterLaps}>lap</button>
              : <button disabled={!timerIsActive} className='user-finish' onClick={counterLaps}>finish</button>
            }
        </div>
          {userInfo ?
            <div className='user-info'>
              <div className='user-laps' onClick={showUserInfo}>
                <p>Laps</p>
                <ol>
                  {timeLaps.map((userLapTime)=><li key={userLapTime.id}> {userLapTime.hours}:{userLapTime.minutes}:{userLapTime.seconds} ({userLapTime.minSum}:{userLapTime.secSum})</li>)}
                </ol>
              </div>
              <button className='lap__delete' onClick={()=>removeLap(timeLaps)}>←</button>
              <button className='user__delete' 
              onClick={()=>remove(userProps)}>X</button>
            </div> 
            :<div/>
          }

        
    </div>
  )
}

export default UserItem