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
      description: 'smooth-macはmacOS向けの集中型ユーティリティを作ります。ウィンドウ管理のSmoothSnap。DockウィンドウプレビューのSmoothPeek。',
    },
  },
  product: {
    downloadButton: 'Mac App Storeでダウンロード',
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
      philosophy:
        'macOSはほぼあらゆる面で美しく設計されています。\nウィンドウ管理は、常に静かな例外でした。\n\nすべての回避策は、OSと戦うか、誰も求めていない十数の機能を提供するかのどちらかです。SmoothSnapは、ひとつのことがただ機能すべきだから存在します: ウィンドウを望む場所に即座に、何も考えずに配置すること。\n\nそれ以上でも、それ以下でもありません。Macが本来あるべき姿で動く、ただそれだけ。',
      protocol: {
        requirement: 'macOS 13 Ventura以降',
        architecture: 'ユニバーサルバイナリ (Apple Silicon + Intel)',
        permissions: ['アクセシビリティ'],
        permissionPurpose:
          'SmoothSnapは他のアプリのウィンドウを移動・リサイズするためにアクセシビリティ権限が必要です。これが唯一の権限要求であり、データはデバイスを離れません。',
        price: '¥1,500 · 買い切り · サブスクリプションなし',
        distribution: 'Mac App Store',
      },
      ctaHeadline: 'スナップする準備はできていますか？',
      ctaSubtext: '買い切り',
      crossSell: 'こちらもチェック',
      crossSellTagline: '切り替える前に、まず確認。',
      seo: {
        title: 'SmoothSnap — macOSウィンドウスナップアプリ',
        description: 'macOS用ウィンドウスナップ — 速く、キーボード中心で、必要なときだけ現れます。',
      },
      screenshotAlts: ['SmoothSnapのウィンドウスナップ動作', 'SmoothSnapのマルチディスプレイレイアウト'],
    },
    smoothpeek: {
      tagline: '切り替える前に、まず確認。',
      description: 'Dockアイコンにカーソルを合わせると、開いているすべてのウィンドウが即座にプレビューできます。クリックして、迷わず目的の場所へ。',
      longDescription:
        '間違ったウィンドウをクリックするのは、思っているより時間の無駄です。SmoothPeekは、Dockアイコンにホバーした瞬間に、開いているすべてのウィンドウのライブプレビューを表示します — 常に正確に目的の場所に辿り着けます。',
      features: [
        { title: 'Dockプレビューが瞬時に', description: 'Dockアイコンにホバーするだけで、開いているすべてのウィンドウのサムネイルが表示されます。クリック不要。' },
        { title: 'すべてのウィンドウを一覧で', description: 'アプリの開いているウィンドウがすべて並んで表示されます。目的のウィンドウを一目で見つけられます。' },
        {
          title: 'ワンクリックで切り替え',
          description: 'サムネイルをタップするだけで、そのウィンドウが前面に来ます。Appスイッチャーを探し回る必要はありません。',
        },
        {
          title: '完全にネイティブな美しさ',
          description: 'スムーズなフェードアニメーションと、macOSに自然に溶け込むビジュアルデザイン。',
        },
        { title: '100msの応答速度', description: 'ホバーした瞬間にプレビューが表示されます。ローディングなし、遅延なし、スピナーなし。' },
        { title: 'キーボード対応', description: 'Tabでウィンドウを移動し、Enterで切り替え。マウスなしで完全に操作できます。' },
      ],
      philosophy:
        'SmoothPeekは、間違ったウィンドウをクリックするという小さな摩擦が一日に何十回も繰り返されるという事実から生まれました。macOSのDockは優れていますが、ウィンドウの中身は見せてくれません。SmoothPeekがその空白を埋めます。たった一度のホバー。一瞥。正確なウィンドウへの移動。良いツールは存在感を消します。',
      protocol: {
        requirement: 'macOS 14 Sonoma以降',
        architecture: 'ユニバーサルバイナリ (Apple Silicon + Intel)',
        permissions: ['アクセシビリティ', '画面収録'],
        permissionPurpose:
          'アクセシビリティ権限はDockアイコンのホバーイベントを検知するために使用します。画面収録権限はデバイス上でウィンドウサムネイルをキャプチャします。データは送信・保存されません。',
        price: '¥500 · 買い切り · サブスクリプションなし',
        distribution: 'Mac App Store',
      },
      ctaHeadline: 'あなたのDockを、もっとスマートに。',
      ctaSubtext: '買い切り',
      crossSell: 'こちらもチェック',
      crossSellTagline: 'ネイティブのように感じるウィンドウスナップ。',
      seo: {
        title: 'SmoothPeek — DockからウィンドウプレビューをMacで',
        description: 'Dockアイコンにカーソルを合わせると、開いているすべてのウィンドウを瞬時にプレビュー。クリックで目的のウィンドウへ。macOS 14 Sonoma以降が必要。',
      },
      screenshotAlts: ['SmoothPeekのDockホバーウィンドウプレビュー', 'SmoothPeekの複数ウィンドウプレビューパネル'],
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
          q: 'SmoothPeekはどのように動作しますか？',
          a: 'Dockアイコンにカーソルを合わせると、そのアプリの開いているすべてのウィンドウのサムネイルが入ったパネルが表示されます。サムネイルをクリックすると、そのウィンドウに即座に切り替わります。',
        },
        {
          q: 'どのmacOSバージョンがサポートされていますか？',
          a: 'SmoothPeekはmacOS 14 Sonoma以降が必要です。Apple SiliconとIntel Macの両方でネイティブに動作します。',
        },
        {
          q: 'SmoothPeekがアクセシビリティと画面収録の権限を必要とするのはなぜですか？',
          a: 'アクセシビリティ権限はDockアイコンのホバーイベントを検出するために使用されます。画面収録はデバイス上でライブウィンドウサムネイルをキャプチャするために使用されます。データは送信・保存されず、すべての処理はMac内で行われます。',
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
        title: 'システム権限',
        body: 'SmoothPeekは、Dockでアクティブなアプリを検出し、デバイス上でウィンドウプレビューをキャプチャする目的のみで、アクセシビリティおよびスクリーン録画の権限を要求します。これらの権限を通じて取得されたデータは送信、保存、または共有されません。「システム設定 > プライバシーとセキュリティ」でいつでも権限を取り消すことができます。',
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
