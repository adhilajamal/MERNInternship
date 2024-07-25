import React, { useState } from 'react'
import axios from 'axios'
import { Table, TableCell, TableRow, TableContainer, TableHead, TableBody } from '@mui/material'

const Blog = () => {
    var [value, setValue] = useState([])
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        setValue(response.data)
    })
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Title</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {value.map((val, i) => {
                        return (
                            <TableRow>
                                <TableCell key={i}>{val.id}</TableCell>
                                <TableCell key={i}>{val.title}</TableCell>

                            </TableRow>
                        )
                    })}


                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Blog