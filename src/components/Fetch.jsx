import React, {useState} from 'react'
import '../css/style.css'

const Fetch = () => {
  const [users, setUsers] = useState([])
  const dataFetch = async () => {
    const apiUrl = await fetch("https://jsonplaceholder.typicode.com/users")
    const result = await apiUrl.json()
    setUsers(result)
  }
 
    const render = users.map((user, idx) => {
        return(
          <div key={idx}>
            <p>Name: {user.location}</p> 
           <p>Email: {user.email}</p> 
           <p> Address: {user.address.suite} {user.address.street} {user.address.city}</p> <br /> 
          </div>
        )
        })
    
  return (
    <div className= 'fetch-container'>
      <div>
        <h2 className='fetch-heading'>we have {users.length}All Users Data</h2> <br />
        {render}
        <button onClick={dataFetch}><h1>FETCH</h1></button>
      </div>
    </div>
  )
}

export default Fetch
