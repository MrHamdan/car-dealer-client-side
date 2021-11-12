import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
import { Container, Button, CircularProgress, Alert, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
            <div>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item sx={{ mt: 8 }} xs={12} md={12}>
                            <h1 className="text-design">Please Login</h1>
                            <form onSubmit={handleLoginSubmit} className="form-bg rounded-2xl">
                                <input
                                    sx={{ width: '75%', m: 1 }}
                                    placeholder="Email"
                                    label="Your Email"
                                    name="email"
                                    onChange={handleOnChange}
                                />
                                <input
                                    sx={{ width: '75%', m: 1 }}
                                    placeholder="Password"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                />

                                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/register">
                                    <Button variant="text">New User? Please Register</Button>
                                </NavLink>
                                <br />
                                {isLoading && <Spinner animation="border" variant="danger" />}
                                {user?.email && <Alert severity="success">Login successfully!</Alert>}
                                {authError && <Alert severity="error">{authError}</Alert>}
                            </form>
                            <p className="text-white">========================</p>
                            <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};


export default Login;