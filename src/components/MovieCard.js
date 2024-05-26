// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { toggleFavorite } from '../features/movies/moviesSlice';

// // const MovieCard = ({ movie }) => {
// //   const dispatch = useDispatch();
// //   const favorites = useSelector(state => state.movies.favorites);
// //   const isFavorite = favorites.some(fav => fav.id === movie.id);

// //   const handleFavoriteToggle = () => {
// //     dispatch(toggleFavorite(movie));
// //   };

// //   return (
// //     <div className="border p-4 rounded shadow-lg">
// //       <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
// //         <img src={movie.poster} alt={movie.title} className="w-full h-auto" />
// //       </a>
// //       <div className="mt-2">
// //         <h2 className="text-xl font-bold">{movie.title}</h2>
// //         <p>Rating: {movie.rating}</p>
// //         <button
// //           onClick={handleFavoriteToggle}
// //           className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
// //         >
// //           {isFavorite ? 'Unfavorite' : 'Favorite'}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MovieCard;


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleFavorite } from '../features/movies/moviesSlice';

// const MovieCard = ({ movie }) => {
//   const dispatch = useDispatch();
//   const favorites = useSelector(state => state.movies.favorites);
//   const isFavorite = favorites.some(fav => fav.id === movie.id);

//   const handleFavoriteToggle = () => {
//     dispatch(toggleFavorite(movie));
//   };

//   return (
//     <div className="border p-4 rounded shadow-lg">
//       <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
//         <img src={movie.poster} alt={movie.title} className="w-full h-auto" />
//       </a>
//       <div className="mt-2">
//         <h2 className="text-xl font-bold">{movie.title}</h2>
//         <p>Rating: {movie.rating}</p>
//         <button
//           onClick={handleFavoriteToggle}
//           className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
//         >
//           {isFavorite ? 'Unfavorite' : 'Favorite'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleFavorite } from '../features/movies/moviesSlice';

// const MovieCard = ({ movie }) => {
//   const dispatch = useDispatch();
//   const favorites = useSelector(state => state.movies.favorites);
//   const isFavorite = favorites.some(fav => fav.id === movie.id);

//   const handleFavoriteToggle = () => {
//     dispatch(toggleFavorite(movie));
//   };

//   console.log("Movie in MovieCard:", movie); // Detailed log to check movie data

//   return (
//     <div className="border p-4 rounded shadow-lg">
//       <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
//         <img src={movie.poster} alt={movie.title} className="w-full h-auto" />
//       </a>
//       <div className="mt-2">
//         <h2 className="text-xl font-bold">{movie.title}</h2>
        
//         <p>MovieName: {movie.movie}</p>
//         <p>Rating: {movie.rating}</p>
//         {/* <p>imdb_link: {movie.imdb_url}</p> */}
//         <p>imdb_link: <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">{movie.imdb_url}</a></p>
//         <button
//           onClick={handleFavoriteToggle}
//           className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
//         >
//           {isFavorite ? 'Unfavorite' : 'Favorite'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleFavorite } from '../features/movies/moviesSlice';

// const MovieCard = ({ movie }) => {
//   const dispatch = useDispatch();
//   const favorites = useSelector(state => state.movies.favorites);
//   const isFavorite = favorites.some(fav => fav.id === movie.id);

//   const handleFavoriteToggle = (event) => {
//     event.stopPropagation(); // Prevents the click event from bubbling up to the parent
//     dispatch(toggleFavorite(movie));
//   };

//   console.log("Movie in MovieCard:", movie); // Detailed log to check movie data

//   return (
//     <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
//       <div className="border p-4 rounded shadow-lg">
//         <img src={movie.poster} alt={movie.title} className="w-full h-auto" />
//         <div className="mt-2">
//           <h2 className="text-xl font-bold">{movie.title}</h2>
//           <p>MovieName: {movie.movie}</p>
//           <p>Rating: {movie.rating}</p>
//           <p>imdb_link: {movie.imdb_url}</p>
//           <button
//             onClick={handleFavoriteToggle}
//             className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
//           >
//             {isFavorite ? 'Unfavorite' : 'Favorite'}
//           </button>
//         </div>
//       </div>
//     </a>
//   );
// };

// export default MovieCard;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/movies/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.movies.favorites);
  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const handleFavoriteToggle = (event) => {
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent
    event.preventDefault(); // Prevents the default action of the event
    dispatch(toggleFavorite(movie));
  };

  console.log("Movie in MovieCard:", movie); // Detailed log to check movie data

  return (
    <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
      <div className="border p-4 rounded shadow-lg">
        <img src={movie.poster} alt={movie.title} className="w-full h-auto" />
        <div className="mt-2">
          <h2 className="text-xl font-bold">{movie.title}</h2>
          <p>MovieName: {movie.movie}</p>
          <p>Rating: {movie.rating}</p>
          <p>imdb_link: {movie.imdb_url}</p>
          <button
            onClick={handleFavoriteToggle}
            className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
          >
            {isFavorite ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;