import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import React, {useState} from "react";
import {Navigate} from "react-router-dom";


const Catalog = () => {
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
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/pour" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Catalog</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Contrast Calculator</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
                    </ul>

                    <div className="col-md-3 text-end">

                        <Box justifyContent={'space-between'}>
                            <Button
                                style={{
                                    
                                    margin: 5,
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
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Accessbility
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        What is accessibility
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        Fundamentals of accesibility                                    
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        Web Accessibility guidelines
                                    </a>
                                </li>      
                            </ul>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Perceivable
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        What is accessibility
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        Fundamentals of accesibility                                    
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        Web Accessibility guidelines
                                    </a>
                                </li>      
                            </ul>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Operable
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        What is accessibility
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        Fundamentals of accesibility                                    
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        Web Accessibility guidelines
                                    </a>
                                </li>      
                            </ul>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Understandable
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        What is accessibility
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        Fundamentals of accesibility                                    
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        Web Accessibility guidelines
                                    </a>
                                </li>      
                            </ul>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Robust
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        What is accessibility
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        Fundamentals of accesibility                                    
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        Web Accessibility guidelines
                                    </a>
                                </li>      
                            </ul>
                        </Grid>
                       
                    </Grid>
                </main>
                

            </div>

            
                
        </div>

    )
}

export default Catalog;