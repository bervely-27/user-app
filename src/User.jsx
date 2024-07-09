import React from 'react'
import './User.css'
 function User({name,email}) {
  return (
    <div className='user-block'>
     <h3>{name}</h3> 
     <h4>{email}</h4> 
    </div>
  )
}
export default User
