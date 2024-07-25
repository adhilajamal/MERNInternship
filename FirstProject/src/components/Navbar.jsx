import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h4' sx={{ flexGrow: 1 }}>MyApp</Typography>&nbsp;
                    <Link to='/sign'><Button variant='text' color='success' style={{ color: "white" }}>SignUp</Button></Link>&nbsp;&nbsp;
                    <Link to='/login'><Button variant='text' color='success' style={{ color: "white" }}>Login</Button></Link>&nbsp;&nbsp;
                    <Link to='/s'><Button variant='text' color='success' style={{ color: "white" }}>States</Button></Link>&nbsp;&nbsp;
                    <Link to='/incr'><Button variant='text' style={{ color: 'white' }}>Counter</Button></Link>
                    <Link to='/w'><Button variant='text' style={{ color: 'white' }}>welcome</Button></Link>
                    <Link to='/stu'><Button variant='text' style={{ color: 'white' }}>Students</Button></Link>
                    <Link to='/api'><Button variant='text' style={{ color: 'white' }}>API</Button></Link>
                    <Link to='/blog'><Button variant='text' style={{ color: 'white' }}>Blog</Button></Link>
                    <Link to='/poke'><Button variant='text' style={{ color: 'white' }}>PokeMon</Button></Link>





                    

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar