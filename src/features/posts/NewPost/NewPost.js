import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Modal, Paper, Stack, TextField, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import TheatersIcon from '@mui/icons-material/Theaters';
import { useState } from "react";


export default function NewPost(){

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1,
    };

    const [modal, setModal] = useState(false)

    const handleClick = ()=> {
        setModal(true)
    }
    const handleClose = ()=> {
        setModal(false)
    }

    return (
        <>
            <Stack direction="column" alignItems="center" spacing={2}>
                <Card sx={{width:800,minWidth:550,maxWidth:945, marginBottom:2}}>
                    <CardHeader
                        avatar = {
                            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                <img 
                                    alt ="avatars"
                                    src="https://avatars.dicebear.com/api/micah/:User.svg?backgroundColor=%4267B2&size=45&mouth=smile"/>
                            </Avatar>
                        }
                        title = {
                            <Paper onClick={handleClick} elevation={0} variant="outlined" sx={{background:grey[200], padding:1, paddingLeft:2, borderRadius: 10}}>
                                <Typography>
                                    This is where you can write new Posts!
                                </Typography>
                            </Paper>
                        }
                    />
                    <CardActions>
                        <Grid container justifyContent="space-around">
                            <Grid item xs="auto">
                                <Button 
                                    startIcon={<PhotoLibraryIcon/>}>
                                    <Typography sx={{color:grey[500]}}>
                                        Photos
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs="auto">
                                <Button 
                                    startIcon={<VideoLibraryIcon/>}>
                                    <Typography sx={{color:grey[500]}}>
                                        Videos
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Stack>
            <Modal
                open={modal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Card sx={style}>
                    <CardHeader
                        title={
                            <Typography variant="h5" align="center" sx={{fontWeight:'bold', color:grey[700]}}>
                                Create Post
                            </Typography>
                        }
                    />
                    <CardContent>
                        <TextField
                            variant="outlined"
                            label="Write your post here."
                            rows={10}
                            fullWidth
                            multiline
                        />
                    </CardContent>
                    <CardActions>
                        <Grid container justifyContent="space-around">
                            <Grid item>
                                <Button
                                    startIcon={
                                        <AddPhotoAlternateIcon/>
                                    }    
                                >
                                    Add Photo
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    startIcon={<TheatersIcon/>}
                                >
                                    Add Video
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained">Post</Button>   
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Modal>
        </>
    );
}
