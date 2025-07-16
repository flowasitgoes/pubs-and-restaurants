const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3009;

// 設置靜態文件中間件，為每個模板資料夾配置不同的路由
app.use('/buri', express.static(path.join(__dirname, 'public/buri-master')));
app.use('/flatter', express.static(path.join(__dirname, 'public/flatter-master')));
app.use('/foody', express.static(path.join(__dirname, 'public/foody-master')));
app.use('/kusina', express.static(path.join(__dirname, 'public/kusina-master')));
app.use('/tasteit', express.static(path.join(__dirname, 'public/tasteit-master')));

// 主页路由，显示所有可用的模板
app.get('/', (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pubs & Restaurant</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
            }
            .container {
                background: white;
                border-radius: 15px;
                padding: 30px;
                margin-top: 20px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            }
            h1 {
                text-align: center;
                color: #333;
                margin-bottom: 30px;
                font-size: 2.5em;
            }
            .temㄕplates-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
                margin-top: 30px;
            }
            .template-card {
                background: #f8f9fa;
                border-radius: 10px;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                border: 2px solid #e9ecef;
            }
            .template-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                border-color: #667eea;
            }
            .template-card h3 {
                color: #495057;
                margin-bottom: 15px;
                font-size: 1.5em;
            }
            .template-card p {
                color: #6c757d;
                margin-bottom: 20px;
                line-height: 1.6;
            }
            .template-link {
                display: inline-block;
                background: linear-gradient(45deg, #667eea, #764ba2);
                color: white;
                padding: 12px 25px;
                text-decoration: none;
                border-radius: 25px;
                font-weight: bold;
                transition: all 0.3s ease;
            }
            .template-link:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            .server-info {
                background: #e3f2fd;
                border-radius: 10px;
                padding: 20px;
                margin-bottom: 30px;
                border-left: 5px solid #2196f3;
            }
            .server-info h2 {
                color: #1976d2;
                margin-top: 0;
            }
            .server-info p {
                margin: 10px 0;
                color: #424242;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🍽️ Pubs & Restaurant</h1>


            <div class="templates-grid">
                <div class="template-card">
                    <h3>🍜 Buri 餐廳</h3>
                    <p>現代化的餐廳網站模板，具有優雅的設計和豐富的功能</p>
                    <a href="/buri" class="template-link">Preview</a>
                </div>
                
                <div class="template-card">
                    <h3>🥘 Flatter 餐廳</h3>
                    <p>專業的餐飲服務網站，專注於客戶體驗和服務展示</p>
                    <a href="/flatter" class="template-link">Preview</a>
                </div>
                
                <div class="template-card">
                    <h3>🍕 Foody 餐廳</h3>
                    <p>美食愛好者的理想選擇，展示各種美味佳餚</p>
                    <a href="/foody" class="template-link">Preview</a>
                </div>
                
                <div class="template-card">
                    <h3>🍽️ Kusina 餐廳</h3>
                    <p>溫馨的家庭式餐廳網站，營造舒適的用餐氛圍</p>
                    <a href="/kusina" class="template-link">Preview</a>
                </div>
                
                <div class="template-card">
                    <h3>🍴 Tasteit 餐廳</h3>
                    <p>品味美食的完美平台，展現精緻的餐飲文化</p>
                    <a href="/tasteit" class="template-link">Preview</a>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
    res.send(html);
});

// 404 錯誤處理
app.use((req, res) => {
    res.status(404).send(`
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>頁面未找到</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                margin: 0;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }
            .error-container {
                text-align: center;
                background: rgba(255,255,255,0.1);
                padding: 40px;
                border-radius: 15px;
                backdrop-filter: blur(10px);
            }
            h1 { font-size: 3em; margin-bottom: 20px; }
            p { font-size: 1.2em; margin-bottom: 30px; }
            a {
                color: white;
                text-decoration: none;
                background: rgba(255,255,255,0.2);
                padding: 10px 20px;
                border-radius: 25px;
                transition: background 0.3s ease;
            }
            a:hover { background: rgba(255,255,255,0.3); }
        </style>
    </head>
    <body>
        <div class="error-container">
            <h1>404</h1>
            <p>抱歉，您要找的頁面不存在</p>
            <a href="/">返回首頁</a>
        </div>
    </body>
    </html>
    `);
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`🚀 伺服器已啟動在 http://localhost:${PORT}`);
    console.log(`📁 可用的模板路由:`);
    console.log(`   - Buri 餐廳: http://localhost:${PORT}/buri`);
    console.log(`   - Flatter 餐廳: http://localhost:${PORT}/flatter`);
    console.log(`   - Foody 餐廳: http://localhost:${PORT}/foody`);
    console.log(`   - Kusina 餐廳: http://localhost:${PORT}/kusina`);
    console.log(`   - Tasteit 餐廳: http://localhost:${PORT}/tasteit`);
}); 