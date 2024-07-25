import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const IncrDecr = () => {
    var [val, setVal] = useState(0)

    const addfunc = () => {
        setVal(val+1)
    }
    const subfunc = () => {
        setVal(val-1)
    }
    return (
      <div>
            <Typography variant='h5'>Number:{val}</Typography><br /><br />
          <Button variant='contained' value='Increment' onClick={addfunc}>Increment</Button>&nbsp;&nbsp;
          <Button variant='contained' onClick={subfunc}>Decrement</Button>
    </div>
  )
}

export default IncrDecr