import axios from 'axios'
import React from 'react'
import {useEffect, useState } from 'react'

function TicketCount() {
const [ticketcount,setTicketcount] = useState([])

useEffect(()=>{
    fetchdata()
  },[])
  
  const fetchdata = async ()=> {
    // const response = await fetch(`http://127.0.0.1:8080/api/v2/gettc`)
    // const jsondata = await response.json()
    // setTicketcount(jsondata)  api handler getTcount
    axios.get(`http://127.0.0.1:8080/api/v2/gettc`).then((response)=>{setTicketcount(response.data)}).catch(error=>{console.log("Local fetcher service not running:",error)})
  }
  return (
    <>
    <table>
    <thead>
    <tr>
    <th scope="col">Agent</th>
      <th scope="col">@</th>
      <th scope="col">Open/pending cases</th>
    </tr>
  </thead>
  
  <tbody style={{fontSize: "medium"}}>
    {ticketcount.map((x)=>(
      <tr key={x.Email}>
      <td>{x.Name}</td><td>{x.Email}</td><td>{x.Count}</td>
      </tr>
    ))}
    </tbody>
    </table>
    </>
  )
}

export default TicketCount