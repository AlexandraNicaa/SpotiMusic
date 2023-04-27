export default function() {
    const [albums, setAlbums] = useState([1,2,3,4,5,6,7,8]);

    return (
    <Box>
        <Grid container spacing={2}>
            {albums.map((album) => (
            <Grid key={album} item xs={12} sm={6} md={3}>
                <AlbumCard />
            </Grid>
            ))}
        </Grid>
    </Box>
    );
}