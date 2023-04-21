import UserItem from '../UserItem/UserItem'


const UserList = ({props,remove}) => {
  return (
    <div>
        {props.map((user)=>
          <UserItem remove={remove} userProps={user} key={user.id}/>
          )}
    </div>
  )
}

export default UserList