import '../../../css/usersList.css'

import React from 'react'

const UsersList = () => {
  return (
    <div className='list-item'>
        <div className='user-title'>
            <div className='user-number'>1</div>
            <div className='user-name'>Baruzdin</div>
            <div className='user-lap'>13/15</div>
            <div className='user-time'>00:00:00</div>
            <button className='user-info'>▼</button>
            <button className='user-finish'>lap</button>
        </div>
        <div className='user-laps'>
            <p>Laps</p>
            <ol>
                <li>00:00:52</li>
                <li>00:00:55</li>
            </ol>
        </div>
    </div>
  )
}

export default UsersList