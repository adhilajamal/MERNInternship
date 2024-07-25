import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  return (
      <div>
          <h1>SignUp</h1>
          <input type="text" name="" id="" placeholder='username' /><br /><br />
          <input type="text" placeholder="Age" /><br /><br />
          <input type="text" placeholder='Phone Number' /><br /><br />
          <Link to='/login'><input type="button" value="SignUp" /></Link>
          
          
    </div>
  )
}

export default Signup