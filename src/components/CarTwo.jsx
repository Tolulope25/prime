import React, {useState} from 'react' 

const CarTwo = () => {
  const [see, setSee] = useState(false) 
  const hi = () => {
    setSee(!see)
  } 

    
    return(
        <div>
            <h1 style={{ 
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        color: see ? 'blue' : 'green',
      }}> Tea, a drink with bread and {see ? 'blue' : 'green'}</h1>
            <button style={{ 
          backgroundColor: '#007bff',
          color: '#fff',
          cursor: 'pointer',
          padding: '8px 16px',
          marginTop: '10px',
        }} onClick={hi}>change</button>
            
        </div>
    )
}
export default CarTwo