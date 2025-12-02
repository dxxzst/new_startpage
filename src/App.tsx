import { useEffect, useState } from 'react';
import { Clock } from './components/Clock';
import { Weather } from './components/Weather';
import { Search } from './components/Search';
import { Bookmarks } from './components/Bookmarks';
import { Settings } from './components/Settings';
import { fetchBingWallpaper } from './services/bingService';
import type { Wallpaper } from './types';
import './App.css';

function App() {
  const [wallpaper, setWallpaper] = useState<Wallpaper | null>(null);

  useEffect(() => {
    const loadWallpaper = async () => {
      // Try to get cached wallpaper first
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

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: wallpaper ? `url(${wallpaper.url})` : 'none',
        backgroundColor: '#333' // Fallback
      }}
    >
      <div className="content-wrapper">
        <Weather />
        <div className="center-content">
          <Clock />
          <Search />
          <Bookmarks />
        </div>
        <Settings />

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
