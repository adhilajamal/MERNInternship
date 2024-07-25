import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Welcome = () => {
    var [val, setVal] = useState()
    const WReact = () => {
        setVal('React')
    }
    const WAngular = () => {
        setVal('Angular')
    }
    const WView = () => {
        setVal('View')
    }
    useEffect(() => {
        WView();
    },[])
  return (
      <div>
          <Typography variant='h5'>Welcome {val}</Typography><br /><br />
          <Button variant='contained' onClick={WReact}>React</Button>&nbsp;&nbsp;&nbsp;
          <Button variant='contained' onClick={WAngular}>Angular</Button>&nbsp;&nbsp;&nbsp;
          <Button variant='contained' onClick={WView}>View</Button>

    </div>
  )
}

export default Welcome