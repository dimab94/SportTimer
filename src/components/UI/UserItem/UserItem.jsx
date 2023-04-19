import '../../../css/userItem.css'

const UserItem = ({userProps}) => {
  return (
    <div className='list-item'>
        <div className='user-title'>
            <div className='user-number'>{userProps.userNumber}</div>
            <div className='user-name'>{userProps.userName}</div>
            <div className='user-lap'>--/--</div>
            <div className='user-time'>{userProps.personalTimer}</div>
            <button className='user-info'>▼</button>
            <button className='user-finish'>lap</button>
        </div>
        <div className='user-laps' hidden={true}>
            <p>Laps</p>
            <ol>
                <li>00:00:52</li>
                <li>00:00:55</li>
            </ol>
        </div>
    </div>
  )
}

export default UserItem