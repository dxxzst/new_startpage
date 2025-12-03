import React, { useEffect, useState } from 'react';
import type { WeatherData } from '../types';
import { fetchWeather } from '../services/weatherService';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';
import styles from './Weather.module.css';

interface WeatherProps {
    show: boolean;
    manualLocation?: string;
}

export const Weather: React.FC<WeatherProps> = ({ show, manualLocation }) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!show) return;

        setWeather(null);
        setError(null);

        fetchWeather(manualLocation)
            .then(setWeather)
            .catch((err) => {
                console.error(err);
                setError('Weather unavailable');
            });
    }, [show, manualLocation]);

    if (!show || (!weather && !error)) return null;

    if (error) {
        return (
            <div className={styles.weatherContainer}>
                <span className={styles.city}>{error}</span>
            </div>
        );
    }

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
                <div className={styles.mainInfo}>
                    <span className={styles.temp}>{Math.round(weather.temperature)}°C</span>
                    <span className={styles.city}>{weather.city}</span>
                </div>
                {(weather.maxTemp !== undefined && weather.minTemp !== undefined) && (
                    <div className={styles.details}>
                        <span className={styles.detailItem}>H: {Math.round(weather.maxTemp)}°</span>
                        <span className={styles.detailItem}>L: {Math.round(weather.minTemp)}°</span>
                    </div>
                )}
            </div>
        </div>
    );
};
