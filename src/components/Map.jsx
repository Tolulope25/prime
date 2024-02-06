import React from 'react'

const Map = () => {
    const students = ['Aisha', 'Fade', 'Farouq','Dami','David','Chidinma']
    const filteredStudents = students.filter(student => student.length > 5)
  return (
    <div>
      <h1>
        {
            filteredStudents.map((student, idx) =>{
                return(
                 
                <div key={idx}>
                <h1 >{student} is a student</h1>
                </div>
                )
            })

        }
      </h1>
    </div>
  )
}

export default Map
