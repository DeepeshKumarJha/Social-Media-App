import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1,
        title:"First Post",
        content:"This is my firt post on the social media app "
    },
    {
        id:2,
        title:"Second Post",
        content:"This is second post in the social media app"
    }
]


export const postApi = createSlice({
    name:'posts',
    initialState,
    reducers: {}
})

export default postApi.reducer;