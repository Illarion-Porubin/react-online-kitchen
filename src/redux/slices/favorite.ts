import { createSlice } from "@reduxjs/toolkit";

interface State {
    favoriteList: any | [],
    error: string | boolean,
    isLoading: 'idle' | 'loaded' | 'loading' | 'error',
}

const initialState: State = {
    favoriteList: [],
    error: false,
    isLoading: 'idle',
}

export const favorite = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addRecipe: (state, action) => {
            if(!state.favoriteList.length){
                state.favoriteList = [...state.favoriteList, action.payload]
            }
            const findRecipe = state.favoriteList.find((item: any) => item.idMeal === action.payload.idMeal);
            state.favoriteList = !findRecipe ? [...state.favoriteList, action.payload] : state.favoriteList
        },

        deleteRecipe: (state, action) => {
            state.favoriteList.map((item: any, id: number) => {
                if(item.idMeal === action.payload.idMeal) {
                    return state.favoriteList.splice(id, 1)
                }
            });
        },
    }
})

export default favorite.reducer;