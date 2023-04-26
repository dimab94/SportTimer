import UserItem from '../UserItem/UserItem'


const UserList = ({props,remove,reset,timerLoad}) => {
  const isCounting = props.isCounting;
  const timeLeft = props.timeLeft
  return (
    <div>
        {props.users.map((user)=>
          <UserItem remove={remove} userProps={user} key={user.id} reset={reset} timerLoad={timerLoad} props={{isCounting,timeLeft}}/>
          )}
    </div>
  )
}

export default UserList