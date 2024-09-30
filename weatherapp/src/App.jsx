import React, { useState } from 'react';
import { fetchWeather } from './components/Weather'; // Import the fetchWeather function
import './App.css'; 

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const handleFetchWeather = async () => {
        try {
            const data = await fetchWeather(city);
            setWeather(data);
            setError(''); // Clear any previous errors
        } catch (err) {
            setWeather(null); // Clear previous weather data
            setError(err.message); // Use the error message from the fetchWeather function
            console.error("Error fetching weather data:", err);
        }
    };

    return (
        <>
            <h1>Weather App</h1>
            <div className="card">
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <br></br>
                <button className="weather-button" onClick={handleFetchWeather}>Get Weather</button>

                {error && <p style={{ color: 'red' }}>{error}</p>} {}
                {weather && (
                    <div>
                        <h2>{weather.name}</h2>
                        <p>Temperature: {weather.main.temp} &deg;C</p>
                        <p>Weather: {weather.weather[0].description}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
