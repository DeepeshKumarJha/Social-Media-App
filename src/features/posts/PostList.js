import { Container, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import NewPost from "./NewPost/NewPost";
import PostListCard from "./PostListCard";

export default function PostList(){

    const posts = useSelector(state=>state.posts)

    const postlist = posts.map(
        post => {
            return (
                <Paper elevation={1} sx={{width:"500px", marginBottom:"1rem"}}>
                    <Typography variant="h1">
                        {post.title}
                    </Typography>
                    <Typography variant="h3">
                        {post.content}
                    </Typography>
                </Paper>
            )
        }
    )

    return (
        <Container maxWidth>
            <NewPost/>
            <PostListCard/>
            {postlist}
        </Container>
    );
}