import type { Translations } from '../types';

const ja: Translations = {
  nav: {
    products: '製品',
    support: 'サポート',
    langLabel: '言語',
  },
  footer: {
    tagline: 'あなたが実際に使うMacのためのツール。',
    productsHeading: '製品',
    companyHeading: '会社',
    support: 'サポート',
    privacy: 'プライバシーポリシー',
    madeOnMac: 'Macで作りました。',
    appStoreBlurb: 'Mac App Storeでのみ販売',
  },
  home: {
    hero: {
      studioLabel: 'smooth-mac',
      headline: 'あなたが実際に使う\nMacのためのツール。',
      subheadline: '2つのアプリ。丁寧に作りました。静かに役立ちます。',
    },
    showcase: {
      label: 'アプリ紹介',
      headline: '2つのアプリ。1つのスタジオ。',
      subtext: 'それぞれのアプリがmacOSの実際の問題を解決します — それ以上でも、それ以下でもありません。',
    },
    values: [
      {
        title: 'macOS向けに設計',
        body: 'WindowsやiOSから移植したものではありません。Macのために一から作りました — Macの慣習、ショートカット、ユーザーを尊重して。',
      },
      {
        title: 'サブスクなし',
        body: '一度の購入。永久に所有。アップデート込み。優れたソフトウェアは所有できるべきだと信じています。',
      },
      {
        title: 'プライバシー優先',
        body: '分析なし。アカウントなし。データはデバイス外に出ません。あなたのMacの使い方はあなただけのものです。',
      },
    ],
    cta: {
      appStoreText: 'Mac App Storeでのみ販売',
      requiresText: 'macOS 13 Ventura以降が必要 · ユニバーサルバイナリ (Apple Silicon + Intel)',
    },
    seo: {
      title: 'smooth-mac — macOSユーティリティ、丁寧に作りました',
      description: 'smooth-macはmacOS向けの集中型ユーティリティを作ります。ウィンドウ管理のSmoothSnap。ファイルプレビューのSmoothPeek。',
    },
  },
  product: {
    downloadButton: 'App Storeでダウンロード',
    seeFeatures: 'すべての機能を見る ↓',
    learnMore: '詳細を見る',
    appStore: 'App Store',
    featuresLabel: '機能',
    featuresHeadline: ['必要なすべて。', '不要なものは何もない。'],
    onePurchase: '買い切り',
  },
  products: {
    smoothsnap: {
      tagline: 'ネイティブのように感じるウィンドウスナップ。',
      description: 'macOS用ウィンドウスナップ — 速く、キーボード中心で、必要なときだけ現れます。',
      longDescription:
        'macOSには正しく感じるウィンドウスナップがありませんでした。SmoothSnapはOSと戦わずにその空白を埋めます。既存のキーボードショートカットと連携し、完全に邪魔にならず、Appleが作ったかもしれないアプリのように期待通りに動作します。',
      features: [
        { title: 'キーボード優先', description: '自然に感じるショートカットでウィンドウをスナップ — 新しい筋肉記憶は不要です。' },
        { title: 'Stage Manager対応', description: 'Stage Managerや複数ディスプレイとシームレスに連携します。' },
        { title: 'ノッチ対応', description: 'MacBookのノッチ周りにウィンドウが正確にスナップし、重なりません。' },
        { title: 'メニューバーアイコンなし', description: 'メニューバーにアイコンなし、設定の煩雑さなし。スナップだけ。' },
        { title: 'macOSのために作られた', description: 'Windowsの移植ではありません。macOSの実際の動作に合わせてゼロから設計。' },
        { title: '即座の反応', description: '16ms未満の応答時間。望んだ瞬間にスナップが起こります。' },
      ],
      ctaHeadline: 'スナップする準備はできていますか？',
      ctaSubtext: '買い切り',
      crossSell: 'こちらもチェック',
      crossSellTagline: 'Quick Look、進化版。',
      seo: {
        title: 'SmoothSnap — macOSウィンドウスナップアプリ',
        description: 'macOS用ウィンドウスナップ — 速く、キーボード中心で、必要なときだけ現れます。',
      },
      screenshotAlts: ['SmoothSnapのウィンドウスナップ動作', 'SmoothSnapのマルチディスプレイレイアウト'],
    },
    smoothpeek: {
      tagline: 'Quick Look、進化版。',
      description: 'SmoothPeekはQuick Lookにセカンドオピニオンを与えます — より多くのファイル形式、よりスムーズなナビゲーション。',
      longDescription:
        'ファイルにホバーして、すぐに中身を知りたいですよね。SmoothPeekは、より多くのファイル形式のサポート、ファイル間のスムーズなナビゲーション、サードパーティアプリとは思えないほどネイティブな体験でQuick Lookを拡張します。',
      features: [
        { title: 'より多くのファイル形式', description: 'Quick Lookが無視する形式をプレビュー — コードファイル、アーカイブ、フォントなど。' },
        { title: '閉じずにナビゲート', description: 'プレビューを開いたまま、フォルダ内のファイル間を移動できます。' },
        {
          title: 'Quick Lookが使えるところならどこでも',
          description: 'Finder、ファイルダイアログ、デスクトップ — Quick Lookが使える場所ならSmoothPeekが強化します。',
        },
        {
          title: '完全にネイティブな感覚',
          description: 'Quick Lookと同じビジュアル言語を使用 — 違和感のある遷移や見慣れないUIはありません。',
        },
        { title: '即座のプレビュー', description: 'ローディングスピナーなし。スペースを押した瞬間にファイルが表示されます。' },
        { title: 'キーボードのみのワークフロー', description: 'ファイルのナビゲート、閉じる、開くをすべてキーボードだけで操作できます。' },
      ],
      ctaHeadline: '中身を確認しましょう。',
      ctaSubtext: '買い切り',
      crossSell: 'こちらもチェック',
      crossSellTagline: 'ネイティブのように感じるウィンドウスナップ。',
      seo: {
        title: 'SmoothPeek — macOS Quick Look強化アプリ',
        description: 'SmoothPeekはQuick Lookにセカンドオピニオンを与えます — より多くのファイル形式、よりスムーズなナビゲーション。',
      },
      screenshotAlts: ['SmoothPeekのファイルプレビュー', 'SmoothPeekのファイルナビゲーション'],
    },
  },
  support: {
    headline: 'サポート',
    subheadline: '問題がありますか？お手伝いします。',
    smoothsnap: {
      faqs: [
        {
          q: 'どのmacOSバージョンがサポートされていますか？',
          a: 'SmoothSnapはmacOS 13 Ventura以降が必要です。Apple SiliconとIntel Macの両方でネイティブに動作します。',
        },
        {
          q: 'Stage Managerと一緒に使えますか？',
          a: 'はい。SmoothSnapはStage Managerを完全に認識し、競合なく一緒に動作します。',
        },
        {
          q: 'キーボードショートカットをカスタマイズできますか？',
          a: 'はい — SmoothSnapの環境設定を開いて、スナップショートカットをカスタマイズできます。',
        },
      ],
    },
    smoothpeek: {
      faqs: [
        {
          q: 'SmoothPeekはどのファイル形式を追加でサポートしますか？',
          a: 'SmoothPeekはコードファイル、マークダウン、アーカイブ、フォントなどのプレビューを追加します — 完全なリストはアプリ内で確認できます。',
        },
        {
          q: 'Quick Lookを置き換えますか？',
          a: 'SmoothPeekはQuick Lookを拡張します — 置き換えではありません。スペースキーは通常通り使用できます。',
        },
        {
          q: 'サードパーティのファイルマネージャーと互換性がありますか？',
          a: 'SmoothPeekはQuick Lookが使える場所ならどこでも動作します。Quick Look APIを使うサードパーティのFinderの代替アプリも含みます。',
        },
      ],
    },
    contact: {
      headline: 'まだ助けが必要ですか？',
      subtext: 'メールをいただければ、1営業日以内にご返答します。',
      emailLabel: 'support@smoothmac.app',
    },
    seo: {
      title: 'サポート — smooth-mac',
      description: 'SmoothSnapまたはSmoothPeekのサポート。FAQ、互換性情報、お問い合わせ。',
    },
  },
  privacy: {
    headline: 'プライバシーポリシー',
    shortVersion: '要約：smooth-macアプリは個人データを収集しません。何もデバイス外に出ません。',
    sections: [
      {
        title: 'データ収集',
        body: 'smooth-macアプリ（SmoothSnap、SmoothPeek）は個人データを収集、送信、または保存しません。アカウントも、分析も、テレメトリもありません。',
      },
      {
        title: 'このウェブサイト',
        body: 'smoothmac.appはCloudflare Web Analyticsを使用しています — Cookieを必要とせず、個人を特定できる情報を収集しないプライバシー保護の分析ソリューションです。トラッキングピクセルも、サードパーティのスクリプトもありません。',
      },
      {
        title: 'App Store',
        body: '購入はAppleがMac App Storeを通じて処理します。購入時に収集されるデータにはAppleのプライバシーポリシーが適用されます。',
      },
      {
        title: 'お問い合わせ',
        body: 'ご質問はメールでどうぞ',
      },
    ],
    lastUpdated: '最終更新：2026年3月',
    seo: {
      title: 'プライバシーポリシー — smooth-mac',
      description: 'smooth-macのプライバシーポリシー。個人データは収集しません。',
    },
  },
  notFound: {
    headline: 'ページが見つかりません。',
    subheadline: 'そのページは存在しませんが — アプリはあります。',
    goHome: 'ホームへ戻る',
  },
};

export default ja;
