import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <h1>Login</h1>
          <TextField label="Username" variant='outlined'></TextField><br /><br />
          <TextField label="Password" variant='outlined' type='password'></TextField><br /><br />
          <Button variant='contained'>Login</Button>
    </div>
  )
}

export default Login