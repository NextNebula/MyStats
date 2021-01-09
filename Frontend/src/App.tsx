import './App.css';
import { useApi } from './MyStatsApi';

function App() {
  const movies = useApi();

  return (
    <>
      <h1>MyStats</h1>
      {movies.map(movie => {
        return <div>{movie.name}</div>
      })}
    </>
  );
}

export default App;
