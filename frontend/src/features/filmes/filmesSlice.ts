import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/filmes';

// Interfaces para tipagem
interface Filme {
    id: number;
    title: string;
    genre: string;
    release_year: number;
}

interface FilmesState {
    filmes: Filme[];
    loading: boolean;
    error: string | null;
}

const initialState: FilmesState = {
    filmes: [],
    loading: false,
    error: null,
};

export const fetchFilmes = createAsyncThunk('filmes/fetchFilmes', async () => {
    const response = await axios.get(`${API_URL}/listar_filmes`);
    return response.data;
});

export const fetchFilmeById = createAsyncThunk('filmes/fetchFilmeById', async (id: number) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
});

export const updateFilmeThunk = createAsyncThunk(
        'filmes/updateFilme',
        async ({ id, updatedFilme }: { id: number; updatedFilme: Filme }, { rejectWithValue }) => {
            try {
                const response = await axios.put(`${API_URL}/${id}`, updatedFilme);
                return response.data;
            } catch (error: any) {
                return rejectWithValue(error.response?.data || 'Erro ao atualizar o filme.');
            }
        }
);
export const deleteFilmeThunk = createAsyncThunk(
        'filmes/deleteFilme',
        async (id: number, { rejectWithValue }) => {
            try {
                await axios.delete(`${API_URL}/${id}`);
                return id;
            } catch (error: any) {
                return rejectWithValue(error.response?.data || 'Erro ao deletar o filme.');
            }
        }
);

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
        deleteFilme(state, action: PayloadAction<number>) {
            state.filmes = state.filmes.filter(f => f.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilmes.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchFilmes.fulfilled, (state, action) => {
            state.loading = false;
            state.filmes = action.payload;
        });
        builder.addCase(fetchFilmes.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Erro ao carregar filmes.';
        });

        builder.addCase(fetchFilmeById.fulfilled, (state, action) => {
            const index = state.filmes.findIndex(f => f.id === action.payload.id);
            if (index === -1) state.filmes.push(action.payload);
        });

        builder.addCase(updateFilmeThunk.fulfilled, (state, action) => {
            const index = state.filmes.findIndex(f => f.id === action.payload.id);
            if (index >= 0) state.filmes[index] = action.payload;
        });

        builder.addCase(updateFilmeThunk.rejected, (state, action) => {
            state.error = action.payload as string;
        });
    },
});

export const { setFilmes, addFilme, deleteFilme } = filmesSlice.actions;
export default filmesSlice.reducer;
