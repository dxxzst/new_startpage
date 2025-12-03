import type { Translation } from '../types';

export const tr: Translation = {
    settings: {
        title: 'Ayarlar',
        wallpaper: {
            title: 'Duvar Kağıdı Ayarları',
            effect: 'Efekt',
            autoRefresh: 'Otomatik Yenileme',
            effectNone: 'Yok',
            effectBlur: 'Bulanıklık',
            effectGlass: 'Cam',
            daily: 'Günlük',
            every1Hour: 'Her saat',
            every6Hours: 'Her 6 saat',
            every12Hours: 'Her 12 saat',
            timeFormat: 'Saat Formatı',
            format24: '24 Saat',
            format12: '12 Saat',
        },
        weather: {
            title: 'Hava Durumu Ayarları',
            showWeather: 'Hava Durumunu Göster',
            manualLocation: 'Manuel Konum (ör. Istanbul)',
            apply: 'Uygula',
        },
        layout: {
            title: 'Yer İmi Düzeni',
            columns: 'Sütunlar',
        },
        general: {
            title: 'Genel Ayarlar',
            language: 'Dil',
        },
        data: {
            title: 'Veri Yönetimi',
            export: 'Yapılandırmayı Dışa Aktar',
            import: 'Yapılandırmayı İçe Aktar',
        },
        close: 'Kapat',
        importSuccess: 'Yapılandırma başarıyla içe aktarıldı! Yenileniyor...',
        importError: 'İçe aktarma başarısız: Geçersiz JSON',
    },
    weather: {
        loading: 'Yükleniyor...',
        unavailable: 'Hava durumu kullanılamıyor',
    },
    bookmarks: {
        add: 'Yer İmi Ekle',
        edit: 'Yer İmini Düzenle',
        title: 'Başlık',
        iconUrl: 'Simge URL',
        iconUrlOptional: 'Simge URL (İsteğe bağlı)',
        defaultIcon: 'Varsayılan',
        cancel: 'İptal',
        save: 'Kaydet',
        saving: '...',
    },
    search: {
        placeholder: 'Ara...',
    },
    lock: {
        lock: 'Düzeni Kilitle',
        unlock: 'Düzeni Kilitlemeyi Kaldır',
    },
};
