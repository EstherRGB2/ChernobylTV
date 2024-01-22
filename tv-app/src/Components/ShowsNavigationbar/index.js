// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './ShowsNavbar.css';

// export default function ShowsNavbar() {
//   const [query, setQuery] = useState('');
//   const [shows, setShows] = useState([]);
//   const [selectedShow, setSelectedShow] = useState(null);
//   const navigate = useNavigate();

//   const searchShows = async (e) => {
//     e.preventDefault();
//     const url = `https://api.tvmaze.com/search/shows?q=${query}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     setShows(data);
//   };

//   const handleShowClick = async (showId) => {
//     const url = `https://api.tvmaze.com/shows/${showId}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     setSelectedShow(data.show);
//     navigate(`/show/${showId}`);
//   };

//   return (
//     <>
//       <form className="nav-bar" onSubmit={searchShows}>
//         <nav className="header-container-movies">
//           <h2 className="HomeLink">Chernobyl TV</h2>
//           <Link className="movie-home-button" to="/movie">
//             Go To Movies
//           </Link>
//         </nav>
//         <div className="search-wrapper-movie">
//           <input
//             className="Search"
//             type="text"
//             placeholder="Search"
//             name="query"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <button className="submit" type="submit">
//             Search
//           </button>
//         </div>
//       </form>

//       <div>
//         {shows.map((show) => (
//           <div className="movies--card" key={show.show.id}>
//             <img
//               onClick={() => handleShowClick(show.show.id)}
//               src={show.show.image?.medium}
//               alt={show.show.name}
//               width="50px"
//             />
//           </div>
//         ))}
//       </div>

//       {selectedShow && (
//         <div>
//           <h3>{selectedShow.name}</h3>
//           <p>{selectedShow.summary}</p>
//           {/* Display other details of the selected show */}
//         </div>
//       )}
//     </>
//   );
// }
