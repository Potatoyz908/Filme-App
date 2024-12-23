import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Filme {
    id: number;
    title: string;
    genre: string;
    release_year: number;
}

interface FilmesState {
    filmes: Filme[];
}

const initialState: FilmesState = {
    filmes: [],
};

const filmesSlice = createSlice({
    name: 'filmes',
    initialState,
    reducers: {
        setFilmes(state, action: PayloadAction<Filme[]>) {
            state.filmes = action.payload;
        },
        addFilme(state, action: PayloadAction<Filme>) {
            state.filmes.push(action.payload);
        },
        updateFilme(state, action: PayloadAction<Filme>) {
            const index = state.filmes.findIndex(f => f.id === action.payload.id);
            if (index >= 0) state.filmes[index] = action.payload;
        },
        deleteFilme(state, action: PayloadAction<number>) {
            state.filmes = state.filmes.filter(f => f.id !== action.payload);
        },
    },
});

export const { setFilmes, addFilme, updateFilme, deleteFilme } = filmesSlice.actions;
export default filmesSlice.reducer;