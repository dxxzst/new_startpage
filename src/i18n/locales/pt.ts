import type { Translation } from '../types';

export const pt: Translation = {
    settings: {
        title: 'Configurações',
        wallpaper: {
            title: 'Configurações de papel de parede',
            effect: 'Efeito',
            autoRefresh: 'Atualização automática',
            effectNone: 'Nenhum',
            effectBlur: 'Desfoque',
            effectGlass: 'Vidro',
            daily: 'Diariamente',
            every1Hour: 'A cada hora',
            every6Hours: 'A cada 6 horas',
            every12Hours: 'A cada 12 horas',
            timeFormat: 'Formato de hora',
            format24: '24 horas',
            format12: '12 horas',
        },
        weather: {
            title: 'Configurações de clima',
            showWeather: 'Mostrar clima',
            manualLocation: 'Localização manual (ex. Lisboa)',
            apply: 'Aplicar',
        },
        layout: {
            title: 'Layout de favoritos',
            columns: 'Colunas',
        },
        general: {
            title: 'Configurações gerais',
            language: 'Idioma',
        },
        data: {
            title: 'Gerenciamento de dados',
            export: 'Exportar configuração',
            import: 'Importar configuração',
        },
        close: 'Fechar',
        importSuccess: 'Configuração importada com sucesso! Atualizando...',
        importError: 'Falha na importação: JSON inválido',
    },
    weather: {
        loading: 'Carregando...',
        unavailable: 'Clima indisponível',
    },
    bookmarks: {
        add: 'Adicionar favorito',
        edit: 'Editar favorito',
        title: 'Título',
        iconUrl: 'URL do ícone',
        iconUrlOptional: 'URL do ícone (opcional)',
        defaultIcon: 'Padrão',
        cancel: 'Cancelar',
        save: 'Salvar',
        saving: '...',
    },
    search: {
        placeholder: 'Pesquisar...',
    },
    lock: {
        lock: 'Bloquear layout',
        unlock: 'Desbloquear layout',
    },
};
