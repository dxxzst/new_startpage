export interface Wallpaper {
  url: string;
  copyright: string;
  date: string;
}

export interface WeatherData {
  temperature: number;
  weatherCode: number;
  isDay: boolean;
  city: string;
  minTemp?: number;
  maxTemp?: number;
}

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  icon?: string;
}

export type SearchEngine = 'google' | 'baidu' | 'bing';

export type WallpaperEffect = 'none' | 'blur' | 'glass';

export interface AppSettings {
  timeFormat: '12' | '24';
  searchEngine: SearchEngine;
  wallpaperEffect: WallpaperEffect;
  isLocked: boolean;
  showWeather: boolean;
  manualLocation?: string;
  wallpaperRefreshInterval: number; // in hours, 0 = disabled (daily default)
  gridColumns: number;
  language: string; // Language code
}

