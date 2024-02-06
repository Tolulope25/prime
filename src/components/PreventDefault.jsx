import React from 'react'
const PreventDefault = () => {
  const prev = (event) => {
    event.preventDefault();
  }
  return(
  <div>
    <h1>show me the meaning</h1>
    <a href="https://newhorizons.com" onClick={prev}>new horizons</a>
    </div>
  )
}

export default PreventDefault 
