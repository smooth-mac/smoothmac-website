import type { Translations } from '../types';

const zh: Translations = {
  nav: {
    products: '产品',
    support: '支持',
    langLabel: '语言',
  },
  footer: {
    tagline: '为你真正使用的 Mac 而生的工具。',
    productsHeading: '产品',
    companyHeading: '公司',
    support: '支持',
    privacy: '隐私政策',
    madeOnMac: '在 Mac 上制作。',
    appStoreBlurb: '仅在 Mac App Store 发售',
  },
  home: {
    hero: {
      studioLabel: 'smooth-mac',
      headline: '为你真正使用的\nMac 而生的工具。',
      subheadline: '两款应用。精心制作。悄然有用。',
    },
    showcase: {
      label: '我们的应用',
      headline: '两款应用。一个工作室。',
      subtext: '每款应用都解决 macOS 上的真实问题 — 不多，不少。',
    },
    values: [
      {
        title: '为 macOS 而设计',
        body: '不是从 Windows 或 iOS 移植的。从头为 Mac 而生 — 尊重其规范、快捷键和用户。',
      },
      {
        title: '无需订阅',
        body: '一次购买。永久拥有。包含更新。我们相信好软件应该是你拥有的东西。',
      },
      {
        title: '隐私优先',
        body: '无分析。无账户。数据不会离开你的设备。你对 Mac 的使用方式只属于你自己。',
      },
    ],
    cta: {
      appStoreText: '仅在 Mac App Store 发售',
      requiresText: '需要 macOS 13 Ventura 或更高版本 · 通用二进制（Apple Silicon + Intel）',
    },
    seo: {
      title: 'smooth-mac — macOS 工具，精心制作',
      description: 'smooth-mac 为 macOS 制作专注的实用工具。SmoothSnap 管理窗口。SmoothPeek 预览 Dock 窗口。',
    },
  },
  product: {
    downloadButton: '在 App Store 下载',
    seeFeatures: '查看所有功能 ↓',
    learnMore: '了解更多',
    appStore: 'App Store',
    featuresLabel: '功能',
    featuresHeadline: ['所需的一切。', '没有多余的东西。'],
    onePurchase: '一次性购买',
  },
  products: {
    smoothsnap: {
      tagline: '感觉原生的窗口吸附。',
      description: 'macOS 的窗口吸附 — 快速、以键盘为中心，在你需要之前悄无声息。',
      longDescription:
        'macOS 从来没有真正好用的窗口吸附功能。SmoothSnap 填补了这个空缺，而且不与操作系统冲突。它与你现有的键盘快捷键配合，完全不碍事，行为方式恰好是你对 Apple 自己做的应用所期待的那样。',
      features: [
        { title: '键盘优先', description: '用感觉自然的快捷键吸附窗口 — 不需要新的肌肉记忆。' },
        { title: '支持 Stage Manager', description: '与 Stage Manager 和多显示器无缝配合，不产生冲突。' },
        { title: '刘海感知', description: '窗口在 MacBook 刘海周围精确吸附，无重叠。' },
        { title: '零菜单栏占用', description: '菜单栏没有图标，没有繁杂的偏好设置。只有吸附。' },
        { title: '为 macOS 而生', description: '不是 Windows 移植版。从零开始为 macOS 的实际运作方式设计。' },
        { title: '即时响应', description: '响应时间低于 16ms。你一想要，吸附就发生。' },
      ],
      ctaHeadline: '准备好吸附了吗？',
      ctaSubtext: '一次性购买',
      crossSell: '还可以看看',
      crossSellTagline: '切换前，先预览。',
      seo: {
        title: 'SmoothSnap — macOS 窗口吸附应用',
        description: 'macOS 的窗口吸附 — 快速、以键盘为中心，在你需要之前悄无声息。',
      },
      screenshotAlts: ['SmoothSnap 窗口吸附演示', 'SmoothSnap 多显示器布局'],
    },
    smoothpeek: {
      tagline: '切换前，先预览。',
      description: '将鼠标悬停在任意 Dock 图标上，即可即时预览所有打开的窗口 — 再点击精准切换。',
      longDescription:
        '点错窗口浪费的时间比你想象的更多。SmoothPeek 在你将鼠标悬停在 Dock 图标上的瞬间，展示所有打开窗口的实时预览，让你每次都能精准地到达目标。',
      features: [
        { title: 'Dock 即时预览', description: '悬停任意 Dock 图标，即可看到所有打开窗口的实时缩略图 — 无需点击。' },
        { title: '一览所有窗口', description: '应用的所有打开窗口并排显示。一眼就能找到正确的那个。' },
        {
          title: '一键聚焦',
          description: '点击任意缩略图即可将该窗口置于前端，不需要在应用切换器中翻找。',
        },
        {
          title: '精致的原生感',
          description: '流畅的淡入淡出动画和融入 macOS 的视觉设计。',
        },
        { title: '100ms 响应', description: '悬停瞬间即现预览，无加载、无延迟、无转圈。' },
        { title: '键盘友好', description: '用 Tab 在窗口间切换，按 Enter 跳转。完全无需鼠标。' },
      ],
      ctaHeadline: '让你的 Dock 更聪明。',
      ctaSubtext: '一次性购买',
      crossSell: '还可以看看',
      crossSellTagline: '感觉原生的窗口吸附。',
      seo: {
        title: 'SmoothPeek — Dock 窗口预览应用',
        description: '将鼠标悬停在任意 Dock 图标上，即可即时预览所有打开的窗口。点击精准切换。需要 macOS 14 Sonoma 或更高版本。',
      },
      screenshotAlts: ['SmoothPeek 悬停 Dock 图标的窗口预览', 'SmoothPeek 多窗口预览面板'],
    },
  },
  support: {
    headline: '支持',
    subheadline: '遇到问题了吗？我们来帮你。',
    smoothsnap: {
      faqs: [
        {
          q: '支持哪些 macOS 版本？',
          a: 'SmoothSnap 需要 macOS 13 Ventura 或更高版本。在 Apple Silicon 和 Intel Mac 上均可原生运行。',
        },
        {
          q: '与 Stage Manager 兼容吗？',
          a: '是的。SmoothSnap 完全支持 Stage Manager，可以无冲突地协同工作。',
        },
        {
          q: '可以自定义键盘快捷键吗？',
          a: '可以 — 打开 SmoothSnap 偏好设置即可自定义任何吸附快捷键。',
        },
      ],
    },
    smoothpeek: {
      faqs: [
        {
          q: 'SmoothPeek 是如何工作的？',
          a: '当你将鼠标悬停在 Dock 图标上时，SmoothPeek 会显示一个浮动面板，其中包含该应用所有打开窗口的实时缩略图。点击任意缩略图即可立即切换到该窗口。',
        },
        {
          q: '支持哪些 macOS 版本？',
          a: 'SmoothPeek 需要 macOS 14 Sonoma 或更高版本。在 Apple Silicon 和 Intel Mac 上均可原生运行。',
        },
        {
          q: '为什么 SmoothPeek 需要辅助功能和屏幕录制权限？',
          a: '辅助功能权限用于检测 Dock 图标上的悬停事件。屏幕录制权限用于在本地设备上捕获实时窗口缩略图。数据不会被传输或存储，所有处理均在 Mac 内完成。',
        },
      ],
    },
    contact: {
      headline: '还需要帮助？',
      subtext: '发邮件给我们，我们会在一个工作日内回复。',
      emailLabel: 'support@smoothmac.app',
    },
    seo: {
      title: '支持 — smooth-mac',
      description: '获取 SmoothSnap 或 SmoothPeek 的帮助。常见问题、兼容性信息和联系方式。',
    },
  },
  privacy: {
    headline: '隐私政策',
    shortVersion: '简短版本：smooth-mac 应用不收集任何个人数据。任何内容都不会离开你的设备。',
    sections: [
      {
        title: '数据收集',
        body: 'smooth-mac 应用（SmoothSnap、SmoothPeek）不收集、传输或存储任何个人数据。没有账户、没有分析、没有遥测。',
      },
      {
        title: '本网站',
        body: 'smoothmac.app 使用 Cloudflare Web Analytics — 一种无需 Cookie 且不收集个人身份信息的隐私保护分析解决方案。没有追踪像素，没有第三方脚本。',
      },
      {
        title: '系统权限',
        body: 'SmoothPeek 仅出于以下目的请求辅助功能（Accessibility）和屏幕录制（Screen Recording）权限：检测 Dock 中的活跃应用，以及在本地设备上捕获窗口预览。通过这些权限获取的任何数据均不会被传输、存储或共享。您可以随时在"系统设置 > 隐私与安全性"中撤销这些权限。',
      },
      {
        title: 'App Store',
        body: '购买通过 Apple 的 Mac App Store 处理。购买过程中收集的任何数据均受 Apple 隐私政策约束。',
      },
      {
        title: '联系我们',
        body: '有疑问？请发邮件',
      },
    ],
    lastUpdated: '最后更新：2026年3月',
    seo: {
      title: '隐私政策 — smooth-mac',
      description: 'smooth-mac 隐私政策。我们不收集任何个人数据。',
    },
  },
  notFound: {
    headline: '找不到页面。',
    subheadline: '该页面不存在 — 但我们的应用存在。',
    goHome: '回到首页',
  },
};

export default zh;
