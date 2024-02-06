import React, { useState,useEffect } from 'react';

import '../css/style.css'

const Assignments = () => {
  const [datas, setDatas] = useState([]);
  // const [numResults, setNumResults] = useState(5);

  const call = async (n) => {
    const apiUrl = await fetch(`https://randomuser.me/api/?results=${n}`);
    const { results } = await apiUrl.json();
    setDatas(results); 
  };
  useEffect(()=>{
    call(3)
  },[])

  const render = datas.map((data, idx) => (
    <div key={idx}>
      <p><img src={data.picture.large} alt="the pics" /></p>
      <p>Gender: {data.gender}</p> 
      <p>Name: {data.name.title}, {data.name.first}, {data.name.last}</p>
      <p>Age: {data.dob.age}</p>
      <p>
        Address: {data.location.number}, {data.location.name}, {data.location.city}, {data.location.state}, {data.location.country}
      </p>
      <p>Telephone: {data.phone}</p>
      <br />
      <br />
    </div>
  ));

  return (
    <div className='fetch-container'>
      
        {/* <h2 className='fetch-heading'>we have{datas.length} Users Data</h2> <br /> */}
        {render} <br /> <br />
         <div>

        <button onClick={call}>fetch data</button>
         </div>
    </div>
  )
}

export default Assignments