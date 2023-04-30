import UserItem from '../UserItem/UserItem'


const UserList = ({props,remove,reset,timerLoad}) => {
  console.log(props,remove,reset,timerLoad)
  return (
    <div>
        {props.users.map((user)=>
          <UserItem remove={remove} userProps={user} key={user.id} reset={reset} timerLoad={timerLoad} props={props}/>
          )}
    </div>
  )
}

export default UserList