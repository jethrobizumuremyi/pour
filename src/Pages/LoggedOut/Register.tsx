import { Copyright } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import React, {useState} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Navigate} from "react-router-dom";
import { Link } from "react-router-dom";



const Register = () => {
    const [redirect, setRedirect] = useState(false);
    const [regredirect, setRegRedirect] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

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
                        <li><Link to={'/catalog'} className="nav-link px-2 link-dark">Catalog</Link></li>
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
                    <Container component="main" maxWidth="xs">
                      <CssBaseline />
                      <Box
                        sx={{
                          marginTop: 8,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                          <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                          Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Optional if we need it"
                              />
                            </Grid>
                          </Grid>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            
                          >
                            Sign Up
                          </Button>
                          <Grid container justifyContent="flex-end">
                            <Grid item>
                              <Link to={'/login'}>
                                Already have an account? Sign in
                              </Link>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                      <Copyright sx={{ mt: 5 }} />
                    </Container>
                </main>
                

            </div>

            
                
        </div>

    )
}

export default Register;
