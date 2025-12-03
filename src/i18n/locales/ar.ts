import type { Translation } from '../types';

export const ar: Translation = {
    settings: {
        title: 'الإعدادات',
        wallpaper: {
            title: 'إعدادات الخلفية',
            effect: 'التأثير',
            autoRefresh: 'التحديث التلقائي',
            effectNone: 'لا شيء',
            effectBlur: 'ضبابية',
            effectGlass: 'زجاج',
            daily: 'يومي',
            every1Hour: 'كل ساعة',
            every6Hours: 'كل 6 ساعات',
            every12Hours: 'كل 12 ساعة',
            timeFormat: 'تنسیق الوقت',
            format24: '24 ساعة',
            format12: '12 ساعة',
        },
        weather: {
            title: 'إعدادات الطقس',
            showWeather: 'عرض الطقس',
            manualLocation: 'الموقع اليدوي (مثل Dubai)',
            apply: 'تطبيق',
        },
        layout: {
            title: 'تخطيط الإشارات المرجعية',
            columns: 'الأعمدة',
        },
        general: {
            title: 'الإعدادات العامة',
            language: 'اللغة',
        },
        data: {
            title: 'إدارة البيانات',
            export: 'تصدير التكوين',
            import: 'استيراد التكوين',
        },
        close: 'إغلاق',
        importSuccess: 'تم استيراد التكوين بنجاح! جارٍ التحديث...',
        importError: 'فشل الاستيراد: JSON غير صالح',
    },
    weather: {
        loading: 'جارٍ التحميل...',
        unavailable: 'الطقس غير متاح',
    },
    bookmarks: {
        add: 'إضافة إشارة مرجعية',
        edit: 'تحرير الإشارة المرجعية',
        title: 'العنوان',
        iconUrl: 'رابط الأيقونة',
        iconUrlOptional: 'رابط الأيقونة (اختياري)',
        defaultIcon: 'افتراضي',
        cancel: 'إلغاء',
        save: 'حفظ',
        saving: '...',
    },
    search: {
        placeholder: 'بحث...',
    },
    lock: {
        lock: 'قفل التخطيط',
        unlock: 'فتح التخطيط',
    },
};
