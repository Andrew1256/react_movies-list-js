import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => {
  return (
    <div className="page-content">
      {movies.map(movie => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};
