import { useEffect, useState } from 'react';
import { Clock } from './components/Clock';
import { Weather } from './components/Weather';
import { Search } from './components/Search';
import { Bookmarks } from './components/Bookmarks';
import { Settings } from './components/Settings';
import { fetchBingWallpaper } from './services/bingService';
import type { Wallpaper, WallpaperEffect } from './types';
import { FaSyncAlt } from 'react-icons/fa';
import './App.css';

function App() {
  const [wallpaper, setWallpaper] = useState<Wallpaper | null>(null);
  const [effect, setEffect] = useState<WallpaperEffect>(() => (localStorage.getItem('wallpaperEffect') as WallpaperEffect) || 'none');
  const [isLocked, setIsLocked] = useState(() => localStorage.getItem('isLocked') === 'true');
  const [showWeather, setShowWeather] = useState(() => localStorage.getItem('showWeather') !== 'false');
  const [manualLocation, setManualLocation] = useState(() => localStorage.getItem('manualLocation') || '');
  const [refreshInterval, setRefreshInterval] = useState(() => Number(localStorage.getItem('wallpaperRefreshInterval') || 0));
  const [gridColumns, setGridColumns] = useState(() => Number(localStorage.getItem('gridColumns') || 6));
  const [timeFormat, setTimeFormat] = useState<'12' | '24'>(() => (localStorage.getItem('timeFormat') as '12' | '24') || '24');

  useEffect(() => {
    checkAndLoadWallpaper(refreshInterval);
  }, []);

  const checkAndLoadWallpaper = async (interval: number) => {
    const cached = localStorage.getItem('wallpaper');
    const lastFetchTime = localStorage.getItem('wallpaperFetchTime');
    const now = Date.now();

    if (cached && lastFetchTime) {
      const timeDiff = now - Number(lastFetchTime);
      const hoursDiff = timeDiff / (1000 * 60 * 60);

      // If interval is set (>0) and time passed > interval, refresh
      // If interval is 0 (daily), check if it's a new day (simplified check: > 24h or just rely on Bing's daily update which we can't control easily without index, so we stick to 24h cache for "daily")
      const shouldRefresh = interval > 0 ? hoursDiff >= interval : hoursDiff >= 24;

      if (!shouldRefresh) {
        setWallpaper(JSON.parse(cached));
        return;
      }
    }

    // Need refresh
    await refreshWallpaper();
  };

  const refreshWallpaper = async (random: boolean = false) => {
    // If random, pick index 0-7. If not (daily/scheduled), pick 0 (today)
    const index = random ? Math.floor(Math.random() * 8) : 0;
    const newWallpaper = await fetchBingWallpaper(index);
    setWallpaper(newWallpaper);
    localStorage.setItem('wallpaper', JSON.stringify(newWallpaper));
    localStorage.setItem('wallpaperFetchTime', String(Date.now()));
  };

  const handleEffectChange = (newEffect: WallpaperEffect) => {
    setEffect(newEffect);
    localStorage.setItem('wallpaperEffect', newEffect);
  };

  const toggleLock = () => {
    const newLockState = !isLocked;
    setIsLocked(newLockState);
    localStorage.setItem('isLocked', String(newLockState));
  };

  const toggleWeather = () => {
    const newState = !showWeather;
    setShowWeather(newState);
    localStorage.setItem('showWeather', String(newState));
  };

  const handleLocationChange = (location: string) => {
    setManualLocation(location);
    localStorage.setItem('manualLocation', location);
  };

  const handleIntervalChange = (interval: number) => {
    setRefreshInterval(interval);
    localStorage.setItem('wallpaperRefreshInterval', String(interval));
  };

  const handleGridColumnsChange = (columns: number) => {
    setGridColumns(columns);
    localStorage.setItem('gridColumns', String(columns));
  };

  const handleTimeFormatChange = (format: '12' | '24') => {
    setTimeFormat(format);
    localStorage.setItem('timeFormat', format);
  };

  return (
    <div
      className={`app-container effect-${effect}`}
      style={{
        backgroundImage: wallpaper ? `url(${wallpaper.url})` : 'none',
        backgroundColor: '#333'
      }}
    >
      <div className="content-wrapper">
        <div className="weather-wrapper">
          <Weather show={showWeather} manualLocation={manualLocation} />
        </div>
        <div className="center-content">
          <Clock format24={timeFormat === '24'} />
          <Search />
          <Bookmarks isLocked={isLocked} gridColumns={gridColumns} />
        </div>

        <Settings
          effect={effect}
          onEffectChange={handleEffectChange}
          isLocked={isLocked}
          onToggleLock={toggleLock}
          showWeather={showWeather}
          onToggleWeather={toggleWeather}
          manualLocation={manualLocation}
          onLocationChange={handleLocationChange}
          refreshInterval={refreshInterval}
          onIntervalChange={handleIntervalChange}
          gridColumns={gridColumns}
          onGridColumnsChange={handleGridColumnsChange}
          timeFormat={timeFormat}
          onTimeFormatChange={handleTimeFormatChange}
        />

        <div className="bottom-left-controls">
          <button className="refresh-btn" onClick={() => refreshWallpaper(true)} title="Random Wallpaper">
            <FaSyncAlt />
          </button>
          {wallpaper && (
            <div className="wallpaper-info">
              {wallpaper.copyright}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
