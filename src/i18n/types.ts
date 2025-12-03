export type LanguageCode =
    | 'zh-CN' // 简体中文
    | 'zh-TW' // 繁體中文
    | 'en'    // English
    | 'es'    // Español
    | 'ar'    // العربية
    | 'fr'    // Français
    | 'fa'    // فارسی
    | 'de'    // Deutsch
    | 'ru'    // Русский
    | 'ms'    // Bahasa Melayu
    | 'pt'    // Português
    | 'it'    // Italiano
    | 'tr'    // Türkçe
    | 'kn'    // ಕನ್ನಡ (Kannada)
    | 'ta'    // தமிழ் (Tamil)
    | 'ur'    // اردو (Urdu)
    | 'ko'    // 한국어 (Korean)
    | 'hi'    // हिन्दी (Hindi)
    | 'bn'    // বাংলা (Bengali)
    | 'ja'    // 日本語 (Japanese)
    | 'vi'    // Tiếng Việt (Vietnamese)
    | 'te'    // తెలుగు (Telugu)
    | 'mr';   // मराठी (Marathi)

export interface LanguageOption {
    code: LanguageCode;
    name: string;
    nativeName: string;
}

export interface Translation {
    settings: {
        title: string;
        wallpaper: {
            title: string;
            effect: string;
            autoRefresh: string;
            effectNone: string;
            effectBlur: string;
            effectGlass: string;
            daily: string;
            every1Hour: string;
            every6Hours: string;
            every12Hours: string;
            timeFormat: string;
            format24: string;
            format12: string;
        };
        weather: {
            title: string;
            showWeather: string;
            manualLocation: string;
            apply: string;
        };
        layout: {
            title: string;
            columns: string;
        };
        general: {
            title: string;
            language: string;
        };
        data: {
            title: string;
            export: string;
            import: string;
        };
        close: string;
        importSuccess: string;
        importError: string;
    };
    weather: {
        loading: string;
        unavailable: string;
    };
    bookmarks: {
        add: string;
        edit: string;
        title: string;
        iconUrl: string;
        iconUrlOptional: string;
        defaultIcon: string;
        cancel: string;
        save: string;
        saving: string;
    };
    search: {
        placeholder: string;
    };
    lock: {
        lock: string;
        unlock: string;
    };
}
