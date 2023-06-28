import React from 'react'
import Timer from './Timer/Timer';


const MainTimer = ({timerIsActive,timerLoad,resetLaps,reset,timeLeft}) => {

  const handleStart = ()=>{timerLoad(true); resetLaps(false)};
  
  const handleStop = ()=>{timerLoad(false)};
  
  const handleReset = ()=>{timerLoad(false); reset(0); resetLaps(true)};

  const style = 'main_timer'
    
  return (
    <div>
        <Timer props={{timerIsActive,timeLeft,style}} timerLoad={timerLoad} reset = {reset}/>
        <div className='main__timer__buttons'>
          {timerIsActive ? (
              <button className='text-size' onClick={handleStop}>stop</button>
            ):(
              <button className='text-size' onClick={handleStart}>start</button>)
          }
          <button className='text-size' onClick={handleReset}>reset</button>
        </div>
    </div>
  )
}

export default MainTimer