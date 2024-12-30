import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState :{
        nowPlayingMovies :null,
        trailers:null,
        popular:null,
        trending:null,
        topRated:null,
    } ,
    reducers: {
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailers : (state,action)=>{
            state.trailers = action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.popular = action.payload;
        },
        addTrending : (state,action)=>{
            state.trending = action.payload; 
        },
        addTopRated : (state,action)=>{
            state.topRated = action.payload;
        }
    }
});

export const {addNowPlayingMovies,addTrailers,addPopularMovies,addTopRated,addTrending} = moviesSlice.actions

export default moviesSlice.reducer;