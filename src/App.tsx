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
  const [effect, setEffect] = useState<WallpaperEffect>('none');
  const [isLocked, setIsLocked] = useState(false);
  const [showWeather, setShowWeather] = useState(true);
  const [manualLocation, setManualLocation] = useState('');
  const [refreshInterval, setRefreshInterval] = useState(0); // 0 = daily (default)
  const [gridColumns, setGridColumns] = useState(6);

  useEffect(() => {
    // Load settings
    const savedEffect = localStorage.getItem('wallpaperEffect') as WallpaperEffect;
    if (savedEffect) setEffect(savedEffect);

    const savedLock = localStorage.getItem('isLocked');
    if (savedLock) setIsLocked(savedLock === 'true');

    const savedShowWeather = localStorage.getItem('showWeather');
    if (savedShowWeather !== null) setShowWeather(savedShowWeather === 'true');

    const savedLocation = localStorage.getItem('manualLocation');
    if (savedLocation) setManualLocation(savedLocation);

    const savedInterval = localStorage.getItem('wallpaperRefreshInterval');
    if (savedInterval) setRefreshInterval(Number(savedInterval));

    const savedColumns = localStorage.getItem('gridColumns');
    if (savedColumns) setGridColumns(Number(savedColumns));

    checkAndLoadWallpaper(Number(savedInterval || 0));
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

  return (
    <div
      className={`app-container effect-${effect}`}
      style={{
        backgroundImage: wallpaper ? `url(${wallpaper.url})` : 'none',
        backgroundColor: '#333'
      }}
    >
      <div className="content-wrapper">
        <Weather show={showWeather} manualLocation={manualLocation} />
        <div className="center-content">
          <Clock />
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
