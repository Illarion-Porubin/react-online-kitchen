import { AppState } from './store';
export const selectRecipeData = (state: AppState) => state.recipeSlice;
export const selectFavoriteData = (state: AppState) => state.favoriteSlice;