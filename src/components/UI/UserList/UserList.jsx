import UserItem from '../UserItem/UserItem'


const UserList = ({props}) => {
  return (
    <div>
        {props.map((user)=>
          <UserItem userProps={user} key={user.id}/>
          )}
    </div>
  )
}

export default UserList