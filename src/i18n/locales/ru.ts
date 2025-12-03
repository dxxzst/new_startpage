import type { Translation } from '../types';

export const ru: Translation = {
    settings: {
        title: 'Настройки',
        wallpaper: {
            title: 'Настройки обоев',
            effect: 'Эффект',
            autoRefresh: 'Автообновление',
            effectNone: 'Нет',
            effectBlur: 'Размытие',
            effectGlass: 'Стекло',
            daily: 'Ежедневно',
            every1Hour: 'Каждый час',
            every6Hours: 'Каждые 6 часов',
            every12Hours: 'Каждые 12 часов',
            timeFormat: 'Формат времени',
            format24: '24 часа',
            format12: '12 часов',
        },
        weather: {
            title: 'Настройки погоды',
            showWeather: 'Показать погоду',
            manualLocation: 'Ручное местоположение (напр. Moscow)',
            apply: 'Применить',
        },
        layout: {
            title: 'Макет закладок',
            columns: 'Столбцы',
        },
        general: {
            title: 'Общие настройки',
            language: 'Язык',
        },
        data: {
            title: 'Управление данными',
            export: 'Экспорт конфигурации',
            import: 'Импорт конфигурации',
        },
        close: 'Закрыть',
        importSuccess: 'Конфигурация успешно импортирована! Обновление...',
        importError: 'Ошибка импорта: Неверный JSON',
    },
    weather: {
        loading: 'Загрузка...',
        unavailable: 'Погода недоступна',
    },
    bookmarks: {
        add: 'Добавить закладку',
        edit: 'Редактировать закладку',
        title: 'Название',
        iconUrl: 'URL иконки',
        iconUrlOptional: 'URL иконки (необязательно)',
        defaultIcon: 'По умолчанию',
        cancel: 'Отмена',
        save: 'Сохранить',
        saving: '...',
    },
    search: {
        placeholder: 'Поиск...',
    },
    lock: {
        lock: 'Заблокировать макет',
        unlock: 'Разблокировать макет',
    },
};
