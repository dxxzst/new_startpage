import { useEffect, useState } from 'react';
import { Clock } from './components/Clock';
import { Weather } from './components/Weather';
import { Search } from './components/Search';
import { Bookmarks } from './components/Bookmarks';
import { Settings } from './components/Settings';
import { fetchBingWallpaper } from './services/bingService';
import type { Wallpaper, WallpaperEffect } from './types';
import './App.css';

function App() {
  const [wallpaper, setWallpaper] = useState<Wallpaper | null>(null);
  const [effect, setEffect] = useState<WallpaperEffect>('none');
  const [isLocked, setIsLocked] = useState(false);
  const [showWeather, setShowWeather] = useState(true);
  const [manualLocation, setManualLocation] = useState('');

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

    const loadWallpaper = async () => {
      const cached = localStorage.getItem('wallpaper');
      const cachedDate = localStorage.getItem('wallpaperDate');
      const today = new Date().toDateString();

      if (cached && cachedDate === today) {
        setWallpaper(JSON.parse(cached));
      } else {
        const newWallpaper = await fetchBingWallpaper();
        setWallpaper(newWallpaper);
        localStorage.setItem('wallpaper', JSON.stringify(newWallpaper));
        localStorage.setItem('wallpaperDate', today);
      }
    };

    loadWallpaper();
  }, []);

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
          <Bookmarks isLocked={isLocked} />
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
        />

        {wallpaper && (
          <div className="wallpaper-info">
            {wallpaper.copyright}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
