import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showgptSearch : false,
    },
    reducers:{
        toggleSearchView :(state,action)=>{
            state.showgptSearch = !state.showgptSearch
        }
    }
})

export const {toggleSearchView} = gptSlice.actions;
export default gptSlice.reducer;