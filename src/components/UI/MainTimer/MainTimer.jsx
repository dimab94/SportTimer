import React from 'react'
import { useState } from 'react';
import Timer from './Timer/Timer';


const MainTimer = ({props,timerLoad,reset}) => {
    const handleStart = ()=>{timerLoad(true)};
  
    const handleStop = ()=>{timerLoad(false)};
  
    const handleReset = ()=>{timerLoad(false); reset(0)};
  return (
    <div>
        <Timer props={props} timerLoad={timerLoad} reset={reset}/>
        <div className='main__timer__buttons'>
          {props.isCounting ? (
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