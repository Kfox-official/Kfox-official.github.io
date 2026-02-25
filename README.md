# 🚀 LinkHub

![Version](https://img.shields.io/badge/version-1.0-blue)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-green)
![PWA](https://img.shields.io/badge/PWA-ready-purple)

Telegram風UIのリンク管理サイト。
A modern Telegram-style link hub with favorites, search, and PWA support.

---

## 🌐 Live Demo

👉 https://あなたのID.github.io/linkhub/

---

## 📸 Screenshot

<img width="900" alt="screenshot" src="https://via.placeholder.com/900x500.png?text=LinkHub+Screenshot">

※スクリーンショットは後で差し替えてください

---

# ✨ Features / 機能

## 🎨 UI

* Telegram風チャットレイアウト
* モダンダークテーマ
* レスポンシブ対応（スマホ・PC）

## ⭐ Link Management

* アイコン自動取得（favicon）
* カテゴリ分類
* タグ表示
* ワンクリックアクセス

## ❤️ Favorites

* お気に入り保存（LocalStorage）
* 永続保存（ブラウザ）

## 🔍 Search

* リアルタイム検索

## ⚙ JSON Configuration

HTMLを編集せずに管理可能：

```json
{
  "Anime": [
    {
      "name": "Example",
      "url": "https://example.com",
      "tag": "Streaming"
    }
  ]
}
```

## 📱 PWA Support

* ホーム画面追加
* アプリ風起動
* オフライン対応
* ネイティブ体験

---

# 📁 Project Structure

```
project/
 ├ index.html
 ├ data.json
 ├ manifest.json
 ├ service-worker.js
 └ icon.png
```

---

# 🚀 Installation / セットアップ

## ① Clone

```
git clone https://github.com/yourname/linkhub.git
```

またはZIPダウンロード。

## ② Deploy

GitHub Pagesを有効化：

Settings → Pages → Deploy from branch → main

---

# 📱 Use as App / アプリとして使用

スマホでサイトを開く：

ブラウザメニュー
→ ホーム画面に追加

これでネイティブアプリのように使えます。

---

# 🛠 Customization / カスタマイズ

編集ファイル：

```
data.json
```

例：

```json
{
  "Tools": [
    {
      "name": "GitHub",
      "url": "https://github.com",
      "tag": "Dev"
    }
  ]
}
```

---

# 🗺 Roadmap / 今後の予定

* [ ] 管理画面GUI
* [ ] タグフィルター
* [ ] ソート機能
* [ ] クラウド同期
* [ ] 多言語対応
* [ ] テーマ切替
* [ ] ユーザーアカウント

---

# ⚠ Disclaimer / 注意

このプロジェクトはリンク管理目的です。
リンク先コンテンツの合法性・安全性について責任を負いません。

This project is a personal link aggregator.
The author is not responsible for external content.

---

# 📄 License

MIT License

---

# ⭐ Support

気に入ったらスターお願いします ⭐

If you like this project, please give it a star ⭐
