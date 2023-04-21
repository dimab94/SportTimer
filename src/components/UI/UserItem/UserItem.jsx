import { useState } from 'react'
import '../../../css/userItem.css'

const UserItem = (props) => {

  const[userInfo,setUserInfo] = useState(false)

  const[userLaps,setUserLaps] = useState(0)

  const overalLaps = props.userProps.distance/props.userProps.lap*1000

  const conterLaps = () => {((overalLaps-1) > userLaps)? setUserLaps(userLaps+1) : setUserLaps('--')}

  const showUserInfo =()=> (userInfo? setUserInfo(false) : setUserInfo(true))


  return (
    <div className='list-item'>
        <div className='user-title'>
            <div className='user-wrapper' onClick={showUserInfo}>
              <div className='user-number'>{props.userProps.userNumber}</div>
              <div className='user-name'>{props.userProps.userName}</div>
              <div className='user-lap'>
                <span>{userLaps}</span>
                <span>/</span>
                <span>{overalLaps}</span>
              </div>
              <div className='user-time'>{props.userProps.personalTimer}</div>
            </div>
            { ((overalLaps-1) > userLaps) ?
              <button className='user-finish' onClick={conterLaps}>lap</button>
              : <button className='user-finish' onClick={conterLaps}>finish</button>
            }
        </div>
          {userInfo ?
            <div className='user-info'>
              <div className='user-laps' onClick={showUserInfo}>
                <p>Laps</p>
                <ol>
                    <li>00:00:52</li>
                    <li>00:00:55</li>
                </ol>
              </div>
              <button className='user__delete' 
              onClick={()=>props.remove(props.userProps)}>X</button>
            </div> 
            :<div/>
          }

        
    </div>
  )
}

export default UserItem