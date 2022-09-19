import React from 'react'
import axios from 'axios'
import {useEffect, useState } from 'react'

function TicketAssignmentStat() {
    const [counter,setCounter] = useState([])
  useEffect(()=>{
    fetchStat()
  },[])

  
  
  const fetchStat = async ()=> {
    axios.get(`http://127.0.0.1:8080/api/v2/stats`).then((response)=>{setCounter(response.data)}).catch(error=>{console.log("Make sure the local fetcher service is up & running:",error)})
  }

  return (
    <>
    {  counter.length<1 && <article>Err: Empty Agent List Check local docker database and binary is running </article>}
     <div className='grid'>
     <table style={{fontSize: "medium"}}>
     <thead>
     <tr>
      <th scope="col">Email</th>
      <th scope="col">Tickets assigned in last 7 days</th>
    </tr>
  </thead>
  <tbody >
    {counter.map((c)=>(
      <tr key={c.Email}>
         <td>{c.Email}</td><td>{c.Count}</td>
      </tr>
    ))}
  </tbody>
  </table>
     </div>
    </>
  )
}



export default TicketAssignmentStat