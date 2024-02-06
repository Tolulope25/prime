import React, {useState}from 'react'
import data from '../data/movie'
import '../css/movie.css'

const Film = () => {
    const [movies, setMovies] = useState(data)
    const remove = (tolu) => {
    const newData = movies.filter(movie => movie.id !== tolu)
    setMovies(newData)
    }
    


const render = movies.map((movie,idx)=>{
    return(
        <div key={idx}>
            <div className='each-movie-container'>
            <img src={movie.url} alt={movie.title}/>
                    <h1>Title: {movie.title}</h1>
                    <p>Genre : {movie.genre}</p>
                    <p>Category : {movie.category}</p>
                    <button onClick={()=>remove(movie.id)}>X</button>
</div>
        </div>

    )
})


  return (
    <div>
        <h2 style={{textAlign:'center', margin : '1%'}}>we have {movies.length} movie{movies.length ===1 ? '' : 's'} available</h2>
        <div>
            <ul>
                <li onClick={()=>category('Hollywood')}></li>
                <li onClick={()=>category('Bollywood')}></li>
                <li onClick={()=>category('Nollywood')}></li>
                <li onClick={()=>category('K.drama')}></li>
            </ul>
        </div>
      {render}
    </div>
  )
}

export default Film
