import { Routes, Route, Link } from 'react-router-dom'
import CounterApp from './projects/counter/CounterApp'
import FetchUserApp from './projects/fetchUser/FetchUserApp' 
import TimerApp from './projects/timer/TimerApp'
import ToggleDarkModeApp from './projects/toggleDarkMode/ToggleDarkModeApp'
import WeatherApp from './projects/weatherApp/WeatherApp'
import './App.css';

function HomePage() {
  return (
    <div className="home-content">
      <h2>Welcome to React Projects Playground</h2>
      <p>Select a project from the list above to get started.</p>
    </div>
  );
}

function App () {
  return (
    <div className="app-container">
      <h1 className="app-title">React Projects Playground</h1>
      <p className="home-content">Vol1: useState - useEffect</p>
      <nav className="projects-list">
        <Link to="/" className="project-link">Home</Link>
        <Link to="/counter" className="project-link">Counter</Link>
        <Link to="/fetchUser" className="project-link">Fetch User</Link>
        <Link to="/timer" className="project-link">Timer</Link>
        <Link to="/toggleDarkMode" className="project-link">Toggle Dark Mode</Link>
        <Link to="/weatherApp" className="project-link">Weather App</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/fetchUser" element={<FetchUserApp />} />
        <Route path="/timer" element={<TimerApp />} />
        <Route path="/toggleDarkMode" element={<ToggleDarkModeApp />} />
        <Route path="/weatherApp" element={<WeatherApp />} />
      </Routes>
    </div>
  );
}

export default App;
