import type { Translation } from '../types';

export const bn: Translation = {
    settings: {
        title: 'সেটিংস',
        wallpaper: {
            title: 'ওয়ালপেপার সেটিংস',
            effect: 'প্রভাব',
            autoRefresh: 'স্বয়ংক্রিয় রিফ্রেশ',
            effectNone: 'কোনটিই নয়',
            effectBlur: 'ঝাপসা',
            effectGlass: 'কাচ',
            daily: 'দৈনিক',
            every1Hour: 'প্রতি ঘণ্টা',
            every6Hours: 'প্রতি ৬ ঘণ্টা',
            every12Hours: 'প্রতি ১২ ঘণ্টা',
            timeFormat: 'সময় ফরম্যাট',
            format24: '২৪ ঘণ্টা',
            format12: '১২ ঘণ্টা',
        },
        weather: {
            title: 'আবহাওয়া সেটিংস',
            showWeather: 'আবহাওয়া দেখান',
            manualLocation: 'ম্যানুয়াল অবস্থান (যেমন Dhaka)',
            apply: 'প্রয়োগ করুন',
        },
        layout: {
            title: 'বুকমার্ক লেআউট',
            columns: 'কলাম',
        },
        general: {
            title: 'সাধারণ সেটিংস',
            language: 'ভাষা',
        },
        data: {
            title: 'ডেটা ব্যবস্থাপনা',
            export: 'কনফিগারেশন এক্সপোর্ট করুন',
            import: 'কনফিগারেশন ইম্পোর্ট করুন',
        },
        close: 'বন্ধ করুন',
        importSuccess: 'কনফিগারেশন সফলভাবে ইম্পোর্ট হয়েছে! রিফ্রেশ হচ্ছে...',
        importError: 'ইম্পোর্ট ব্যর্থ: অবৈধ JSON',
    },
    weather: {
        loading: 'লোড হচ্ছে...',
        unavailable: 'আবহাওয়া উপলব্ধ নয়',
    },
    bookmarks: {
        add: 'বুকমার্ক যোগ করুন',
        edit: 'বুকমার্ক সম্পাদনা করুন',
        title: 'শিরোনাম',
        iconUrl: 'আইকন URL',
        iconUrlOptional: 'আইকন URL (ঐচ্ছিক)',
        defaultIcon: 'ডিফল্ট',
        cancel: 'বাতিল',
        save: 'সংরক্ষণ',
        saving: '...',
    },
    search: {
        placeholder: 'অনুসন্ধান...',
    },
    lock: {
        lock: 'লেআউট লক করুন',
        unlock: 'লেআউট আনলক করুন',
    },
};
