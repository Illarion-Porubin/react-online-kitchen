import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RecipeType } from "../../types";


export const fetchFindByName = createAsyncThunk<RecipeType[], string, { rejectValue: string }
>("api/findByName", async (search: string, { rejectWithValue }) => {
    if(search){
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        if(!data){
            rejectWithValue("error fetchFindByName")
        }
        return data.meals
    }
})

export const fetchFindRecipeById = createAsyncThunk<RecipeType[], string, {rejectValue: null}>(
    "api/fetchFindRecipeById", async (id: string, {rejectWithValue}) => {
        if(id){
            const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            return data.meals
        }
        rejectWithValue(null)
    }
)


interface State {
    recipeList: RecipeType[],
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
            state.recipeList = Array.isArray(action.payload) ? action.payload : [];
            state.isLoading = "loaded";
        })
        .addCase(fetchFindByName.rejected, (state) => {
            state.recipeList = [];
            state.isLoading = "loading";
        })
    )
})

export default recipeSlice.reducer;