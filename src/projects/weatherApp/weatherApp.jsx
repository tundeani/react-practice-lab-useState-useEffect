import React, { useState } from 'react';

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = '76bbbcfab33d8924d7ccb60f18db0880'; // Replace with your OpenWeatherMap API key

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Weather App</h2>
      <form onSubmit={fetchWeather}>
        <input 
          type="text" 
          placeholder="Enter city" 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {loading && <p>Loading weather...</p>}
      {error && <p>Error: {error}</p>}
      
      {weather && (
        <div>
          <p>
            {weather.name} - {weather.sys.country}
          </p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
