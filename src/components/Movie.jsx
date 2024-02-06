 import React, {useState} from 'react';
import movieData from '../data/movie';
import '../css/movie.css'




const Movie = () => {
    
    
    const[movies, setMovies] = useState(movieData)
    const [tolus, setTolu] = useState(movieData)
    
    const remove=(id) =>{
        const newData =  movies.filter(movie => movie.id !== id);
        setMovies(newData);
        console.log(newData.length);
    }


    
    
    const render= movies.map((movie,idx) => {
        return(
            <div key={idx}>
                    <div className='each-movie-container'>
                    <img src={movie.url} alt={movie.title}/>
                    <h1>Title: {movie.title}</h1>
                    <p>Genre : {movie.genre}</p>
                    <p>Category : {movie.category}</p>
                    <button className='each-movie-button' onClick={()=>remove(movie.id)}>X</button>
                    </div>
           </div>
        
        )
    })
    
    const reset = () => {
        setTolu(movieData)
        setMovies(movieData)
    }
    
    const category = (category) => {
        
        const newData =  tolus.filter(movie => movie.category === category);
    setMovies(newData);
}
const genre = (genre) => {
    
    const newData =  tolus.filter(movie => movie.genre === genre);
    setMovies(newData);
}
  return (
    <div>
  <h1 style={{textAlign:'center', margin : '1%'}}>{movies.length} Movie{movies.length===1? '' : 's'} Available</h1>
    <div className="movie-cat">

        <button onClick={reset} >All movies</button>
        <ul>
            <li onClick={()=>category('Hollywood')}>Hollywood</li>
            <li onClick={()=>category('Nollywood')}>Nollywood</li>
            <li onClick={()=>category('Bollywood')}>Bollywood</li>
            <li onClick={()=>category('K-drama')}>K. Drama</li>
        </ul>
        <ul>
            <li onClick={()=>genre('Action')}>Action</li>
            <li onClick={()=>genre('Romance')}>Romance</li>
            <li onClick={()=>genre('Thriller')}>Thriller</li>
        </ul>
    </div>
    <div className="movie-container">
        {render}
    </div>
    </div>
  );
}

export default Movie;
