# Good Day Mate — 公式サイト

沖縄・恩納村を拠点に、プライベートヴィラ「Sharrows」「Aniversario」を運営するGood Day Mateの公式サイトです。

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Font**: Inter (本文) + Cormorant Garamond (見出し)
- **Animation**: react-intersection-observer によるスクロールアニメーション
- **Icons**: lucide-react

## ページ構成

| パス | 内容 |
|------|------|
| `/` | コーポレートサイト トップページ |
| `/sharrows` | Sharrows 施設詳細・予約ページ |
| `/aniversario` | Aniversario 施設詳細・予約ページ |

## 開発手順

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build
```

## 予約システムについて

現在、`BookingWidget` コンポーネントは UI のみ実装済みです。
本番稼働には以下のいずれかの予約エンジンとの統合が必要です：

### 推奨: Beds24

- **公式**: https://beds24.com
- **月額**: $4〜$20（物件数による）
- **特徴**: Booking.com / Airbnb とのチャンネル管理、直接予約エンジン内蔵
- **統合方法**: Beds24 が提供する JavaScript ウィジェットを埋め込む

```html
<!-- Beds24 予約ウィジェット例 -->
<iframe
  src="https://beds24.com/booking2.php?propid=YOUR_PROP_ID&roomid=YOUR_ROOM_ID"
  width="100%"
  height="600"
  frameborder="0"
/>
```

### 代替: STAYNAVI

- 日本語サポートが充実、国内旅行需要に強い
- https://staynavi.direct/

## デプロイ

Vercel へのデプロイを推奨します：

```bash
npm install -g vercel
vercel --prod
```

## カスタマイズ予定

- [ ] 実際の施設写真の差し替え（現在はUnsplashのストック画像）
- [ ] Beds24 予約ウィジェットの統合
- [ ] Instagram API 連携（実際のフィード表示）
- [ ] Google Analytics / GTM 導入
- [ ] 多言語対応（英語・中国語）
- [ ] お問い合わせフォームの実装（Formspree / Resend）
