import { configureStore } from '@reduxjs/toolkit';
import filmesReducer from '../features/filmes/filmesSlice';

export const store = configureStore({
    reducer: {
        filmes: filmesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;