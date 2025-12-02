import axios from 'axios';
import type { WeatherData } from '../types';

export const fetchWeather = async (): Promise<WeatherData> => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation not supported'));
            return;
        }

        navigator.geolocation.getCurrentPosition(async (position) => {
            try {
                const { latitude, longitude } = position.coords;
                const response = await axios.get(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
                );

                const { current_weather } = response.data;

                resolve({
                    temperature: current_weather.temperature,
                    weatherCode: current_weather.weathercode,
                    isDay: current_weather.is_day === 1,
                    city: 'Local' // Open-Meteo doesn't provide city name directly without geocoding
                });
            } catch (error) {
                reject(error);
            }
        }, (error) => {
            reject(error);
        });
    });
};
