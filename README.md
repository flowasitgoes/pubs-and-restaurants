# 🍽️ Pubs & Restaurant伺服器

這是一個Node.js Express伺服器，用於託管5個不同的餐廳網站模板，每個模板都有自己的路由。

## 📁 項目結構

```
5-to-1/
├── buri-master/          # Buri 餐廳模板
├── flatter-master/       # Flatter 餐廳模板  
├── foody-master/         # Foody 餐廳模板
├── kusina-master/        # Kusina 餐廳模板
├── tasteit-master/       # Tasteit 餐廳模板
├── public/               # 靜態資源資料夾
│   └── favicon.ico       # 網站圖標
├── server.js             # 主伺服器文件
├── package.json          # 項目依賴配置
├── vercel.json           # Vercel 部署配置
└── README.md            # 項目說明文件
```

## 🚀 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動伺服器

```bash
# 生產模式
npm start

# 開發模式（自動重啟）
npm run dev
```

### 3. 訪問網站

伺服器啟動後，您可以在瀏覽器中訪問以下地址：

- **主頁**: http://localhost:3000
- **Buri 餐廳**: http://localhost:3000/buri
- **Flatter 餐廳**: http://localhost:3000/flatter
- **Foody 餐廳**: http://localhost:3000/foody
- **Kusina 餐廳**: http://localhost:3000/kusina
- **Tasteit 餐廳**: http://localhost:3000/tasteit

## 🎨 模板特色

### 🍜 Buri 餐廳
- 現代化設計風格
- 優雅的用戶界面
- 豐富的功能模組

### 🥘 Flatter 餐廳
- 專業餐飲服務展示
- 專注於客戶體驗
- 完整的服務介紹

### 🍕 Foody 餐廳
- 美食愛好者專屬
- 豐富的菜品展示
- 吸引人的視覺設計

### 🍽️ Kusina 餐廳
- 溫馨家庭式風格
- 舒適的用餐氛圍
- 親切的服務理念

### 🍴 Tasteit 餐廳
- 精緻餐飲文化
- 高品質美食展示
- 優雅的品味體驗

## 🔧 技術架構

- **後端框架**: Node.js + Express
- **靜態文件服務**: Express.static
- **端口配置**: 3009 (可通過環境變量修改)
- **開發工具**: Nodemon (開發模式)
- **部署平台**: Vercel (支援)

## 🚀 Vercel 部署

### 自動部署
1. 將代碼推送到 GitHub
2. 在 Vercel 中連接 GitHub 倉庫
3. Vercel 會自動檢測並部署

### 手動部署
```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 部署配置
- `vercel.json` 文件已配置好路由規則
- 自動處理 favicon.ico 請求
- 優化了靜態文件服務

## 📝 自定義配置

### 修改端口

您可以通過環境變量來修改伺服器端口：

```bash
PORT=8080 npm start
```

### 添加新模板

要添加新的模板，只需：

1. 將模板文件夾放在項目根目錄
2. 在 `server.js` 中添加新的路由：

```javascript
app.use('/new-template', express.static(path.join(__dirname, 'new-template-folder')));
```

## 🐛 故障排除

### 常見問題

1. **端口被佔用**
   - 解決方案：修改 `PORT` 環境變量或終止佔用端口的進程

2. **模板無法訪問**
   - 檢查文件夾名稱是否正確
   - 確認文件夾路徑是否存在

3. **靜態資源無法加載**
   - 檢查CSS、JS、圖片文件路徑
   - 確認文件權限設置

## 📄 授權

MIT License

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

---

**享受您的Pubs & Restaurant！** 🎉 # pubs-and-restaurants
