import axios from 'axios';
import type { Wallpaper } from '../types';

const BING_API_URL = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN';
// const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'; // Fallback or use a dedicated proxy if needed

export const fetchBingWallpaper = async (): Promise<Wallpaper> => {
    try {
        // In a Chrome Extension, we might be able to bypass CORS if permissions are set correctly in manifest.json
        // However, fetch might still be blocked by CORB/CORS in content scripts or some contexts.
        // For a new tab page, it usually behaves like a web page.

        const response = await axios.get(BING_API_URL);
        const image = response.data.images[0];
        const fullUrl = `https://www.bing.com${image.url}`;

        return {
            url: fullUrl,
            copyright: image.copyright,
            date: image.startdate
        };
    } catch (error) {
        console.error('Failed to fetch Bing wallpaper:', error);
        // Return a default wallpaper or throw
        return {
            url: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=1920&q=80',
            copyright: 'Default Wallpaper',
            date: new Date().toISOString()
        };
    }
};
