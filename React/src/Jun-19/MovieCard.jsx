function MovieCard(props) {
  const { poster, title, rating, language, genre, buttonText } =
    props.movieData;

  return (
    <div className="movie-card">
      <img src={poster} alt={title} />

      <div className="movie-info">
        <h3>{title}</h3>

        <p>⭐ {rating}/10</p>

        <p>{language}</p>

        <p>{genre}</p>

        <button>{buttonText}</button>
      </div>
    </div>
  );
}

export default MovieCard;
