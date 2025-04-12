import { Routes, Route, Link } from 'react-router-dom'
import counterApp from './projects/counter/counterApp'
import fetchUserApp from  '/.projects/fetchUser/fetchUserApp' 
import timerApp from './projects/timer/timerApp'
import toggleDarkModeApp from './projects/toggleDarkMode'
import weatherApp from './weatherApp'

function App () {
  return (
    <div style={{ padding: '20px'}}>
      <nav>
        <Link to= "/counter">Counter</Link>
        <Link to= "/fetchUser">Fetch User</Link>
        <Link to= "/timer">Timer</Link>
        <Link to= "/toggleDarkMode">Toggle-Dark-Mode</Link>
        <Link to= "/weatherApp">Weather-App</Link>
      </nav>

      <Routes>
        <Route path= "/counter" element= {<counterApp />} />
        <Route path= "/fetchUser" element= {< fetchUserApp />} />
        <Route path= "/timer" element= {< timerApp />} />
        <Route path= "/toggleDarkMode" element= {< toggleDarkModeApp />} />
        <Route path= "/weatherApp" element= {< weatherApp />} />
      </Routes>
    </div>
  )


}