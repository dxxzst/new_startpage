import axios from 'axios';
import type { Wallpaper } from '../types';

export const fetchBingWallpaper = async (index: number = 0): Promise<Wallpaper> => {
    try {
        // Bing Image Archive API
        // idx: 0 = today, 1 = yesterday, etc. (up to 7)
        // n: number of images
        const response = await axios.get(`https://www.bing.com/HPImageArchive.aspx?format=js&idx=${index}&n=1&mkt=en-US`);
        const image = response.data.images[0];
        const url = `https://www.bing.com${image.url}`;
        const copyright = image.copyright;
        const date = image.enddate;

        return {
            url,
            copyright,
            date,
        };
    } catch (error) {
        console.error('Failed to fetch Bing wallpaper:', error);
        // Fallback wallpaper
        return {
            url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop',
            copyright: 'Default Wallpaper',
            date: new Date().toISOString().split('T')[0].replace(/-/g, ''),
        };
    }
};
