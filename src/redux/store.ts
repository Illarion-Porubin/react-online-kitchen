import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import recipeSlice from './slices/recipe';

export const rootReducer = combineReducers({
    recipeSlice 
  });

const store = configureStore({
    reducer: {
        recipeSlice
      },
})

export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispath = AppStore['dispatch'];

export default store;