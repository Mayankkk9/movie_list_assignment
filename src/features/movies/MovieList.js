// // import React, { useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { fetchMovies, toggleFavorite } from './moviesSlice';
// // import { Link } from 'react-router-dom';

// // const MovieList = () => {
// //   const dispatch = useDispatch();
// //   const movies = useSelector(state => state.movies.movies);
// //   const favorites = useSelector(state => state.movies.favorites);
// //   const status = useSelector(state => state.movies.status);
// //   const error = useSelector(state => state.movies.error);

// //   useEffect(() => {
// //     if (status === 'idle') {
// //       dispatch(fetchMovies());
// //     }
// //   }, [status, dispatch]);

// //   const handleFavoriteToggle = (movie) => {
// //     dispatch(toggleFavorite(movie));
// //   };

// //   if (status === 'loading') {
// //     return <div>Loading...</div>;
// //   }

// //   if (status === 'failed') {
// //     return <div>{error}</div>;
// //   }

// //   return (
// //     <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
// //       {movies.map(movie => (
// //         <div key={movie.id} className="border p-4 rounded shadow">
// //           <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
// //             <img src={movie.poster} alt={movie.title} className="w-full h-auto" />
// //           </a>
// //           <div className="mt-2">
// //             <h2 className="text-xl font-bold">{movie.title}</h2>
// //             <p>{movie.description}</p>
// //             <p>Rating: {movie.rating}</p>
// //             <button onClick={() => handleFavoriteToggle(movie)}>
// //               {favorites.find(fav => fav.id === movie.id) ? 'Unfavorite' : 'Favorite'}
// //             </button>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default MovieList;

// // import React, { useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { fetchMovies } from './moviesSlice';
// // import MovieCard from '../../components/MovieCard';

// // const MovieList = () => {
// //   const dispatch = useDispatch();
// //   const movies = useSelector(state => state.movies.movies);
// //   const status = useSelector(state => state.movies.status);
// //   const error = useSelector(state => state.movies.error);

// //   useEffect(() => {
// //     if (status === 'idle') {
// //       dispatch(fetchMovies());
// //     }
// //   }, [status, dispatch]);

// //   if (status === 'loading') {
// //     return <div>Loading...</div>;
// //   }

// //   if (status === 'failed') {
// //     return <div>{error}</div>;
// //   }

// //   return (
// //     <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
// //       {movies.map(movie => (
// //         <MovieCard key={movie.id} movie={movie} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default MovieList;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchMovies } from './moviesSlice';
// import MovieCard from '../../components/MovieCard';

// const MovieList = () => {
//   const dispatch = useDispatch();
//   const movies = useSelector(state => state.movies.movies);
//   const status = useSelector(state => state.movies.status);
//   const error = useSelector(state => state.movies.error);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchMovies());
//     }
//   }, [status, dispatch]);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {movies.map(movie => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default MovieList;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from './moviesSlice';
import MovieCard from '../../components/MovieCard';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const status = useSelector(state => state.movies.status);
  const error = useSelector(state => state.movies.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  console.log("Movies in MovieList:", movies); // Detailed log to check if movies data is passed correctly

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
