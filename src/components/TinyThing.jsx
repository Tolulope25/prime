import React, {useState} from 'react'

const TinyThing = () => {
    const [value, setValue] = useState("")
    const update = (event) => {
        setValue(event.target.value)
    }
    return(
    <div style={{textAlign: 'center'}}>
      <h1>Hallelujah</h1>
      <input type="text" name='name' id='name' onChange={update} style={{fontSize: '2rem'}} />
      <h1>{value}</h1>
    </div>
  )
}

export default TinyThing
