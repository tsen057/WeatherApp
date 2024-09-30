import axios from 'axios';

const apiKey = '9b0468a281116ad5e7b3b67075cb884a'; // OpenWeatherMap API key

export const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await axios.get(url);
        return response.data; // Return the weather data
    } catch (error) {
        throw new Error('City not found. Please try again.'); // Throw error if city not found
    }
};
