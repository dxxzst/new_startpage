import axios from 'axios';
import type { WeatherData } from '../types';

export const fetchWeather = async (manualLocation?: string): Promise<WeatherData> => {
    let lat: number, lon: number, cityName: string = 'Local';

    if (manualLocation) {
        // Geocode manual location
        try {
            const geoResponse = await axios.get(
                `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(manualLocation)}&count=1&language=zh&format=json`
            );

            if (geoResponse.data.results && geoResponse.data.results.length > 0) {
                const result = geoResponse.data.results[0];
                lat = result.latitude;
                lon = result.longitude;
                cityName = result.name;
            } else {
                throw new Error('Location not found');
            }
        } catch (error) {
            console.error('Geocoding failed:', error);
            throw error;
        }
    } else {
        // Use Geolocation API
        if (!navigator.geolocation) {
            throw new Error('Geolocation not supported');
        }

        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        lat = position.coords.latitude;
        lon = position.coords.longitude;

        // Reverse Geocoding for auto location
        try {
            const geoResponse = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`
            );
            if (geoResponse.data) {
                cityName = geoResponse.data.name || 'Local';
            }
        } catch (e) {
            console.warn('Failed to fetch city name', e);
        }
    }

    // Fetch Weather Data (Current + Daily for Min/Max)
    const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
    );

    const { current_weather, daily } = weatherResponse.data;

    return {
        temperature: current_weather.temperature,
        weatherCode: current_weather.weathercode,
        isDay: current_weather.is_day === 1,
        city: cityName,
        maxTemp: daily.temperature_2m_max[0],
        minTemp: daily.temperature_2m_min[0]
    };
};
