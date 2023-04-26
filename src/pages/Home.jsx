import React from 'react';
// import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material"
// import { useAuthContext } from "../context/auth/AuthContext";
import { RecipeCard } from '../components/RecipeCard';

export default function() {
    // const { user, logout } = useAuthContext();
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     logout();

    //     navigate('/login');
    // }

    const recipes = [1,2,3,4,5,6,7,8];

    return (
    <Box>
        <Grid container spacing={2}>
            {recipes.map((recipe) => (
            <Grid key={recipe} item xs={12} sm={6} md={3}>
                <RecipeCard />
            </Grid>
            ))}
        </Grid>
        {/* <Typography>Home Page</Typography>
        <button onClick={handleLogout}>Logout</button> */}
    </Box>
    );
}