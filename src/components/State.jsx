import React, {useState} from 'react'

const State = () => {
  const [change, setChange] = useState("i love you")
    const [time, setTime] = useState(0)
    const tolu = () => {
        setTime(time + 1)
      }
      const tolus = () => {
      if (time > 0){
      setTime(time - 1)
      }
      }
      
    const modify = () => {
      setChange("you too");
    
    }
      return (
    <div >
      <h1>{time}</h1> 
      <h1>{change}</h1> 
      <button onClick={tolu} style={{margin:'2%', padding:'1%'}}> + </button>
      <button onClick={tolus} style={{margin:'2%', padding:'1%'}}> - </button>
      <button onClick={modify}>change</button>
    </div>
  )
}

export default State
