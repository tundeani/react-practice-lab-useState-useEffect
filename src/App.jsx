import { Routes, Route, Link } from 'react-router-dom'
import CounterApp from './projects/counter/CounterApp'
import FetchUserApp from './projects/fetchUser/FetchUserApp' 
import TimerApp from './projects/timer/TimerApp'
import ToggleDarkModeApp from './projects/toggleDarkMode/ToggleDarkModeApp'
import WeatherApp from './projects/weatherApp/WeatherApp'

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
        <Route path= "/counter" element= {<CounterApp />} />
        <Route path= "/fetchUser" element= {< FetchUserApp />} />
        <Route path= "/timer" element= {< TimerApp />} />
        <Route path= "/toggleDarkMode" element= {< ToggleDarkModeApp />} />
        <Route path= "/weatherApp" element= {< WeatherApp />} />
      </Routes>
    </div>
  )


}

export default App;