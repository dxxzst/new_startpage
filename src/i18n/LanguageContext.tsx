import { createContext, useContext, useState, type ReactNode } from 'react';
import type { LanguageCode, Translation } from './types';
import { detectBrowserLanguage, DEFAULT_LANGUAGE } from './languages';
import { en } from './locales/en';
import { zhCN } from './locales/zh-CN';
import { zhTW } from './locales/zh-TW';
import { es } from './locales/es';
import { ar } from './locales/ar';
import { fr } from './locales/fr';
import { fa } from './locales/fa';
import { de } from './locales/de';
import { ru } from './locales/ru';
import { ms } from './locales/ms';
import { pt } from './locales/pt';
import { it } from './locales/it';
import { tr } from './locales/tr';
import { kn } from './locales/kn';
import { ta } from './locales/ta';
import { ur } from './locales/ur';
import { ko } from './locales/ko';
import { hi } from './locales/hi';
import { bn } from './locales/bn';
import { ja } from './locales/ja';
import { vi } from './locales/vi';
import { te } from './locales/te';
import { mr } from './locales/mr';

// Translation map - all 23 languages
const translations: Record<LanguageCode, Translation> = {
    'en': en,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'es': es,
    'ar': ar,
    'fr': fr,
    'fa': fa,
    'de': de,
    'ru': ru,
    'ms': ms,
    'pt': pt,
    'it': it,
    'tr': tr,
    'kn': kn,
    'ta': ta,
    'ur': ur,
    'ko': ko,
    'hi': hi,
    'bn': bn,
    'ja': ja,
    'vi': vi,
    'te': te,
    'mr': mr,
};

interface LanguageContextType {
    language: LanguageCode;
    setLanguage: (lang: LanguageCode) => void;
    t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<LanguageCode>(() => {
        const saved = localStorage.getItem('language') as LanguageCode;
        if (saved && translations[saved]) return saved;
        return detectBrowserLanguage();
    });

    const setLanguage = (lang: LanguageCode) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = translations[language] || translations[DEFAULT_LANGUAGE];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within LanguageProvider');
    }
    return context;
}
