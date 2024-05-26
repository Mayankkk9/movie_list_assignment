// // import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { toggleFavorite } from './moviesSlice';

// // const FavoriteList = () => {
// //   const favorites = useSelector(state => state.movies.favorites);
// //   const dispatch = useDispatch();

// //   const handleFavoriteToggle = (movie) => {
// //     dispatch(toggleFavorite(movie));
// //   };

// //   return (
// //     <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
// //       {favorites.map(movie => (
// //         <div key={movie.id} className="border p-4 rounded shadow">
// //           <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
// //             <img src={movie.poster} alt={movie.title} className="w-full h-auto" />
// //           </a>
// //           <div className="mt-2">
// //             <h2 className="text-xl font-bold">{movie.title}</h2>
// //             <p>{movie.description}</p>
// //             <p>MovieName: {movie.movie}</p>
// //           <p>Rating: {movie.rating}</p>
// //           <p>imdb_link: <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">{movie.imdb_url}</a></p>
// //             <button onClick={() => handleFavoriteToggle(movie)}>
// //               {favorites.find(fav => fav.id === movie.id) ? 'Unfavorite' : 'Favorite'}
// //             </button>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default FavoriteList;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleFavorite } from './moviesSlice';

// const FavoriteList = () => {
//   const favorites = useSelector(state => state.movies.favorites);
//   const dispatch = useDispatch();

//   const handleFavoriteToggle = (event, movie) => {
//     event.stopPropagation(); // Prevents the click event from bubbling up to the parent
//     event.preventDefault(); // Prevents the default action of the event
//     dispatch(toggleFavorite(movie));
//   };

//   return (
//     <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {favorites.map(movie => (
//         <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" key={movie.id}>
//           <div className="border p-4 rounded shadow">
//             <img src={movie.poster} alt={movie.title} className="w-full h-auto" />
//             <div className="mt-2">
//               <h2 className="text-xl font-bold">{movie.title}</h2>
//               <p>{movie.description}</p>
//               <p>MovieName: {movie.movie}</p>
//               <p>Rating: {movie.rating}</p>
//               <p>imdb_link: {movie.imdb_url}</p>
//               <button onClick={(event) => handleFavoriteToggle(event, movie)} style={{backgroundColor: 'blue', color: 'white'}}>
//                 {favorites.find(fav => fav.id === movie.id) ? 'Unfavorite' : 'Favorite'}
//               </button>
//             </div>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// };

// export default FavoriteList;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from './moviesSlice';

const FavoriteList = () => {
  const favorites = useSelector(state => state.movies.favorites);
  const dispatch = useDispatch();

  const handleFavoriteToggle = (event, movie) => {
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent
    event.preventDefault(); // Prevents the default action of the event
    dispatch(toggleFavorite(movie));
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {favorites.map(movie => (
        <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" key={movie.id}>
          <div className="border p-4 rounded shadow">
            <img src={movie.poster} alt={movie.title} className="w-full h-auto" />
            <div className="mt-2">
              <h2 className="text-xl font-bold">{movie.title}</h2>
              <p>{movie.description}</p>
              <p>MovieName: {movie.movie}</p>
              <p>Rating: {movie.rating}</p>
              <p>imdb_link: {movie.imdb_url}</p>
              <button onClick={(event) => handleFavoriteToggle(event, movie)} className="mt-2 bg-blue-500 text-white px-2 py-1 rounded">
                {favorites.find(fav => fav.id === movie.id) ? 'Unfavorite' : 'Favorite'}
              </button>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FavoriteList;