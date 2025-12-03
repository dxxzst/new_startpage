import type { Translation } from '../types';

export const ko: Translation = {
    settings: {
        title: '설정',
        wallpaper: {
            title: '배경화면 설정',
            effect: '효과',
            autoRefresh: '자동 새로고침',
            effectNone: '없음',
            effectBlur: '흐림',
            effectGlass: '유리',
            daily: '매일',
            every1Hour: '1시간마다',
            every6Hours: '6시간마다',
            every12Hours: '12시간마다',
            timeFormat: '시간 형식',
            format24: '24시간',
            format12: '12시간',
        },
        weather: {
            title: '날씨 설정',
            showWeather: '날씨 표시',
            manualLocation: '수동 위치 (예: Seoul)',
            apply: '적용',
        },
        layout: {
            title: '북마크 레이아웃',
            columns: '열',
        },
        general: {
            title: '일반 설정',
            language: '언어',
        },
        data: {
            title: '데이터 관리',
            export: '설정 내보내기',
            import: '설정 가져오기',
        },
        close: '닫기',
        importSuccess: '설정을 성공적으로 가져왔습니다! 새로고침 중...',
        importError: '가져오기 실패: 잘못된 JSON',
    },
    weather: {
        loading: '로딩 중...',
        unavailable: '날씨 정보 없음',
    },
    bookmarks: {
        add: '북마크 추가',
        edit: '북마크 편집',
        title: '제목',
        iconUrl: '아이콘 URL',
        iconUrlOptional: '아이콘 URL (선택사항)',
        defaultIcon: '기본값',
        cancel: '취소',
        save: '저장',
        saving: '...',
    },
    search: {
        placeholder: '검색...',
    },
    lock: {
        lock: '레이아웃 잠금',
        unlock: '레이아웃 잠금 해제',
    },
};
