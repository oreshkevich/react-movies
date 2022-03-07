import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((value) => <Movie key={value.imdbID} {...value} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export { Movies };
