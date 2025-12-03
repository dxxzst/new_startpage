import type { LanguageCode, LanguageOption } from './types';

export const LANGUAGES: LanguageOption[] = [
    { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '简体中文' },
    { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '繁體中文' },
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'fa', name: 'Persian', nativeName: 'فارسی' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' },
    { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
    { code: 'ko', name: 'Korean', nativeName: '한국어' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export function detectBrowserLanguage(): LanguageCode {
    const browserLang = navigator.language.toLowerCase();

    // Check for exact match
    const exactMatch = LANGUAGES.find(lang => lang.code.toLowerCase() === browserLang);
    if (exactMatch) return exactMatch.code;

    // Check for language prefix match (e.g., 'zh' matches 'zh-CN')
    const langPrefix = browserLang.split('-')[0];
    const prefixMatch = LANGUAGES.find(lang => lang.code.toLowerCase().startsWith(langPrefix));
    if (prefixMatch) return prefixMatch.code;

    // Default to English
    return DEFAULT_LANGUAGE;
}
