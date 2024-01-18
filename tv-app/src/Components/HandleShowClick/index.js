export const handleMovieClick = async (showId) => {
    const url = `https://api.tvmaze.com/shows/${showId}`; // Fetch details of the clicked movie
    const res = await fetch(url);
    const data = await res.json();
    setSelectedMovie(data); // Store selected movie details in state
    navigate(`/shows/${showsId}`);
  }