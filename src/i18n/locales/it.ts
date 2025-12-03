import type { Translation } from '../types';

export const it: Translation = {
    settings: {
        title: 'Impostazioni',
        wallpaper: {
            title: 'Impostazioni sfondo',
            effect: 'Effetto',
            autoRefresh: 'Aggiornamento automatico',
            effectNone: 'Nessuno',
            effectBlur: 'Sfocatura',
            effectGlass: 'Vetro',
            daily: 'Giornaliero',
            every1Hour: 'Ogni ora',
            every6Hours: 'Ogni 6 ore',
            every12Hours: 'Ogni 12 ore',
            timeFormat: 'Formato ora',
            format24: '24 ore',
            format12: '12 ore',
        },
        weather: {
            title: 'Impostazioni meteo',
            showWeather: 'Mostra meteo',
            manualLocation: 'Posizione manuale (es. Roma)',
            apply: 'Applica',
        },
        layout: {
            title: 'Layout segnalibri',
            columns: 'Colonne',
        },
        general: {
            title: 'Impostazioni generali',
            language: 'Lingua',
        },
        data: {
            title: 'Gestione dati',
            export: 'Esporta configurazione',
            import: 'Importa configurazione',
        },
        close: 'Chiudi',
        importSuccess: 'Configurazione importata con successo! Aggiornamento...',
        importError: 'Importazione fallita: JSON non valido',
    },
    weather: {
        loading: 'Caricamento...',
        unavailable: 'Meteo non disponibile',
    },
    bookmarks: {
        add: 'Aggiungi segnalibro',
        edit: 'Modifica segnalibro',
        title: 'Titolo',
        iconUrl: 'URL icona',
        iconUrlOptional: 'URL icona (facoltativo)',
        defaultIcon: 'Predefinito',
        cancel: 'Annulla',
        save: 'Salva',
        saving: '...',
    },
    search: {
        placeholder: 'Cerca...',
    },
    lock: {
        lock: 'Blocca layout',
        unlock: 'Sblocca layout',
    },
};
