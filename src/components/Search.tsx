import React, { useState, useEffect } from 'react';
import type { SearchEngine } from '../types';
import { FaGoogle, FaSearch, FaWindows } from 'react-icons/fa';
import { SiBaidu } from 'react-icons/si';
import styles from './Search.module.css';

const ENGINES: Record<SearchEngine, { url: string; icon: React.ReactNode }> = {
    google: { url: 'https://www.google.com/search?q=', icon: <FaGoogle /> },
    baidu: { url: 'https://www.baidu.com/s?wd=', icon: <SiBaidu /> },
    bing: { url: 'https://www.bing.com/search?q=', icon: <FaWindows /> },
};

export const Search: React.FC = () => {
    const [query, setQuery] = useState('');
    const [engine, setEngine] = useState<SearchEngine>('bing');

    useEffect(() => {
        const savedEngine = localStorage.getItem('searchEngine') as SearchEngine;
        if (savedEngine && ENGINES[savedEngine]) {
            setEngine(savedEngine);
        }
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        window.location.href = ENGINES[engine].url + encodeURIComponent(query);
    };

    const handleEngineChange = (newEngine: SearchEngine) => {
        setEngine(newEngine);
        localStorage.setItem('searchEngine', newEngine);
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSearch}>
            <div className={styles.engineSelector}>
                {ENGINES[engine].icon}
                <select
                    value={engine}
                    onChange={(e) => handleEngineChange(e.target.value as SearchEngine)}
                    className={styles.select}
                >
                    <option value="google">Google</option>
                    <option value="baidu">Baidu</option>
                    <option value="bing">Bing</option>
                </select>
            </div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className={styles.input}
                autoFocus
            />
            <button type="submit" className={styles.button}>
                <FaSearch />
            </button>
        </form>
    );
};
