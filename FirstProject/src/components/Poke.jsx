import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Poke = () => {
    var [pokemon, setvalue] = useState([])
    useEffect(() => {
        axios.get("https://dummyapi.online/api/pokemon")
            .then((response) => {
                console.log(response.data)
                setvalue(response.data)
            })
    }, [])
    return (
        <div>
            <Grid container spacing={2}>
                {pokemon.map((val) => {
                    return (

                        <Grid item xs={8} md={4} sm={6}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={val.image_url}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {val.pokemon}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {val.type}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Poke