import React, {useEffect, useState } from 'react'

const Effect = () => {
  const [count, setCount] = useState(0)

  
    setInterval(() => {
       setCount(count + 1)
    },1000)
  
  
  return (
    <div>
      <h1>the time is {count}</h1>
    </div>
  )
}

export default Effect
