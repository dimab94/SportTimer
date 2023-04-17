import './css/App.css';
import UsersList from './components/UI/List/UsersList'
import { useEffect, useState } from 'react';
import { getPadTime } from './helpers/getPadTime';

function App() {

  const[timeLeft, setTimeLeft] = useState(0);
  const[isCounting,setIsCounting] = useState(false);

  const hours = getPadTime(Math.floor(timeLeft/3600));
  const minutes = getPadTime(Math.floor(timeLeft/60) - hours*60);
  const seconds = getPadTime(timeLeft - (minutes * 60 + hours * 3600));


  useEffect(()=>{
    const interval = setInterval(()=>{
      isCounting &&
       setTimeLeft((timeLeft)=>(hours<=99? timeLeft + 1: 0))
    }, 1000);
    if (timeLeft>=6*3600) {
      setIsCounting(false);
      setTimeLeft(0)
    }
    return ()=>{
      clearInterval(interval);
    };
  }, [timeLeft, isCounting])

  const handleStart = ()=>{setIsCounting(true)};

  const handleStop = ()=>{setIsCounting(false)};

  const handleReset = ()=>{setIsCounting(false); setTimeLeft(0)};

  return (
    <div className="App">
      <div className='main'>
        <div className='input'>
          <input className='input__number text-size' type='number' placeholder='№'></input>
          <input className='input__name text-size' type='text' placeholder='name'></input>
          <select className='input__distance'>
            <option disabled>distance</option>
            <option className='text-size' value={'3'}>3 km</option>
            <option className='text-size' value={'5'}>5 km</option>
          </select>
        </div>
        <button className='text-size'>add</button>
        <select className='input__distance'>
            <option disabled>length</option>
            <option className='text-size' value={'200'}>200</option>
            <option className='text-size' value={'400'}>400</option>
          </select>
        <div className='main__timer main-timer'>
          <span>{hours}</span>
          <span>:</span>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>
        <div className='main__timer__buttons'>
          {isCounting ? (
              <button className='text-size' onClick={handleStop}>stop</button>
            ):(
              <button className='text-size' onClick={handleStart}>start</button>)
          }
          <button className='text-size' onClick={handleReset}>reset</button>
        </div>
        <UsersList/>
      </div>
    </div>
  );
}

export default App;
