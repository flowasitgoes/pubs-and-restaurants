#!/bin/bash

echo "🚀 開始部署到 Vercel..."

# 檢查是否安裝了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI 未安裝，正在安裝..."
    npm install -g vercel
fi

# 檢查是否已登入
if ! vercel whoami &> /dev/null; then
    echo "🔐 請先登入 Vercel..."
    vercel login
fi

# 部署到 Vercel
echo "📦 正在部署..."
vercel --prod

echo "✅ 部署完成！"
echo "🌐 您的網站現在可以通過 Vercel 提供的 URL 訪問" 