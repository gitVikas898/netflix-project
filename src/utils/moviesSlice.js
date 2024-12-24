import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState :{
        nowPlayingMovies :null,
        trailers:null,
    } ,
    reducers: {
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailers : (state,action)=>{
            state.trailers = action.payload;
        }
    }
});

export const {addNowPlayingMovies,addTrailers} = moviesSlice.actions

export default moviesSlice.reducer;