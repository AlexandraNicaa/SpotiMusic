import { Card, CardContent, Typography, CardActions, Button} from "@mui/material";
import { Link } from "react-router-dom";

export function AlbumCard(){
    return (
    <Card className="albumsBg">
      {/* card media pt poze */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    );
}