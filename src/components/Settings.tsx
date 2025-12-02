import React, { useState, useRef } from 'react';
import { FaCog, FaDownload, FaUpload } from 'react-icons/fa';
import styles from './Settings.module.css';

export const Settings: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleExport = () => {
        const data = {
            bookmarks: JSON.parse(localStorage.getItem('bookmarks') || '[]'),
            searchEngine: localStorage.getItem('searchEngine') || 'bing',
            // Add other settings here if needed
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'startpage-config.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target?.result as string);
                if (data.bookmarks) {
                    localStorage.setItem('bookmarks', JSON.stringify(data.bookmarks));
                }
                if (data.searchEngine) {
                    localStorage.setItem('searchEngine', data.searchEngine);
                }
                alert('Configuration imported successfully! Refreshing...');
                window.location.reload();
            } catch (error) {
                alert('Failed to import configuration: Invalid JSON');
            }
        };
        reader.readAsText(file);
    };

    return (
        <>
            <button className={styles.settingsBtn} onClick={() => setIsOpen(true)}>
                <FaCog />
            </button>

            {isOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <h2>Settings</h2>

                        <div className={styles.section}>
                            <h3>Data Management</h3>
                            <div className={styles.actions}>
                                <button className={styles.actionBtn} onClick={handleExport}>
                                    <FaDownload /> Export Config
                                </button>
                                <button className={styles.actionBtn} onClick={() => fileInputRef.current?.click()}>
                                    <FaUpload /> Import Config
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    accept=".json"
                                    onChange={handleImport}
                                />
                            </div>
                        </div>

                        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
