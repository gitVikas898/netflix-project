import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState :{
        nowPlayingMovies :null
    } ,
    reducers: {
        addNowPlayingMovies : (action,state)=>{
            state.nowPlayingMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies} = moviesSlice.actions

export default moviesSlice.reducer;