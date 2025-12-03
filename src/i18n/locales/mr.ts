import type { Translation } from '../types';

export const mr: Translation = {
    settings: {
        title: 'सेटिंग्ज',
        wallpaper: {
            title: 'वॉलपेपर सेटिंग्ज',
            effect: 'प्रभाव',
            autoRefresh: 'ऑटो रीफ्रेश',
            effectNone: 'काहीही नाही',
            effectBlur: 'अस्पष्ट',
            effectGlass: 'काच',
            daily: 'दररोज',
            every1Hour: 'प्रत्येक तास',
            every6Hours: 'प्रत्येक 6 तास',
            every12Hours: 'प्रत्येक 12 तास',
            timeFormat: 'वेळ स्वरूप',
            format24: '24 तास',
            format12: '12 तास',
        },
        weather: {
            title: 'हवामान सेटिंग्ज',
            showWeather: 'हवामान दाखवा',
            manualLocation: 'मॅन्युअल स्थान (उदा. Mumbai)',
            apply: 'लागू करा',
        },
        layout: {
            title: 'बुकमार्क लेआउट',
            columns: 'स्तंभ',
        },
        general: {
            title: 'सामान्य सेटिंग्ज',
            language: 'भाषा',
        },
        data: {
            title: 'डेटा व्यवस्थापन',
            export: 'कॉन्फिगरेशन निर्यात करा',
            import: 'कॉन्फिगरेशन आयात करा',
        },
        close: 'बंद करा',
        importSuccess: 'कॉन्फिगरेशन यशस्वीरित्या आयात केले! रीफ्रेश होत आहे...',
        importError: 'आयात अयशस्वी: अवैध JSON',
    },
    weather: {
        loading: 'लोड होत आहे...',
        unavailable: 'हवामान उपलब्ध नाही',
    },
    bookmarks: {
        add: 'बुकमार्क जोडा',
        edit: 'बुकमार्क संपादित करा',
        title: 'शीर्षक',
        iconUrl: 'चिन्ह URL',
        iconUrlOptional: 'चिन्ह URL (पर्यायी)',
        defaultIcon: 'डीफॉल्ट',
        cancel: 'रद्द करा',
        save: 'जतन करा',
        saving: '...',
    },
    search: {
        placeholder: 'शोधा...',
    },
    lock: {
        lock: 'लेआउट लॉक करा',
        unlock: 'लेआउट अनलॉक करा',
    },
};
