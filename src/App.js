import { useState,useEffect } from "react";
import  MovieCard  from "./components/MovieCard";
import './App.css'

function App() {
  const api_url = 'https://api.themoviedb.org/3/movie/popular?api_key=175c5120929915013eba4a93133c1b42'
  const api_search = 'https://api.themoviedb.org/3/search/movie?api_key=175c5120929915013eba4a93133c1b42&query='
  const [movies,setMovies] = useState([])
  const [term,setTerm] = useState('')


  useEffect(() =>{
    fetch(api_url)
    .then(res =>res.json())
    .then(data => setMovies(data.results))
    

  },[])
  console.log(movies)

  const handleSearch =(e) =>{
    e.preventDefault()
    fetch(api_search + term)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }
 
    
  return (
    <div className="App"> 
    
      <div className="search-nav">
        <div>
          <h1>Movies</h1>
        </div>
        <div>
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value) }/>
            <button>search</button>
          </form >
          
        </div>
      </div>
      <div className="movies">
        {movies.map((movie) =>
          <MovieCard {...movie} />
        )}
      </div>

    </div>
  );
}

export default App;
