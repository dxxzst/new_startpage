import React, { useEffect, useState } from 'react';
import type { WeatherData } from '../types';
import { fetchWeather } from '../services/weatherService';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';
import styles from './Weather.module.css';

export const Weather: React.FC = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
        fetchWeather().then(setWeather).catch(console.error);
    }, []);

    if (!weather) return null;

    const getWeatherIcon = (code: number) => {
        if (code <= 3) return <WiDaySunny />;
        if (code <= 48) return <WiCloudy />;
        if (code <= 67) return <WiRain />;
        if (code <= 77) return <WiSnow />;
        if (code <= 99) return <WiThunderstorm />;
        return <WiDaySunny />;
    };

    return (
        <div className={styles.weatherContainer}>
            <div className={styles.icon}>
                {getWeatherIcon(weather.weatherCode)}
            </div>
            <div className={styles.info}>
                <span className={styles.temp}>{weather.temperature}°C</span>
                {/* <span className={styles.city}>{weather.city}</span> */}
            </div>
        </div>
    );
};
