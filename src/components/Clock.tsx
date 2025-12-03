import React from 'react';
import { format } from 'date-fns';
import type { Locale } from 'date-fns';
import { enUS, zhCN, zhTW, es, ar, fr, de, ru, pt, it, tr, ko, hi, ja, vi } from 'date-fns/locale';
import { useTime } from '../hooks/useTime';
import { useTranslation } from '../i18n';
import styles from './Clock.module.css';

interface ClockProps {
    format24?: boolean;
}

// Map language codes to date-fns locales
const dateLocales: Record<string, Locale> = {
    'en': enUS,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'es': es,
    'ar': ar,
    'fr': fr,
    'de': de,
    'ru': ru,
    'pt': pt,
    'it': it,
    'tr': tr,
    'ko': ko,
    'hi': hi,
    'ja': ja,
    'vi': vi,
    // Fallback to English for languages not in date-fns
};

export const Clock: React.FC<ClockProps> = ({ format24 = true }) => {
    const time = useTime();
    const { language } = useTranslation();
    const locale = dateLocales[language] || enUS;

    return (
        <div className={styles.clockContainer}>
            <h1 className={styles.time}>
                {format(time, format24 ? 'HH:mm' : 'hh:mm a')}
            </h1>
            <p className={styles.date}>
                {format(time, language.startsWith('zh') ? 'MMMMdo EEEE' : 'EEEE, MMMM do', { locale })}
            </p>
        </div>
    );
};
