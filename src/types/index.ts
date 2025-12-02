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
}

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  icon?: string;
}

export type SearchEngine = 'google' | 'baidu' | 'bing';

export interface AppSettings {
  timeFormat: '12' | '24';
  searchEngine: SearchEngine;
  location?: {
    lat: number;
    lon: number;
    city: string;
  };
}
