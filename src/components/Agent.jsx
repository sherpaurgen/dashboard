import axios from 'axios'
import React from 'react'
//import {useEffect, useState } from 'react'

const Agent = (props) => {
    const { agentemail, agentid,agentname,agentactive,suspended,agentbias,agentshift,toggleShift} = props
    // const [isOnShift,setIsOnShift] = useState(agentshift)

    const handleCheckbox= async ()=>{
        try {
            const res = await axios.patch(`http://127.0.0.1:8080/api/v2/setShift/${agentid}`, {"shift":agentshift})
            toggleShift(agentid)
        } catch (err) {
            console.log(err)
        }
           
    }
    
  return (
    <>
      <tr key={agentemail} role="grid">
      <td>{agentname}</td>
      <td>{agentemail}</td>
      <td>
      <fieldset>
          <label htmlFor='switch'>
           <input
  type="checkbox"
  onChange={handleCheckbox} id="switch" name="switch" role="switch"
  checked={agentshift === "OD"}
/>
           </label>
      </fieldset>
      </td>
      <td>{agentid}</td>
      {/* <td>
            <select style={{fontSize: "medium"}}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option>{agentbias}</option>
            </select>
       </td> */}
      <td>{String(suspended)}</td>
      <td>{String(agentactive)}</td>
</tr>

    </>
  )
}

export default Agent