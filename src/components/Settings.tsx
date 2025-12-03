import React, { useState, useRef } from 'react';
import { FaCog, FaDownload, FaUpload, FaLock, FaLockOpen } from 'react-icons/fa';
import type { WallpaperEffect } from '../types';
import { useTranslation, LANGUAGES } from '../i18n';
import styles from './Settings.module.css';

interface SettingsProps {
    effect: WallpaperEffect;
    onEffectChange: (effect: WallpaperEffect) => void;
    isLocked: boolean;
    onToggleLock: () => void;
    showWeather: boolean;
    onToggleWeather: () => void;
    manualLocation: string;
    onLocationChange: (location: string) => void;
    refreshInterval: number;
    onIntervalChange: (interval: number) => void;
    gridColumns: number;
    onGridColumnsChange: (columns: number) => void;
    timeFormat: '12' | '24';
    onTimeFormatChange: (format: '12' | '24') => void;
}

export const Settings: React.FC<SettingsProps> = ({
    effect, onEffectChange,
    isLocked, onToggleLock,
    showWeather, onToggleWeather,
    manualLocation, onLocationChange,
    refreshInterval, onIntervalChange,
    gridColumns, onGridColumnsChange,
    timeFormat, onTimeFormatChange
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [locationInput, setLocationInput] = useState(manualLocation || '');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { t, language, setLanguage } = useTranslation();

    React.useEffect(() => {
        setLocationInput(manualLocation || '');
    }, [manualLocation]);

    const handleExport = () => {
        const data = {
            bookmarks: JSON.parse(localStorage.getItem('bookmarks') || '[]'),
            searchEngine: localStorage.getItem('searchEngine') || 'bing',
            wallpaperEffect: localStorage.getItem('wallpaperEffect') || 'none',
            isLocked: localStorage.getItem('isLocked') === 'true',
            showWeather: localStorage.getItem('showWeather') !== 'false',
            manualLocation: localStorage.getItem('manualLocation') || '',
            wallpaperRefreshInterval: localStorage.getItem('wallpaperRefreshInterval') || '0',
            gridColumns: localStorage.getItem('gridColumns') || '6',
            timeFormat: localStorage.getItem('timeFormat') || '24',
            language: localStorage.getItem('language') || 'en'
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'startpage-config.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target?.result as string);
                if (data.bookmarks) localStorage.setItem('bookmarks', JSON.stringify(data.bookmarks));
                if (data.searchEngine) localStorage.setItem('searchEngine', data.searchEngine);
                if (data.wallpaperEffect) localStorage.setItem('wallpaperEffect', data.wallpaperEffect);
                if (data.isLocked !== undefined) localStorage.setItem('isLocked', String(data.isLocked));
                if (data.showWeather !== undefined) localStorage.setItem('showWeather', String(data.showWeather));
                if (data.manualLocation !== undefined) localStorage.setItem('manualLocation', data.manualLocation);
                if (data.wallpaperRefreshInterval !== undefined) localStorage.setItem('wallpaperRefreshInterval', data.wallpaperRefreshInterval);
                if (data.gridColumns !== undefined) localStorage.setItem('gridColumns', String(data.gridColumns)); if (data.timeFormat !== undefined) localStorage.setItem('timeFormat', data.timeFormat);
                if (data.language !== undefined) localStorage.setItem('language', data.language);

                alert(t.settings.importSuccess);
                window.location.reload();
            } catch (error) {
                alert(t.settings.importError);
            }
        };
        reader.readAsText(file);
    };

    const handleLocationSubmit = () => {
        onLocationChange(locationInput);
    };

    return (
        <>
            <div className={styles.bottomRightControls}>
                <button
                    className={`${styles.iconBtn} ${isLocked ? styles.locked : ''}`}
                    onClick={onToggleLock}
                    title={isLocked ? t.lock.unlock : t.lock.lock}
                >
                    {isLocked ? <FaLock /> : <FaLockOpen />}
                </button>

                <button className={styles.iconBtn} onClick={() => setIsOpen(true)}>
                    <FaCog />
                </button>
            </div>

            {isOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <h2>{t.settings.title}</h2>

                        <div className={styles.section}>
                            <h3>{t.settings.wallpaper.title}</h3>
                            <div className={styles.settingRow}>
                                <label>{t.settings.wallpaper.effect}:</label>
                                <select
                                    value={effect}
                                    onChange={(e) => onEffectChange(e.target.value as WallpaperEffect)}
                                    className={styles.select}
                                >
                                    <option value="none">{t.settings.wallpaper.effectNone}</option>
                                    <option value="blur">{t.settings.wallpaper.effectBlur}</option>
                                    <option value="glass">{t.settings.wallpaper.effectGlass}</option>
                                </select>
                            </div>
                            <div className={styles.settingRow}>
                                <label>{t.settings.wallpaper.autoRefresh}:</label>
                                <select
                                    value={refreshInterval}
                                    onChange={(e) => onIntervalChange(Number(e.target.value))}
                                    className={styles.select}
                                >
                                    <option value="0">{t.settings.wallpaper.daily}</option>
                                    <option value="1">{t.settings.wallpaper.every1Hour}</option>
                                    <option value="6">{t.settings.wallpaper.every6Hours}</option>
                                    <option value="12">{t.settings.wallpaper.every12Hours}</option>
                                </select>
                            </div>
                            <div className={styles.settingRow}>
                                <label>{t.settings.wallpaper.timeFormat}:</label>
                                <select
                                    value={timeFormat}
                                    onChange={(e) => onTimeFormatChange(e.target.value as '12' | '24')}
                                    className={styles.select}
                                >
                                    <option value="24">{t.settings.wallpaper.format24}</option>
                                    <option value="12">{t.settings.wallpaper.format12}</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h3>{t.settings.weather.title}</h3>
                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    checked={showWeather}
                                    onChange={onToggleWeather}
                                />
                                {t.settings.weather.showWeather}
                            </label>

                            {showWeather && (
                                <div className={styles.inputGroup}>
                                    <input
                                        type="text"
                                        value={locationInput}
                                        onChange={(e) => setLocationInput(e.target.value)}
                                        placeholder={t.settings.weather.manualLocation}
                                        className={styles.input}
                                    />
                                    <button onClick={handleLocationSubmit} className={styles.smallBtn}>
                                        {t.settings.weather.apply}
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className={styles.section}>
                            <h3>{t.settings.layout.title}</h3>
                            <div className={styles.settingRow}>
                                <label>{t.settings.layout.columns}:</label>
                                <input
                                    type="number"
                                    min="3"
                                    max="10"
                                    value={gridColumns}
                                    onChange={(e) => onGridColumnsChange(Number(e.target.value))}
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h3>{t.settings.general.title}</h3>
                            <div className={styles.settingRow}>
                                <label>{t.settings.general.language}:</label>
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value as any)}
                                    className={styles.select}
                                >
                                    {LANGUAGES.map(lang => (
                                        <option key={lang.code} value={lang.code}>
                                            {lang.nativeName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h3>{t.settings.data.title}</h3>
                            <div className={styles.actions}>
                                <button className={styles.actionBtn} onClick={handleExport}>
                                    <FaDownload /> {t.settings.data.export}
                                </button>
                                <button className={styles.actionBtn} onClick={() => fileInputRef.current?.click()}>
                                    <FaUpload /> {t.settings.data.import}
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    accept=".json"
                                    onChange={handleImport}
                                />
                            </div>
                        </div>

                        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                            {t.settings.close}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
