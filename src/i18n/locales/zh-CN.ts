import type { Translation } from '../types';

export const zhCN: Translation = {
    settings: {
        title: '设置',
        wallpaper: {
            title: '壁纸设置',
            effect: '特效',
            autoRefresh: '自动刷新',
            effectNone: '无',
            effectBlur: '模糊',
            effectGlass: '毛玻璃',
            daily: '每天',
            every1Hour: '每1小时',
            every6Hours: '每6小时',
            every12Hours: '每12小时',
            timeFormat: '时间格式',
            format24: '24小时制',
            format12: '12小时制',
        },
        weather: {
            title: '天气设置',
            showWeather: '显示天气',
            manualLocation: '手动位置 (如: Beijing)',
            apply: '应用',
        },
        layout: {
            title: '书签布局设置',
            columns: '每行个数',
        },
        general: {
            title: '通用设置',
            language: '语言',
        },
        data: {
            title: '数据管理',
            export: '导出配置',
            import: '导入配置',
        },
        close: '关闭',
        importSuccess: '配置导入成功！正在刷新...',
        importError: '导入失败：无效的JSON文件',
    },
    weather: {
        loading: '加载中...',
        unavailable: '天气不可用',
    },
    bookmarks: {
        add: '添加书签',
        edit: '编辑书签',
        title: '标题',
        iconUrl: '图标 URL',
        iconUrlOptional: '图标 URL (可选)',
        defaultIcon: '默认',
        cancel: '取消',
        save: '保存',
        saving: '...',
    },
    search: {
        placeholder: '搜索...',
    },
    lock: {
        lock: '锁定布局',
        unlock: '解锁布局',
    },
};
