import React, {useState} from 'react'
import personData from '../data/birthday'
import '../css/movie.css'

const Birthday = () => {
  const [persons, setPersons] = useState(personData)

  const remove = (tolu) => {
    const newData = persons.filter(person => person.id !== tolu);
    setPersons(newData)
  }
  const render = persons.map((person,idx) => {
    return(
      <div key={idx}>
<div className='each-movie-container'>
                  <img src={person.url} alt={person.title}/>
                      <p>Name:{person.Name}</p>
                    <p> Date : {person.date}</p>
                    <p>Personality : {person.personality}</p>
                  
                    <button className='each-movie-button' onClick={()=>remove(person.id)}>X</button>
</div>
      </div>
    )
  })
  return (
   <div   >
     <h1 style={{textAlign:'center', margin : '1%'}}>{persons.length} Person{persons.length===1? '' : 's'} Available</h1>
       <div className='movie-container'>{render}</div>
    
    </div>
  )
}

export default Birthday
