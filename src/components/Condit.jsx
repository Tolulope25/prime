import React from 'react'

const Condit = () => {
    const age = 18

    if(age < 17){
  return (
    <div>
      <h1>nicenice</h1>
    </div>
  )
  } else if(age !== 18){
    return(
    <div>
     <h1>happybirthday</h1>
    </div>
    )
  } else{
    return(
      <div>
        <h1>nice one</h1>
      </div>
    )
  }
}

export default Condit
