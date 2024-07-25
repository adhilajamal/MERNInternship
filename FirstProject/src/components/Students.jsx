import { Table, TableCell,TableRow, TableContainer, TableHead, TableBody } from '@mui/material'
import React, { useState } from 'react'

const Students = () => {
    var [names, setNames] = useState(
        [
            {
                'name': 'Adhila','age':22
            },
            {
                'name':'Nesrin','age':22
            },
            {
                'name': 'Kaamila', 'age': 22
            },
            {
                'name': 'Krishna', 'age': 22
            }
        ]
    )
    return (
      
      <TableContainer>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Age</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((val,i) => {
                        return (
                            <TableRow>
                                <TableCell key={i}>{ val.name}</TableCell>
                                <TableCell key={i}>{ val.age}</TableCell>
                            </TableRow>   
                        )
                    })}
                    
                </TableBody>
          </Table>
    </TableContainer>
  )
}

export default Students