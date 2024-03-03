import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface State {
    favoriteList: [],
    error: string | boolean,
    isLoading: 'idle' | 'loaded' | 'loading' | 'error',
};

const initialState: State = {
    favoriteList: [],
    error: false,
    isLoading: 'idle',
}

const favorite = createSlice({
    name: 'favorite',
    initialState,
    reducers: {},
    extraReducers: (builder) => (
        builder
    )
})

export default favorite.reducer