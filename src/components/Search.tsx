import React, { useState, useEffect, useRef } from 'react';
import type { SearchEngine } from '../types';
import { FaGoogle, FaSearch, FaWindows } from 'react-icons/fa';
import { SiBaidu } from 'react-icons/si';
import { IoMdArrowDropdown } from 'react-icons/io';
import styles from './Search.module.css';

const ENGINES: Record<SearchEngine, { url: string; icon: React.ReactNode; name: string }> = {
    google: { url: 'https://www.google.com/search?q=', icon: <FaGoogle />, name: 'Google' },
    baidu: { url: 'https://www.baidu.com/s?wd=', icon: <SiBaidu />, name: 'Baidu' },
    bing: { url: 'https://www.bing.com/search?q=', icon: <FaWindows />, name: 'Bing' },
};

export const Search: React.FC = () => {
    const [query, setQuery] = useState('');
    const [engine, setEngine] = useState<SearchEngine>('bing');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedEngine = localStorage.getItem('searchEngine') as SearchEngine;
        if (savedEngine && ENGINES[savedEngine]) {
            setEngine(savedEngine);
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        window.location.href = ENGINES[engine].url + encodeURIComponent(query);
    };

    const handleEngineSelect = (newEngine: SearchEngine) => {
        setEngine(newEngine);
        localStorage.setItem('searchEngine', newEngine);
        setIsDropdownOpen(false);
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSearch}>
            <div className={styles.engineSelector} ref={dropdownRef}>
                <div
                    className={styles.selectedEngine}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {ENGINES[engine].icon}
                    <IoMdArrowDropdown className={styles.arrow} />
                </div>

                {isDropdownOpen && (
                    <div className={styles.dropdown}>
                        {(Object.keys(ENGINES) as SearchEngine[]).map((key) => (
                            <div
                                key={key}
                                className={styles.dropdownItem}
                                onClick={() => handleEngineSelect(key)}
                            >
                                <span className={styles.itemIcon}>{ENGINES[key].icon}</span>
                                <span>{ENGINES[key].name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={navigator.language.startsWith('zh') ? "搜索..." : "Search..."}
                className={styles.input}
                autoFocus
            />
            <button type="submit" className={styles.button}>
                <FaSearch />
            </button>
        </form>
    );
};
