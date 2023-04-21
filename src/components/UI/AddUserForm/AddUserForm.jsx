import React, { useState } from 'react'

const AddUserForm = ({add}) => {

    const [user,setUser] = useState ({userNumber:'',userName:'',distance:'3',lap:'200'})

    const addNewUser = (e)=>{
        e.preventDefault()
        const newUser = {...user,id:Date.now()}
        add(newUser)
        setUser({...user,userName:'',userNumber:''})
      }

  return (
    <form className='addUser'>
          <div className='addUser__main'>
            <input
              value={user.userNumber}
              onChange={ev=>setUser({...user,userNumber: ev.target.value})}
              className='user__number text-size' type='number' placeholder='№'></input>
            <input 
              value={user.userName}
              onChange={ev=>setUser({...user,userName: ev.target.value})}
              className='user__name text-size' type='text' placeholder='name'>
            </input>
          </div>
          <div className='user__distanceSettings'>
            <select 
              value={user.distance}
              onChange={ev=>setUser({...user,distance: ev.target.value})}
              className='user__distance'>
                <option disabled>distance</option>
                <option className='text-size' value={'3'}>3 km</option>
                <option className='text-size' value={'5'}>5 km</option>
            </select>
            <select
              value={user.lap}
              onChange={ev=>setUser({...user,lap: ev.target.value})}
              className='user__length'>
                <option disabled>length</option>
                <option className='text-size' value={'200'}>200</option>
                <option className='text-size' value={'400'}>400</option>
            </select>
          </div>
          <button onClick={addNewUser} className='text-size'>add</button>
        </form>
  )
}

export default AddUserForm