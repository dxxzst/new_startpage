import React, { useState, useRef } from 'react';
import { FaCog, FaDownload, FaUpload, FaLock, FaLockOpen } from 'react-icons/fa';
import type { WallpaperEffect } from '../types';
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
}

export const Settings: React.FC<SettingsProps> = ({
    effect, onEffectChange,
    isLocked, onToggleLock,
    showWeather, onToggleWeather,
    manualLocation, onLocationChange,
    refreshInterval, onIntervalChange,
    gridColumns, onGridColumnsChange
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [locationInput, setLocationInput] = useState(manualLocation || '');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const isZh = navigator.language.startsWith('zh');

    const handleExport = () => {
        const data = {
            bookmarks: JSON.parse(localStorage.getItem('bookmarks') || '[]'),
            searchEngine: localStorage.getItem('searchEngine') || 'bing',
            wallpaperEffect: localStorage.getItem('wallpaperEffect') || 'none',
            isLocked: localStorage.getItem('isLocked') === 'true',
            showWeather: localStorage.getItem('showWeather') !== 'false',
            manualLocation: localStorage.getItem('manualLocation') || '',
            wallpaperRefreshInterval: localStorage.getItem('wallpaperRefreshInterval') || '0',
            gridColumns: localStorage.getItem('gridColumns') || '6'
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
                if (data.gridColumns !== undefined) localStorage.setItem('gridColumns', String(data.gridColumns));

                alert(isZh ? '配置导入成功！正在刷新...' : 'Configuration imported successfully! Refreshing...');
                window.location.reload();
            } catch (error) {
                alert(isZh ? '导入失败：无效的JSON文件' : 'Failed to import configuration: Invalid JSON');
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
                    title={isLocked ? (isZh ? "解锁布局" : "Unlock Layout") : (isZh ? "锁定布局" : "Lock Layout")}
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
                        <h2>{isZh ? '设置' : 'Settings'}</h2>

                        <div className={styles.section}>
                            <h3>{isZh ? '壁纸设置' : 'Wallpaper Settings'}</h3>
                            <div className={styles.settingRow}>
                                <label>{isZh ? '特效' : 'Effect'}:</label>
                                <select
                                    value={effect}
                                    onChange={(e) => onEffectChange(e.target.value as WallpaperEffect)}
                                    className={styles.select}
                                >
                                    <option value="none">{isZh ? '无' : 'None'}</option>
                                    <option value="blur">{isZh ? '模糊' : 'Blur'}</option>
                                    <option value="glass">{isZh ? '毛玻璃' : 'Glass'}</option>
                                </select>
                            </div>
                            <div className={styles.settingRow}>
                                <label>{isZh ? '自动刷新' : 'Auto Refresh'}:</label>
                                <select
                                    value={refreshInterval}
                                    onChange={(e) => onIntervalChange(Number(e.target.value))}
                                    className={styles.select}
                                >
                                    <option value="0">{isZh ? '每天' : 'Daily'}</option>
                                    <option value="1">{isZh ? '每1小时' : 'Every 1 Hour'}</option>
                                    <option value="6">{isZh ? '每6小时' : 'Every 6 Hours'}</option>
                                    <option value="12">{isZh ? '每12小时' : 'Every 12 Hours'}</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h3>{isZh ? '天气设置' : 'Weather Settings'}</h3>
                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    checked={showWeather}
                                    onChange={onToggleWeather}
                                />
                                {isZh ? '显示天气' : 'Show Weather'}
                            </label>

                            {showWeather && (
                                <div className={styles.inputGroup}>
                                    <input
                                        type="text"
                                        value={locationInput}
                                        onChange={(e) => setLocationInput(e.target.value)}
                                        placeholder={isZh ? '手动位置 (如: Beijing)' : 'Manual Location (e.g. London)'}
                                        className={styles.input}
                                    />
                                    <button onClick={handleLocationSubmit} className={styles.smallBtn}>
                                        {isZh ? '应用' : 'Apply'}
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className={styles.section}>
                            <h3>{isZh ? '布局设置' : 'Layout Settings'}</h3>
                            <div className={styles.settingRow}>
                                <label>{isZh ? '每行个数' : 'Columns'}:</label>
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
                            <h3>{isZh ? '数据管理' : 'Data Management'}</h3>
                            <div className={styles.actions}>
                                <button className={styles.actionBtn} onClick={handleExport}>
                                    <FaDownload /> {isZh ? '导出配置' : 'Export Config'}
                                </button>
                                <button className={styles.actionBtn} onClick={() => fileInputRef.current?.click()}>
                                    <FaUpload /> {isZh ? '导入配置' : 'Import Config'}
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
                            {isZh ? '关闭' : 'Close'}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
