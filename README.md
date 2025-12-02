# Chrome 新标签页扩展 (New Tab Start Page)

这是一个基于 **Vite + React + TypeScript** 开发的 Chrome 浏览器扩展，旨在替换默认的新标签页，提供美观、高效的起始页体验。

## ✨ 主要功能

-   **🌅 每日壁纸**: 自动获取 Bing 每日精选图片作为背景，支持缓存。
-   **⏰ 实时时钟**: 页面中央显示当前时间与日期，支持 12/24 小时制切换。
-   **🌤️ 天气组件**: 基于您的地理位置展示实时天气和温度 (使用 Open-Meteo API)。
-   **🔍 多引擎搜索**: 内置 Google, Baidu, Bing 搜索引擎，可随时切换并保存偏好。
-   **🔖 书签管理**: 
    -   网格化展示常用网站 (Speed Dial)。
    -   支持添加、删除书签。
    -   **拖拽排序**: 长按书签即可拖拽调整顺序。
-   **⚙️ 数据管理**: 支持将所有设置和书签导出为 JSON 文件进行备份或迁移。
-   **🎨 现代设计**: 采用 Glassmorphism (毛玻璃) 风格，界面简洁美观。

## 🚀 开发指南

### 环境要求
-   Node.js (推荐 v16+)
-   npm 或 yarn

### 安装依赖
```bash
npm install
```

### 启动开发服务器
如果您想在浏览器中以普通网页形式调试 UI：
```bash
npm run dev
```

### 构建扩展
构建生产环境代码，输出到 `dist` 目录：
```bash
npm run build
```

## 📦 安装到 Chrome

1.  运行 `npm run build` 生成 `dist` 目录。
2.  打开 Chrome 浏览器，在地址栏输入 `chrome://extensions` 并回车。
3.  在页面右上角开启 **"开发者模式" (Developer mode)**。
4.  点击左上角的 **"加载已解压的扩展程序" (Load unpacked)** 按钮。
5.  选择本项目根目录下的 `dist` 文件夹。
6.  安装完成后，打开一个新的标签页 (New Tab)，即可看到效果。

## 🛠️ 技术栈

-   [Vite](https://vitejs.dev/) - 下一代前端构建工具
-   [React](https://reactjs.org/) - 用于构建用户界面的 JavaScript 库
-   [TypeScript](https://www.typescriptlang.org/) -以此获得更好的开发体验和代码质量
-   [dnd-kit](https://dndkit.com/) - 轻量级、高性能的拖拽库
-   [Open-Meteo](https://open-meteo.com/) - 免费的天气 API

## 📝 注意事项

-   **天气定位**: 首次打开时，浏览器会询问是否允许获取位置信息，请选择“允许”以显示当地天气。
-   **壁纸缓存**: 每日壁纸会缓存一天，如需强制刷新，可清除浏览器缓存或 LocalStorage。

---

**Enjoy your new start page!**
