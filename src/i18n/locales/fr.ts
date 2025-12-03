import type { Translation } from '../types';

export const fr: Translation = {
    settings: {
        title: 'Paramètres',
        wallpaper: {
            title: 'Paramètres du fond d\'écran',
            effect: 'Effet',
            autoRefresh: 'Actualisation automatique',
            effectNone: 'Aucun',
            effectBlur: 'Flou',
            effectGlass: 'Verre',
            daily: 'Quotidien',
            every1Hour: 'Toutes les heures',
            every6Hours: 'Toutes les 6 heures',
            every12Hours: 'Toutes les 12 heures',
            timeFormat: 'Format d\'heure',
            format24: '24 heures',
            format12: '12 heures',
        },
        weather: {
            title: 'Paramètres météo',
            showWeather: 'Afficher la météo',
            manualLocation: 'Emplacement manuel (ex. Paris)',
            apply: 'Appliquer',
        },
        layout: {
            title: 'Disposition des signets',
            columns: 'Colonnes',
        },
        general: {
            title: 'Paramètres généraux',
            language: 'Langue',
        },
        data: {
            title: 'Gestion des données',
            export: 'Exporter la configuration',
            import: 'Importer la configuration',
        },
        close: 'Fermer',
        importSuccess: 'Configuration importée avec succès! Actualisation...',
        importError: 'Échec de l\'importation: JSON invalide',
    },
    weather: {
        loading: 'Chargement...',
        unavailable: 'Météo indisponible',
    },
    bookmarks: {
        add: 'Ajouter un signet',
        edit: 'Modifier le signet',
        title: 'Titre',
        iconUrl: 'URL de l\'icône',
        iconUrlOptional: 'URL de l\'icône (facultatif)',
        defaultIcon: 'Par défaut',
        cancel: 'Annuler',
        save: 'Enregistrer',
        saving: '...',
    },
    search: {
        placeholder: 'Rechercher...',
    },
    lock: {
        lock: 'Verrouiller la disposition',
        unlock: 'Déverrouiller la disposition',
    },
};
