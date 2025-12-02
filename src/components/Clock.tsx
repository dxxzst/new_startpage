import React from 'react';
import { format } from 'date-fns';
import { enUS, zhCN } from 'date-fns/locale';
import { useTime } from '../hooks/useTime';
import styles from './Clock.module.css';

interface ClockProps {
    format24?: boolean;
}

export const Clock: React.FC<ClockProps> = ({ format24 = true }) => {
    const time = useTime();
    const isZh = navigator.language.startsWith('zh');
    const locale = isZh ? zhCN : enUS;

    return (
        <div className={styles.clockContainer}>
            <h1 className={styles.time}>
                {format(time, format24 ? 'HH:mm' : 'hh:mm a')}
            </h1>
            <p className={styles.date}>
                {format(time, isZh ? 'MMMMdo EEEE' : 'EEEE, MMMM do', { locale })}
            </p>
        </div>
    );
};
