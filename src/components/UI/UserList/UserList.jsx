import UserItem from '../UserItem/UserItem'


const UserList = ({props,remove,timerLoad, resetLaps}) => {
  return (
    <div>
        {props.users.map((user)=>
          <UserItem remove={remove} userProps={user} key={user.id} timerLoad={timerLoad} props={props} resetLaps={resetLaps}/>
          )}
    </div>
  )
}

export default UserList