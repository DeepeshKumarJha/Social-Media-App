import { Avatar, Card, CardHeader, CardContent, IconButton, Stack, Typography, CardMedia,CardActions } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { red } from "@mui/material/colors";
import cardImage from "../../DemoStuff/simple.jpeg"

export default function PostListCard(){
    return(
    <>
        <Stack direction="column" alignItems="center" spacing={2}>
            <Card sx={{width:800,minWidth:550,maxWidth:945, marginBottom:2}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <img src="https://avatars.dicebear.com/api/micah/:Rahul.svg?backgroundColor=%4267B2&size=45&mouth=smile" alt="avatar"/>
                        </Avatar>
                        }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Stack>
        {/* second card with image */}
        <Stack direction="column" alignItems="center" spacing={2}>
            <Card sx={{width:800,minWidth:550,maxWidth:945}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <img src="https://avatars.dicebear.com/api/micah/:Deepesh.svg?backgroundColor=%4267B2&size=45&mouth=smile" alt="avatar"/>
                        </Avatar>
                        }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    // height="250"
                    image={cardImage}
                    alt="Paella dish"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Stack>
    </>
    )
}
