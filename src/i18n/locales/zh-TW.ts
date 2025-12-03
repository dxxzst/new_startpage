import type { Translation } from '../types';

export const zhTW: Translation = {
    settings: {
        title: '設置',
        wallpaper: {
            title: '壁紙設置',
            effect: '特效',
            autoRefresh: '自動刷新',
            effectNone: '無',
            effectBlur: '模糊',
            effectGlass: '毛玻璃',
            daily: '每天',
            every1Hour: '每1小時',
            every6Hours: '每6小時',
            every12Hours: '每12小時',
            timeFormat: '時間格式',
            format24: '24小時制',
            format12: '12小時制',
        },
        weather: {
            title: '天氣設置',
            showWeather: '顯示天氣',
            manualLocation: '手動位置 (如: Taipei)',
            apply: '應用',
        },
        layout: {
            title: '書籤布局設置',
            columns: '每行個數',
        },
        general: {
            title: '通用設置',
            language: '語言',
        },
        data: {
            title: '數據管理',
            export: '導出配置',
            import: '導入配置',
        },
        close: '關閉',
        importSuccess: '配置導入成功！正在刷新...',
        importError: '導入失敗：無效的JSON文件',
    },
    weather: {
        loading: '加載中...',
        unavailable: '天氣不可用',
    },
    bookmarks: {
        add: '添加書籤',
        edit: '編輯書籤',
        title: '標題',
        iconUrl: '圖標 URL',
        iconUrlOptional: '圖標 URL (可選)',
        defaultIcon: '  默認',
        cancel: '取消',
        save: '保存',
        saving: '...',
    },
    search: {
        placeholder: '搜索...',
    },
    lock: {
        lock: '鎖定布局',
        unlock: '解鎖布局',
    },
};
