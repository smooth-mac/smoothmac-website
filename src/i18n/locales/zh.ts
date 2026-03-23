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
      description: 'smooth-mac 为 macOS 制作专注的实用工具。SmoothSnap 管理窗口。SmoothPeek 预览文件。',
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
      crossSellTagline: 'Quick Look，更强大。',
      seo: {
        title: 'SmoothSnap — macOS 窗口吸附应用',
        description: 'macOS 的窗口吸附 — 快速、以键盘为中心，在你需要之前悄无声息。',
      },
      screenshotAlts: ['SmoothSnap 窗口吸附演示', 'SmoothSnap 多显示器布局'],
    },
    smoothpeek: {
      tagline: 'Quick Look，更强大。',
      description: 'SmoothPeek 为 Quick Look 提供第二意见 — 更多文件类型，更流畅的导航。',
      longDescription:
        '你将鼠标悬停在文件上，想立即知道里面是什么。SmoothPeek 通过支持更多文件类型、文件间的流畅导航，以及让你忘记它是第三方应用的原生体验，来扩展 Quick Look。',
      features: [
        { title: '更多文件类型', description: '预览 Quick Look 忽略的格式 — 代码文件、归档文件、字体等。' },
        { title: '不关闭即可导航', description: '在预览保持打开的同时，在文件夹中的文件之间移动。' },
        {
          title: '在 Quick Look 能用的地方都能用',
          description: 'Finder、打开对话框、桌面 — 凡是能用 Quick Look 的地方，SmoothPeek 都能增强它。',
        },
        {
          title: '完全原生的感觉',
          description: '使用与 Quick Look 相同的视觉语言 — 没有突兀的过渡或陌生的 UI。',
        },
        { title: '即时预览', description: '没有加载动画。你按下空格键的瞬间，文件就出现了。' },
        { title: '纯键盘工作流', description: '完全用键盘导航、关闭和打开文件。' },
      ],
      ctaHeadline: '看看里面是什么。',
      ctaSubtext: '一次性购买',
      crossSell: '还可以看看',
      crossSellTagline: '感觉原生的窗口吸附。',
      seo: {
        title: 'SmoothPeek — macOS Quick Look 增强应用',
        description: 'SmoothPeek 为 Quick Look 提供第二意见 — 更多文件类型，更流畅的导航。',
      },
      screenshotAlts: ['SmoothPeek 文件预览', 'SmoothPeek 文件导航'],
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
          q: 'SmoothPeek 新增支持哪些文件类型？',
          a: 'SmoothPeek 新增了代码文件、Markdown、归档文件、字体等的预览支持 — 完整列表可在应用内查看。',
        },
        {
          q: '它会替换 Quick Look 吗？',
          a: 'SmoothPeek 扩展 Quick Look — 而非替换它。你仍然像平时一样使用空格键。',
        },
        {
          q: '与第三方文件管理器兼容吗？',
          a: 'SmoothPeek 在任何 Quick Look 可用的地方都能工作，包括使用 Quick Look API 的第三方 Finder 替代品。',
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
