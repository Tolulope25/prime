import React from 'react'

const Event = () => {
  const shoot = () => {
    alert('what a shot')
  }
  return (
    <div>
      <button onClick={shoot}><h1>take the shot</h1></button>
    </div>
  )
}

export default Event
