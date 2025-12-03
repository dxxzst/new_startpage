import type { Translation } from '../types';

export const hi: Translation = {
    settings: {
        title: 'सेटिंग्स',
        wallpaper: {
            title: 'वॉलपेपर सेटिंग्स',
            effect: 'प्रभाव',
            autoRefresh: 'स्वतः रिफ्रेश',
            effectNone: 'कोई नहीं',
            effectBlur: 'धुंधला',
            effectGlass: 'कांच',
            daily: 'दैनिक',
            every1Hour: 'हर घंटे',
            every6Hours: 'हर 6 घंटे',
            every12Hours: 'हर 12 घंटे',
            timeFormat: 'समय प्रारूप',
            format24: '24 घंटे',
            format12: '12 घंटे',
        },
        weather: {
            title: 'मौसम सेटिंग्स',
            showWeather: 'मौसम दिखाएं',
            manualLocation: 'मैन्युअल स्थान (जैसे Delhi)',
            apply: 'लागू करें',
        },
        layout: {
            title: 'बुकमार्क लेआउट',
            columns: 'स्तंभ',
        },
        general: {
            title: 'सामान्य सेटिंग्स',
            language: 'भाषा',
        },
        data: {
            title: 'डेटा प्रबंधन',
            export: 'कॉन्फ़िगरेशन निर्यात करें',
            import: 'कॉन्फ़िगरेशन आयात करें',
        },
        close: 'बंद करें',
        importSuccess: 'कॉन्फ़िगरेशन सफलतापूर्वक आयात किया गया! रिफ्रेश हो रहा है...',
        importError: 'आयात विफल: अमान्य JSON',
    },
    weather: {
        loading: 'लोड हो रहा है...',
        unavailable: 'मौसम उपलब्ध नहीं',
    },
    bookmarks: {
        add: 'बुकमार्क जोड़ें',
        edit: 'बुकमार्क संपादित करें',
        title: 'शीर्षक',
        iconUrl: 'आइकन URL',
        iconUrlOptional: 'आइकन URL (वैकल्पिक)',
        defaultIcon: 'डिफ़ॉल्ट',
        cancel: 'रद्द करें',
        save: 'सहेजें',
        saving: '...',
    },
    search: {
        placeholder: 'खोजें...',
    },
    lock: {
        lock: 'लेआउट लॉक करें',
        unlock: 'लेआउट अनलॉक करें',
    },
};
