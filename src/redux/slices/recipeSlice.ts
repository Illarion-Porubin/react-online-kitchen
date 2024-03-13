import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchFindByName = createAsyncThunk<any, string, { rejectValue: string }
>("api/findByName", async (search: string, { rejectWithValue }) => {
    if(search){
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        if(!data){
            rejectWithValue("error fetchFindByName")
        }
        return data
    }
})

export const fetchFindByLetter = createAsyncThunk<any, string, { rejectValue: string }
>("api/fetchFindByLetter", async (leatter: string, { rejectWithValue }) => {
    if(leatter){
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${leatter}`);
        if(!data){
            rejectWithValue("error fetchFindByLetter")
        }
        return data
    }
})

export const fetchFindRecipeById = createAsyncThunk<any, any, {rejectValue: string}>(
    "api/fetchFindRecipeById", async (id: string, {rejectWithValue}) => {
        if(id){
            const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            return data
        }
        rejectWithValue("error fetchFindRecipeById")
    }
)


interface State {
    recipeList: any,
    isLoading: 'idle' | 'loaded' | 'loading' | 'error',
    currentPage: number,
    error: string | null,
}

const initialState: State = {
    recipeList: [],
    currentPage: 0,
    isLoading: 'idle',
    error: null
}


export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        clearState: (state) => {
            state.recipeList = []
        },
        addCurrenPage: (state, action) => {
            state.currentPage = action.payload
        },
    },
    extraReducers: (builder) => (
        builder
        ///fetchFindByName
        .addCase(fetchFindByName.pending, (state) => {
            state.recipeList = [];
            state.isLoading = "loading";
        })
        .addCase(fetchFindByName.fulfilled, (state, action) => {
            state.recipeList = Array.isArray(action.payload.meals) ? action.payload.meals : [];
            state.isLoading = "loaded";
        })
        .addCase(fetchFindByName.rejected, (state) => {
            state.recipeList = [];
            state.isLoading = "loading";
        })
        ///fetchFindByLetter
        .addCase(fetchFindByLetter.pending, (state) => {
            state.recipeList = [];
            state.isLoading = "loading";
        })
        .addCase(fetchFindByLetter.fulfilled, (state, action) => {
            state.recipeList = Array.isArray(action.payload.meals) ? action.payload.meals : [];
            state.isLoading = "loaded";
        })
        .addCase(fetchFindByLetter.rejected, (state) => {
            state.recipeList = [];
            state.isLoading = "loading";
        })
    )
})

export default recipeSlice.reducer;