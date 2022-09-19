import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const  Navbar=({text})=> {
  const [loading,setLoading] = useState(false)
  const getResyncdb = () =>{
    setLoading(true)
    const axiosobj= axios.create({baseURL:"http://127.0.0.1:8080/api/v2/resyncdb",timeout:120000})
    axiosobj.get("http://127.0.0.1:8080/api/v2/resyncdb",)
    .then((res)=> {setLoading(false);
    console.log("resetStatus",res.status);} )
    .catch(error=>{console.log("Make sure the local fetcher service is up & running:",error.message)})
  }

  return (
    <nav>
      <ul>
           <li><Link to="/"><strong>{text}</strong></Link></li>
      </ul> 
  <ul>
    <li className='tooltip'><span className="tooltiptext">manually update local copy of ticket data</span>{!loading && <FontAwesomeIcon icon={faCircleDown} onClick={getResyncdb}  />} {loading && <FontAwesomeIcon icon={faCircleDown}  bounce />}</li>
    <li><Link to="/stats">Stats</Link></li>
    <li><Link to="/">Main</Link></li>
  </ul>
    </nav>
  )
}
Navbar.defaultProps={
    text:'default head prop'
}
Navbar.propTypes={
    text: PropTypes.string
}
export default Navbar