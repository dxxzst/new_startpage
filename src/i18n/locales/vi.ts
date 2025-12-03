import type { Translation } from '../types';

export const vi: Translation = {
    settings: {
        title: 'Cài đặt',
        wallpaper: {
            title: 'Cài đặt hình nền',
            effect: 'Hiệu ứng',
            autoRefresh: 'Tự động làm mới',
            effectNone: 'Không có',
            effectBlur: 'Mờ',
            effectGlass: 'Thủy tinh',
            daily: 'Hàng ngày',
            every1Hour: 'Mỗi giờ',
            every6Hours: 'Mỗi 6 giờ',
            every12Hours: 'Mỗi 12 giờ',
            timeFormat: 'Định dạng thời gian',
            format24: '24 giờ',
            format12: '12 giờ',
        },
        weather: {
            title: 'Cài đặt thời tiết',
            showWeather: 'Hiển thị thời tiết',
            manualLocation: 'Vị trí thủ công (vd. Hanoi)',
            apply: 'Áp dụng',
        },
        layout: {
            title: 'Bố cục bookmark',
            columns: 'Cột',
        },
        general: {
            title: 'Cài đặt chung',
            language: 'Ngôn ngữ',
        },
        data: {
            title: 'Quản lý dữ liệu',
            export: 'Xuất cấu hình',
            import: 'Nhập cấu hình',
        },
        close: 'Đóng',
        importSuccess: 'Nhập cấu hình thành công! Đang làm mới...',
        importError: 'Nhập thất bại: JSON không hợp lệ',
    },
    weather: {
        loading: 'Đang tải...',
        unavailable: 'Thời tiết không khả dụng',
    },
    bookmarks: {
        add: 'Thêm bookmark',
        edit: 'Chỉnh sửa bookmark',
        title: 'Tiêu đề',
        iconUrl: 'URL biểu tượng',
        iconUrlOptional: 'URL biểu tượng (Tùy chọn)',
        defaultIcon: 'Mặc định',
        cancel: 'Hủy',
        save: 'Lưu',
        saving: '...',
    },
    search: {
        placeholder: 'Tìm kiếm...',
    },
    lock: {
        lock: 'Khóa bố cục',
        unlock: 'Mở khóa bố cục',
    },
};
