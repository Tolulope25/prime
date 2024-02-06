import React from 'react'

const MapTwo = () => {
    const students = [
        {id: 1, name: 'Farouq'},
        {id: 2, name: 'Fade'},
        {id: 3, name: 'Dami'},
        {id: 4, name: 'Aeesha'}
    ]
  return (
    <div>{
      
      students.map((student, idx) =>  {
      return(
       <div key={idx}> {student.name} is good
        </div>
        )
      
    })




}
    </div>
  )
}

export default MapTwo
