import React from 'react'
import Car from './Car'
import CarTwo from './CarTwo'
const ConditTwo = () => {
    const age = 18
    
     
    return (
    <div>
     {age == 18 ? <CarTwo/> : <Car/>}
      
    </div>
  )
}


export default ConditTwo
