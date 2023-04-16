import './css/App.css';

function App() {
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
        <div className='main__timer main-timer'>00:00:00</div>
        <div className='main__timer__buttons'>
          <button className='text-size'>start</button>
          <button className='text-size'>stop</button>
        </div>
        <div className='table'>
          <div className='number'/>
          <div className='name'/>
          <div className='distance'/>
          <div className='timer'/>
          <button className='text-size'>lap</button>
          <button className='text-size'>finish</button>
        </div>
      </div>
    </div>
  );
}

export default App;
