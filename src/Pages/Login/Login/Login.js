import { Container, Grid, Typography, TextField, Button, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.jpg'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError, signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container sx={{my:10}}>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{width: '75%', m:1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard"/>
                    <TextField
                        sx={{width: '75%', m:1 }}
                        id="standard-basic"
                        label="Your Password"
                        name="password"
                        onChange={handleOnChange}
                        type="password"
                        variant="standard"/>
                    <Button sx={{ width: '75%', m:1}} type="submit" variant="contained">Login</Button>
                    <NavLink style={{textDecoration: 'none'}} to="/register">
                            <Button variant="text">New User? Please, Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Successfully Logged in</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>----------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign-In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{width: '100%', height: '100%'}} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;