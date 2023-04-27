import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from "@mui/material"
import { AlbumCard } from '../components/AlbumCard';
import { getAllAlbums } from '../services/albums';

export default function() {
    const [albums, setAlbums] = useState([1,2,3,4,5,6,7,8]);

    return (
    <Box>
        <Grid container spacing={2}>
            {albums.map((album) => (
            <Grid key={album.id} item xs={12} sm={6} md={3}>
                <AlbumCard />
            </Grid>
            ))}
        </Grid>
        {/* <Typography>Home Page</Typography>
        <button onClick={handleLogout}>Logout</button> */}
    </Box>
    );
}