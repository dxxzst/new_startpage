import type { Translation } from '../types';

export const ja: Translation = {
    settings: {
        title: '設定',
        wallpaper: {
            title: '壁紙設定',
            effect: 'エフェクト',
            autoRefresh: '自動更新',
            effectNone: 'なし',
            effectBlur: 'ぼかし',
            effectGlass: 'ガラス',
            daily: '毎日',
            every1Hour: '1時間ごと',
            every6Hours: '6時間ごと',
            every12Hours: '12時間ごと',
            timeFormat: '時刻形式',
            format24: '24時間',
            format12: '12時間',
        },
        weather: {
            title: '天気設定',
            showWeather: '天気を表示',
            manualLocation: '手動位置 (例: Tokyo)',
            apply: '適用',
        },
        layout: {
            title: 'ブックマークレイアウト',
            columns: '列',
        },
        general: {
            title: '一般設定',
            language: '言語',
        },
        data: {
            title: 'データ管理',
            export: '設定をエクスポート',
            import: '設定をインポート',
        },
        close: '閉じる',
        importSuccess: '設定のインポートに成功しました！更新中...',
        importError: 'インポート失敗: 無効なJSON',
    },
    weather: {
        loading: '読み込み中...',
        unavailable: '天気情報が利用できません',
    },
    bookmarks: {
        add: 'ブックマークを追加',
        edit: 'ブックマークを編集',
        title: 'タイトル',
        iconUrl: 'アイコンURL',
        iconUrlOptional: 'アイコンURL (オプション)',
        defaultIcon: 'デフォルト',
        cancel: 'キャンセル',
        save: '保存',
        saving: '...',
    },
    search: {
        placeholder: '検索...',
    },
    lock: {
        lock: 'レイアウトをロック',
        unlock: 'レイアウトをロック解除',
    },
};
