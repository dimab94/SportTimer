import { useEffect, useState } from 'react'
import '../../../css/userItem.css'
import Timer from '../MainTimer/Timer/Timer'
import { getPadTime } from '../../../helpers/getPadTime';

const UserItem = ({props,remove,userProps,timerLoad,resetLaps}) => {

  const[timeLeft, setLapTimeLeft] = useState(0);
  const[userInfo,setUserInfo] = useState(false)
  const[timeLaps, setTimeLaps] = useState([])
  const[timerIsActive, setTimerIsActive] = useState (false)
  const style = 'user_timer'

  const transformation = (sec) => {
    const hours = getPadTime(Math.floor(sec/36000));
    const minutes = getPadTime(Math.floor(sec/600) - hours*60);
    const seconds = getPadTime(Math.floor(sec/10) - (minutes * 60 + hours * 3600));
    return `${hours}:${minutes}:${seconds}`
  }

  useEffect(()=> {
    if(userProps.laps>timeLaps.length)
    {setTimerIsActive(props.isCounting)}
  },[props.isCounting])

  const counterLaps = () => {
    let overallSec = props.timeLeft
    setTimeLaps(
      [...timeLaps,
        {
        overallSec:overallSec,
        overallTime:transformation(overallSec),
        lapSec: timeLeft,
        lapTime: transformation(timeLeft),
        id:Date.now()
      }
      ])

    if(userProps.laps<=(timeLaps.length+1)){
      setTimerIsActive(false)
      setLapTimeLeft(overallSec)
      document.querySelector('.list-item').classList.add('finished')
    }
    else setLapTimeLeft(0)
    
  }
  

  const mainReset = props.resetState

  useEffect(()=>{
    if(mainReset){
      setLapTimeLeft(0)
      resetLaps(false)
      setTimeLaps([])
    }
  },[mainReset])

  const reset=(e)=>{
    setLapTimeLeft(e)
  }

const removeLap = ()=>{
  if (props.isCounting && (userProps.laps+0.5)>=timeLaps.length){
    timeLaps.pop()
    setTimeLaps([...timeLaps]);
    if (timeLaps.length>=1){
        setTimerIsActive(true)
        setLapTimeLeft(props.timeLeft - timeLaps[timeLaps.length-1].overallSec) 
        document.querySelector('.list-item').classList.remove('finished')
      }
    else setLapTimeLeft(props.timeLeft)
  }
}


  const showUserInfo =()=> (userInfo? setUserInfo(false) : setUserInfo(true))

  return (
    <div className='list-item' >
        <div className='user-title'>
            <div className='user-wrapper' onClick={showUserInfo}>
              <div className='user-number'>{userProps.userNumber}</div>
              <div className='user-name'>{userProps.userName}</div>
              <div className='user-lap'>
                <span>{timeLaps.length}</span>
                <span>/</span>
                <span>{userProps.laps}</span>
              </div>
              <Timer props={{timeLeft,timerIsActive,style}} timerLoad={timerLoad} reset={reset}/>
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
                  {timeLaps.map((userLapTime)=><li key={userLapTime.id}> {userLapTime.overallTime}  ({userLapTime.lapTime})</li>)}
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