import type { Translation } from '../types';

export const es: Translation = {
    settings: {
        title: 'Configuración',
        wallpaper: {
            title: 'Configuración de fondo',
            effect: 'Efecto',
            autoRefresh: 'Actualización automática',
            effectNone: 'Ninguno',
            effectBlur: 'Desenfoque',
            effectGlass: 'Vidrio',
            daily: 'Diario',
            every1Hour: 'Cada 1 hora',
            every6Hours: 'Cada 6 horas',
            every12Hours: 'Cada 12 horas',
            timeFormat: 'Formato de hora',
            format24: '24 horas',
            format12: '12 horas',
        },
        weather: {
            title: 'Configuración del clima',
            showWeather: 'Mostrar clima',
            manualLocation: 'Ubicación manual (ej. Madrid)',
            apply: 'Aplicar',
        },
        layout: {
            title: 'Diseño de marcadores',
            columns: 'Columnas',
        },
        general: {
            title: 'Configuración general',
            language: 'Idioma',
        },
        data: {
            title: 'Gestión de datos',
            export: 'Exportar configuración',
            import: 'Importar configuración',
        },
        close: 'Cerrar',
        importSuccess: '¡Configuración importada con éxito! Actualizando...',
        importError: 'Error al importar: JSON no válido',
    },
    weather: {
        loading: 'Cargando...',
        unavailable: 'Clima no disponible',
    },
    bookmarks: {
        add: 'Agregar marcador',
        edit: 'Editar marcador',
        title: 'Título',
        iconUrl: 'URL del icono',
        iconUrlOptional: 'URL del icono (opcional)',
        defaultIcon: 'Predeterminado',
        cancel: 'Cancelar',
        save: 'Guardar',
        saving: '...',
    },
    search: {
        placeholder: 'Buscar...',
    },
    lock: {
        lock: 'Bloquear diseño',
        unlock: 'Desbloquear diseño',
    },
};
