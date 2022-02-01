import { AppBar, Typography } from "@mui/material";


export default function NavBar(){
    return (
        <>
            <AppBar position="static" sx={{marginBottom:"2rem"}}>
                <Typography variant="h1">
                    Social Media
                </Typography>
            </AppBar>
        </>
    );
}