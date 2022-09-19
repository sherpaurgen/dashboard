import React from 'react'
import Navbar from './components/Navbar'
import Agentlist from './components/Agentlist'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Notfound } from './components/Notfound'
import TicketAssignmentStat from './components/TicketAssignmentStat'



function App() {
return (<Router>
<div className='container' >
<Navbar text="#" />
  <Routes>
      <Route  path="/" element={<Agentlist/>} />
      <Route path="/stats" element={<TicketAssignmentStat/>} />
      <Route path="/*" element={<Notfound/>} />
  </Routes>
   </div>

</Router> );
}

export default App;
