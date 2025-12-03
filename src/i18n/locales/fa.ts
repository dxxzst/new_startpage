import type { Translation } from '../types';

export const fa: Translation = {
    settings: {
        title: 'تنظیمات',
        wallpaper: {
            title: 'تنظیمات پس‌زمینه',
            effect: 'جلوه',
            autoRefresh: 'به‌روزرسانی خودکار',
            effectNone: 'هیچ',
            effectBlur: 'تار',
            effectGlass: 'شیشه',
            daily: 'روزانه',
            every1Hour: 'هر ساعت',
            every6Hours: 'هر 6 ساعت',
            every12Hours: 'هر 12 ساعت',
            timeFormat: 'فرمت زمان',
            format24: '24 ساعته',
            format12: '12 ساعته',
        },
        weather: {
            title: 'تنظیمات آب‌و‌هوا',
            showWeather: 'نمایش آب‌و‌هوا',
            manualLocation: 'موقعیت دستی (مثلا Tehran)',
            apply: 'اعمال',
        },
        layout: {
            title: 'چیدمان نشانک‌ها',
            columns: 'ستون‌ها',
        },
        general: {
            title: 'تنظیمات عمومی',
            language: 'زبان',
        },
        data: {
            title: 'مدیریت داده',
            export: 'صدور پیکربندی',
            import: 'وارد کردن پیکربندی',
        },
        close: 'بستن',
        importSuccess: 'پیکربندی با موفقیت وارد شد! در حال به‌روزرسانی...',
        importError: 'وارد کردن ناموفق: JSON نامعتبر',
    },
    weather: {
        loading: 'در حال بارگذاری...',
        unavailable: 'آب‌و‌هوا در دسترس نیست',
    },
    bookmarks: {
        add: 'افزودن نشانک',
        edit: 'ویرایش نشانک',
        title: 'عنوان',
        iconUrl: 'آدرس نماد',
        iconUrlOptional: 'آدرس نماد (اختیاری)',
        defaultIcon: 'پیش‌فرض',
        cancel: 'لغو',
        save: 'ذخیره',
        saving: '...',
    },
    search: {
        placeholder: 'جستجو...',
    },
    lock: {
        lock: 'قفل کردن چیدمان',
        unlock: 'باز کردن قفل چیدمان',
    },
};
