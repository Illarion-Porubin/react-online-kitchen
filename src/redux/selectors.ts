import { AppState } from './store';
export const selectRecipeData = (state: AppState) => state.recipeSlice;