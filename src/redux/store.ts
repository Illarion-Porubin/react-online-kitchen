import { combineReducers, configureStore } from '@reduxjs/toolkit';
import recipeSlice from './slices/recipe';
import favoriteSlice from './slices/favorite';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

export const rootReducer = combineReducers({
    recipeSlice,
    favoriteSlice 
  });


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['recipeSlice', 'favoriteSlice'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispath = AppStore['dispatch'];