import {useEffect, useState } from 'react'
import TicketCount from './TicketCount'
import React from 'react'
import axios from 'axios'
import Agent from './Agent'

function Agentlist() {
  const [agents,setAgents] = useState([])

  useEffect(()=>{
    fetchAgents()
  },[])

  function toggleShift(id){

    const newAgentList=[...agents].map((a)=>{
       if (a.Aid===id) {
          if(a.Shift === "OD"){ 
              a.Shift="Off"
             
          } else if (a.Shift==="Off") {
              a.Shift="OD"
              
          } else {
          a.Shift="Off"
      
          }
       }
       return a   //modified agent and rest of agent obj is returned to newAgentlist
    })
    setAgents(newAgentList)
  }

  const fetchAgents = async ()=> {
    axios.get(`http://127.0.0.1:8080/api/v2/agentlist`).then((response)=>{setAgents(response.data)}).catch(error=>{console.log("Make sure the local fetcher service is up & running:",error)})
  }

  return (
    <>
    {  agents.length<1 && <article>Err: Empty Agent List Check local docker database and binary is running </article>}
     <div className='grid'>
     <table style={{fontSize: "medium"}}>
     <thead>
     <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">OnShift:{agents.filter(item=>item.Shift==="OD").length}/{agents.length}</th>
      <th scope="col">AgentID</th>
      {/* <th scope="col">Bias</th> */}
      <th scope="col">Suspended</th>
      <th scope="col">Active</th>
    </tr>
  </thead>
  <tbody >
    {agents.map((agnt)=>(
      <Agent key={agnt.Email} agentemail={agnt.Email} agentname={agnt.Name} agentid={agnt.Aid} agentbias={agnt.Bias} suspended={agnt.Suspnd} agentactive={agnt.Active} agentshift={agnt.Shift} toggleShift={toggleShift} />
    ))}
  </tbody>
  </table>
     </div>
    <div className='grid' ><TicketCount/></div>
    </>
  )
}

export default Agentlist