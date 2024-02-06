import React, {useState} from 'react'

const Assignment = () => {
  const [datas, setDatas] = useState([])  
  const call = async () => {
   const apiUrl = await fetch ("https://randomuser.me/api/?result=5")
   const {results} = await apiUrl.json();
   setDatas(results)
   console.log(results[0])
  }
   const render = datas.map((data, idx) => {
     return(
        <div key={idx}>
             <h1>{data.name.first}</h1>
        </div>
     );
  })

  return (
    <div className=''>
       <div> {render}</div>
      <button onClick={call}> Get Data</button>
    </div>
  )
}

export default Assignment;
