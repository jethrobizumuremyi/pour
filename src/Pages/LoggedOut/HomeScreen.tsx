import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Navigate} from "react-router-dom";


const HomeScreen = () => {
    const [redirect, setRedirect] = useState(false);
    const [regredirect, setRegRedirect] = useState(false);

    async function login() {
       
        setRedirect(true);


    }

    async function register() {
       
        setRegRedirect(true);


    }

    if (redirect) {
        return <Navigate to = {'/login'}/>;
    }

    if (regredirect) {
        return <Navigate to = {'/register'}/>;
    }


    return (
        <div>
            

            <div className="container">
                
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

                    <div>

                        <Box>
                            <Button
                                style={{
                                    
                                    margin: '0 auto',
                                    
                                    
                                    padding: 5
                                }}
                                size="small"
                                variant="contained"
                                color="secondary"
                                href = "#"
                                >
                                Contrast Calculator
                            </Button>
                        </Box>
                    </div>
                    
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
                    </a>

                    
                    
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/pour" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><Link to={'/catalog'} className="nav-link px-2 link-dark">Catalog</Link></li>
                        <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
                    </ul>

                    <div className="col-md-3 text-end">

                        <Box justifyContent={'space-between'}>
                            <Button
                                style={{
                                    
                                    margin: '0 auto',
                                    padding: 5

                                }}
                                size="small"
                                variant="outlined"
                                color="secondary"
                                onClick={() => login()}>
                                Sign in
                            </Button>
                            
                            <Button
                                style={{
                                    
                                    margin: '0 auto',
                                    padding: 5
                                }}
                                size="small"
                                variant="contained"
                                color="primary"
                                onClick={() => register()}>
                                Sign Up
                            </Button>
                        </Box>
                    </div>
                </header>

                <main>
                    <Box  display="flex" justifyContent="center" className="row" sx={{ justifyContent: 'space-between', pt: 8 }}>
                        <Card sx={{ maxWidth: 310 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                
                                height="400"
                                image={require('./../../Assets/images/p.png')}
                                alt="perceivable"
                                />
                                <CardContent>
                                
                                <Typography variant="body2" color="text.secondary">
                                    Something about how website need to be more perceivable idk
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 310 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="400"
                                image={require('./../../Assets/images/o.png')}
                                alt="perceivable"
                                />
                                <CardContent>
                                
                                <Typography variant="body2" color="text.secondary">
                                    Something about how website need to be more operable idk
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 350}}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="400"
                                image={require('./../../Assets/images/u.png')}
                                alt="perceivable"
                                />
                                <CardContent>
                                
                                <Typography variant="body2" color="text.secondary">
                                    Something about how website need to be more, i forgot what u stands for
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 310 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="400"
                                image={require('./../../Assets/images/r.png')}
                                alt="perceivable"
                                />
                                <CardContent>
                                
                                <Typography variant="body2" color="text.secondary">
                                    Something about how website need to be more robust
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Box>
                    

                    <Box
                        style={{
                            paddingTop: 100,
                            justifyContent: "center",
                            paddingBottom: 20

                        }}>
                        <Typography align = "center" >To learn more about accesibility with examples, quizes, and track your progress...</Typography>

                    </Box>
                    <Button
                        style={{
                            display: "flex",
                            margin: '0 auto',
                            padding: 20
                        }}
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={() => register()}>
                        Get Started
                    </Button>
                </main>
                

            </div>

            
                
        </div>

    )
}

export default HomeScreen;