import type { Translation } from '../types';

export const en: Translation = {
    settings: {
        title: 'Settings',
        wallpaper: {
            title: 'Wallpaper Settings',
            effect: 'Effect',
            autoRefresh: 'Auto Refresh',
            effectNone: 'None',
            effectBlur: 'Blur',
            effectGlass: 'Glass',
            daily: 'Daily',
            every1Hour: 'Every 1 Hour',
            every6Hours: 'Every 6 Hours',
            every12Hours: 'Every 12 Hours',
            timeFormat: 'Time Format',
            format24: '24 Hours',
            format12: '12 Hours',
        },
        weather: {
            title: 'Weather Settings',
            showWeather: 'Show Weather',
            manualLocation: 'Manual Location (e.g. London)',
            apply: 'Apply',
        },
        layout: {
            title: 'Bookmark Layout',
            columns: 'Columns',
        },
        general: {
            title: 'General Settings',
            language: 'Language',
        },
        data: {
            title: 'Data Management',
            export: 'Export Config',
            import: 'Import Config',
        },
        close: 'Close',
        importSuccess: 'Configuration imported successfully! Refreshing...',
        importError: 'Failed to import configuration: Invalid JSON',
    },
    weather: {
        loading: 'Loading...',
        unavailable: 'Weather unavailable',
    },
    bookmarks: {
        add: 'Add Bookmark',
        edit: 'Edit Bookmark',
        title: 'Title',
        iconUrl: 'Icon URL',
        iconUrlOptional: 'Icon URL (Optional)',
        defaultIcon: 'Default',
        cancel: 'Cancel',
        save: 'Save',
        saving: '...',
    },
    search: {
        placeholder: 'Search...',
    },
    lock: {
        lock: 'Lock Layout',
        unlock: 'Unlock Layout',
    },
};
