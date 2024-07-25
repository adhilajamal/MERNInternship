import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname, setFname] = useState()
    var [val, setVal] = useState()
    const handleinput = (e) => {
        setFname(e.target.value)
        console.log(fname)
    }
   
    const printValue = () => {
        setVal(fname)
    }
    
  return (
      <div>
          <Typography variant='h4'>Welcome&nbsp;{val}!</Typography>
          <TextField onChange={handleinput}></TextField><br /><br />
          <Button variant='contained' onClick={printValue}>Submit</Button>
    </div>
  )
}

export default StateBasics