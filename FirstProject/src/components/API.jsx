import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, TableCell, TableRow, TableContainer, TableHead, TableBody } from '@mui/material'

const API = () => {
    var [value, setValue] = useState([])
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
            console.log(response)
            setValue(response.data)
        })
   },[])
  return (
      <TableContainer>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Username</TableCell>
                      <TableCell>City</TableCell>

                  </TableRow>
              </TableHead>
              <TableBody>
                  {value.map((val,i) => {
                      return(
                      <TableRow>
                        <TableCell key={i}>{ val.name}</TableCell>
                        <TableCell key={i}>{ val.username}</TableCell>
                        <TableCell key={i}>{val.address.city}</TableCell>

                      </TableRow>
                  )})}
                         

              </TableBody>
          </Table>
      </TableContainer>
  )
}

export default API