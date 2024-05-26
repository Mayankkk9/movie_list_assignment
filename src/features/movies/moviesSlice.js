// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';



// const initialState = {
//   movies: [],
//   favorites: [],
//   status: 'idle',
//   error: null
// };

// export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
//   const response = await axios.get(process.env.REACT_APP_MOVIES_API);
//   return response.data;
// });

// const moviesSlice = createSlice({
//   name: 'movies',
//   initialState,
//   reducers: {
//     toggleFavorite: (state, action) => {
//       const movie = action.payload;
//       const existingIndex = state.favorites.findIndex(fav => fav.id === movie.id);
//       if (existingIndex >= 0) {
//         state.favorites.splice(existingIndex, 1);
//       } else {
//         state.favorites.push(movie);
//       }
//     }
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(fetchMovies.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchMovies.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.movies = action.payload.sort((a, b) => b.rating - a.rating);
//       })
//       .addCase(fetchMovies.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export const { toggleFavorite } = moviesSlice.actions;

// export default moviesSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  movies: [],
  favorites: [],
  status: 'idle',
  error: null,
};

// Async thunk to fetch movies
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get(process.env.REACT_APP_MOVIES_API);
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const existingIndex = state.favorites.findIndex(fav => fav.id === movie.id);
      if (existingIndex >= 0) {
        state.favorites.splice(existingIndex, 1);
      } else {
        state.favorites.push(movie);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.sort((a, b) => b.rating - a.rating);
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
