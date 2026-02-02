# Sakura Tech - 日本風ウェブサイト

日本の美学とモダンテクノロジーを融合した、ミニマリストデザインの企業ウェブサイトです。

## 🌸 特徴

### デザイン哲学
- **簡素 (Kanso)**: ミニマリズム、本質的な要素のみ
- **調和 (Wa)**: バランスの取れた配色とレイアウト
- **心 (Kokoro)**: 細部へのこだわりと誠実さ

### ビジュアル特徴
- ✨ Light theme（明るいテーマ）
- 🎨 日本風カラーパレット（桜、藍、クリーム、緑）
- 📐 ミニマリストレイアウト
- 🌸 繊細なアニメーション
- 📱 完全レスポンシブ

## 📄 ページ構成

1. **ホーム** (`/`) - Hero section、哲学、サービス概要
2. **私たちについて** (`/about`) - 使命、価値観、歴史
3. **サービス** (`/products`) - サービス一覧、技術スタック
4. **チーム** (`/team`) - メンバー紹介、文化
5. **お問い合わせ** (`/contact`) - 連絡先、フォーム

## 🎨 デザインシステム

### カラーパレット

```css
桜 (Sakura):    #ec7893 - メインアクセント
藍 (Indigo):    #486581 - テキスト、UI要素  
クリーム (Cream): #fffef9 - 背景
緑 (Sage):      #6d886d - アクセント2
```

### タイポグラフィ

- **Display**: Shippori Mincho - 見出し用の日本語明朝体
- **Sans**: Noto Sans JP - 本文用のゴシック体

### デザインエレメント

- 和紙テクスチャ背景
- 円相（Enso）装飾
- 桜の花びらアニメーション
- ミニマルな罫線装飾
- 繊細なシャドウ

## 🚀 セットアップ

### 必要環境

- Node.js 18.0以上
- npm または yarn

### インストール

```bash
# 1. プロジェクトディレクトリに移動
cd company-website-japan

# 2. 依存関係をインストール
npm install

# 3. 開発サーバーを起動
npm run dev

# 4. ブラウザで開く
http://localhost:3000
```

### ビルド

```bash
# 本番用ビルド
npm run build

# 静的ファイル生成（out/フォルダに出力）
npm run build
```

## 🛠️ 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Noto Sans JP, Shippori Mincho)

## 📁 プロジェクト構造

```
company-website-japan/
├── app/
│   ├── about/          # 私たちについて
│   ├── contact/        # お問い合わせ
│   ├── products/       # サービス
│   ├── team/           # チーム
│   ├── globals.css     # グローバルスタイル
│   ├── layout.tsx      # ルートレイアウト
│   └── page.tsx        # ホーム
├── components/
│   ├── Footer.tsx      # フッター
│   └── Navigation.tsx  # ナビゲーション
├── package.json
├── tailwind.config.js  # Tailwind設定
├── tsconfig.json       # TypeScript設定
└── README.md
```

## 🎯 カスタマイズ

### 色の変更

`tailwind.config.js`で色を調整:

```javascript
colors: {
  sakura: { ... },  // 桜色
  indigo: { ... },  // 藍色
  cream: { ... },   // クリーム色
  sage: { ... },    // 緑色
}
```

### コンテンツの編集

各ページファイル（`app/*/page.tsx`）でコンテンツを編集できます。

### フォントの変更

`app/globals.css`と`tailwind.config.js`でフォント設定を変更できます。

## 🌐 デプロイ

### Vercel (推奨)

1. GitHubにプッシュ
2. [Vercel](https://vercel.com)でインポート
3. 自動デプロイ

### その他

- Netlify
- GitHub Pages  
- AWS S3 + CloudFront
- 任意の静的ホスティング

## 📝 デザインコンセプト

このウェブサイトは以下の日本の美学原則に基づいています：

- **侘寂 (Wabi-Sabi)**: 不完全さと簡素さの美
- **間 (Ma)**: 空間の美学、ネガティブスペース
- **幽玄 (Yugen)**: 奥深い美しさ
- **渋い (Shibui)**: 控えめな優雅さ

## 💡 ベストプラクティス

- ホワイトスペースを十分に取る
- アニメーションは控えめに
- 色使いは最小限に
- タイポグラフィの階層を明確に
- レスポンシブデザインを重視

## 🤝 貢献

プルリクエストやイシューを歓迎します。

## 📄 ライセンス

MIT License

---

Made with ❤️ and 和 (Wa) by Sakura Tech Team
