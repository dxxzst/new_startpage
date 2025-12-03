import type { Translation } from '../types';

export const de: Translation = {
    settings: {
        title: 'Einstellungen',
        wallpaper: {
            title: 'Hintergrund-Einstellungen',
            effect: 'Effekt',
            autoRefresh: 'Automatische Aktualisierung',
            effectNone: 'Keine',
            effectBlur: 'Unschärfe',
            effectGlass: 'Glas',
            daily: 'Täglich',
            every1Hour: 'Jede Stunde',
            every6Hours: 'Alle 6 Stunden',
            every12Hours: 'Alle 12 Stunden',
            timeFormat: 'Zeitformat',
            format24: '24 Stunden',
            format12: '12 Stunden',
        },
        weather: {
            title: 'Wetter-Einstellungen',
            showWeather: 'Wetter anzeigen',
            manualLocation: 'Manueller Standort (z.B. Berlin)',
            apply: 'Anwenden',
        },
        layout: {
            title: 'Lesezeichen-Layout',
            columns: 'Spalten',
        },
        general: {
            title: 'Allgemeine Einstellungen',
            language: 'Sprache',
        },
        data: {
            title: 'Datenverwaltung',
            export: 'Konfiguration exportieren',
            import: 'Konfiguration importieren',
        },
        close: 'Schließen',
        importSuccess: 'Konfiguration erfolgreich importiert! Wird aktualisiert...',
        importError: 'Import fehlgeschlagen: Ungültiges JSON',
    },
    weather: {
        loading: 'Wird geladen...',
        unavailable: 'Wetter nicht verfügbar',
    },
    bookmarks: {
        add: 'Lesezeichen hinzufügen',
        edit: 'Lesezeichen bearbeiten',
        title: 'Titel',
        iconUrl: 'Symbol-URL',
        iconUrlOptional: 'Symbol-URL (optional)',
        defaultIcon: 'Standard',
        cancel: 'Abbrechen',
        save: 'Speichern',
        saving: '...',
    },
    search: {
        placeholder: 'Suchen...',
    },
    lock: {
        lock: 'Layout sperren',
        unlock: 'Layout entsperren',
    },
};
