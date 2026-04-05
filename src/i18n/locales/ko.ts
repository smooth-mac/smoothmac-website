import type { Translations } from '../types';

const ko: Translations = {
  nav: {
    products: '제품',
    support: '지원',
    langLabel: '언어',
  },
  footer: {
    tagline: '당신이 실제로 사용하는 Mac을 위한 도구.',
    productsHeading: '제품',
    companyHeading: '회사',
    support: '지원',
    privacy: '개인정보 처리방침',
    madeOnMac: 'Mac에서 만들었습니다.',
    appStoreBlurb: 'Mac App Store에서만 판매합니다',
  },
  home: {
    hero: {
      studioLabel: 'smooth-mac',
      headline: '당신이 실제로 사용하는\nMac을 위한 도구.',
      subheadline: '두 개의 앱. 정성껏 만들었습니다. 조용히 유용합니다.',
    },
    showcase: {
      label: '앱 소개',
      headline: '두 개의 앱. 하나의 스튜디오.',
      subtext: '각 앱은 macOS의 실제 문제를 해결합니다 — 그 이상도, 그 이하도 아닙니다.',
    },
    values: [
      {
        title: 'macOS를 위해 설계됨',
        body: 'Windows나 iOS에서 이식하지 않았습니다. Mac을 위해 처음부터 만들었습니다 — Mac의 규칙, 단축키, 사용자를 존중합니다.',
      },
      {
        title: '구독 없음',
        body: '일회성 구매. 영원히 소유. 업데이트 포함. 좋은 소프트웨어는 소유할 수 있어야 한다고 믿습니다.',
      },
      {
        title: '개인정보 우선',
        body: '분석 없음. 계정 없음. 데이터가 기기를 떠나지 않습니다. 당신의 Mac 사용은 당신만의 것입니다.',
      },
    ],
    cta: {
      appStoreText: 'Mac App Store에서만 판매합니다',
      requiresText: 'macOS 13 Ventura 이상 필요 · 유니버설 바이너리 (Apple Silicon + Intel)',
    },
    seo: {
      title: 'smooth-mac — macOS 유틸리티, 정성껏 만든',
      description:
        'smooth-mac은 macOS용 집중 유틸리티를 만듭니다. 윈도우 관리를 위한 SmoothSnap. 파일 미리보기를 위한 SmoothPeek.',
    },
  },
  product: {
    downloadButton: 'App Store에서 다운로드',
    seeFeatures: '모든 기능 보기 ↓',
    learnMore: '자세히 보기',
    appStore: 'App Store',
    featuresLabel: '기능',
    featuresHeadline: ['필요한 모든 것.', '불필요한 것은 없습니다.'],
    onePurchase: '일회성 구매',
  },
  products: {
    smoothsnap: {
      tagline: '네이티브처럼 느껴지는 윈도우 스냅.',
      description: 'macOS용 윈도우 스냅 — 빠르고, 키보드 중심이며, 필요할 때만 나타납니다.',
      longDescription:
        'macOS에는 제대로 된 윈도우 스냅이 없었습니다. SmoothSnap은 운영체제와 싸우지 않고 그 공백을 채웁니다. 기존 키보드 단축키와 함께 작동하고, 완전히 방해되지 않으며, Apple이 만들었을 법한 앱처럼 정확히 예상한 대로 동작합니다.',
      features: [
        { title: '키보드 우선', description: '자연스럽게 느껴지는 단축키로 윈도우를 스냅하세요 — 새로운 근육 기억이 필요 없습니다.' },
        { title: 'Stage Manager 지원', description: 'Stage Manager 및 여러 디스플레이와 매끄럽게 함께 동작합니다.' },
        { title: '노치 인식', description: 'MacBook 노치 주변에서 윈도우가 정확하게 스냅되어 겹침이 없습니다.' },
        { title: '메뉴바 아이콘 없음', description: '메뉴바 아이콘도, 복잡한 설정도 없습니다. 스냅만 있습니다.' },
        { title: 'macOS를 위해 만들어짐', description: 'Windows 이식이 아닙니다. macOS가 실제로 작동하는 방식에 맞게 처음부터 설계되었습니다.' },
        { title: '즉각적인 반응', description: '16ms 미만의 응답 시간. 원하는 순간에 스냅이 일어납니다.' },
      ],
      ctaHeadline: '스냅할 준비가 되셨나요?',
      ctaSubtext: '일회성 구매',
      crossSell: '이것도 확인해 보세요',
      crossSellTagline: '전환하기 전에, 먼저 보세요.',
      seo: {
        title: 'SmoothSnap — macOS 윈도우 스냅 앱',
        description: 'macOS용 윈도우 스냅 — 빠르고, 키보드 중심이며, 필요할 때만 나타납니다.',
      },
      screenshotAlts: ['SmoothSnap 윈도우 스냅 동작', 'SmoothSnap 멀티 디스플레이 레이아웃'],
    },
    smoothpeek: {
      tagline: '전환하기 전에, 먼저 보세요.',
      description: '독 아이콘에 마우스를 올리면 열린 창을 모두 즉시 미리볼 수 있습니다. 클릭으로 정확히 원하는 곳으로 이동하세요.',
      longDescription:
        '잘못된 창을 클릭하는 실수가 하루에 수십 번 반복됩니다. SmoothPeek은 독 아이콘에 마우스를 올리는 순간 모든 열린 창의 라이브 미리보기를 보여줍니다 — 항상 정확히 원하는 곳에 도달할 수 있게 해줍니다.',
      features: [
        { title: '즉각적인 독 미리보기', description: '독 아이콘에 마우스를 올리면 모든 열린 창의 라이브 썸네일이 즉시 나타납니다.' },
        { title: '모든 창 한눈에', description: '앱의 모든 열린 창이 나란히 표시됩니다. 원하는 창을 즉시 찾으세요.' },
        {
          title: '원클릭 전환',
          description: '썸네일을 클릭하면 해당 창이 바로 앞으로 옵니다. 앱 전환기를 뒤질 필요 없습니다.',
        },
        {
          title: '완벽한 네이티브 감성',
          description: '부드러운 페이드 애니메이션과 macOS에 자연스럽게 녹아드는 디자인.',
        },
        { title: '100ms 응답', description: '마우스를 올리는 순간 미리보기가 나타납니다. 로딩 없음, 딜레이 없음.' },
        { title: '키보드 친화적', description: '탭으로 창을 탐색하고 엔터로 전환. 마우스 없이도 완벽하게 작동합니다.' },
      ],
      ctaHeadline: '당신의 독을 업그레이드하세요.',
      ctaSubtext: '일회성 구매',
      crossSell: '이것도 확인해 보세요',
      crossSellTagline: '네이티브처럼 느껴지는 윈도우 스냅.',
      seo: {
        title: 'SmoothPeek — 독 창 미리보기 앱',
        description: '독 아이콘에 마우스를 올려 모든 열린 창을 즉시 미리보세요. 클릭으로 정확히 원하는 창으로 이동. macOS 14 Sonoma 이상 필요.',
      },
      screenshotAlts: ['SmoothPeek 독 호버 창 미리보기', 'SmoothPeek 다중 창 미리보기 패널'],
    },
  },
  support: {
    headline: '지원',
    subheadline: '문제가 있나요? 도와드리겠습니다.',
    smoothsnap: {
      faqs: [
        {
          q: '어떤 macOS 버전이 지원되나요?',
          a: 'SmoothSnap은 macOS 13 Ventura 이상이 필요합니다. Apple Silicon과 Intel Mac 모두에서 네이티브로 실행됩니다.',
        },
        {
          q: 'Stage Manager와 함께 작동하나요?',
          a: '네. SmoothSnap은 Stage Manager를 완전히 인식하며 충돌 없이 함께 작동합니다.',
        },
        {
          q: '키보드 단축키를 커스텀할 수 있나요?',
          a: '네 — SmoothSnap 환경설정을 열어 스냅 단축키를 커스텀하세요.',
        },
      ],
    },
    smoothpeek: {
      faqs: [
        {
          q: 'SmoothPeek은 어떻게 작동하나요?',
          a: '독 아이콘에 마우스를 올리면 해당 앱의 모든 열린 창 썸네일이 담긴 패널이 표시됩니다. 썸네일을 클릭하면 즉시 해당 창으로 전환됩니다.',
        },
        {
          q: '어떤 macOS 버전을 지원하나요?',
          a: 'SmoothPeek은 macOS 14 Sonoma 이상이 필요합니다. Apple Silicon과 Intel Mac 모두에서 네이티브로 실행됩니다.',
        },
        {
          q: '왜 접근성 및 화면 녹화 권한이 필요한가요?',
          a: '접근성 권한은 독 아이콘의 호버 이벤트를 감지하는 데 사용됩니다. 화면 녹화 권한은 로컬 기기에서 창 썸네일을 캡처하는 데 사용됩니다. 데이터는 전송되거나 저장되지 않으며 모든 처리는 Mac 내부에서 이루어집니다.',
        },
      ],
    },
    contact: {
      headline: '추가 도움이 필요하신가요?',
      subtext: '이메일 주시면 영업일 기준 1일 이내에 답변 드립니다.',
      emailLabel: 'support@smoothmac.app',
    },
    seo: {
      title: '지원 — smooth-mac',
      description: 'SmoothSnap 또는 SmoothPeek 도움말. FAQ, 호환성 정보, 연락처.',
    },
  },
  privacy: {
    headline: '개인정보 처리방침',
    shortVersion: '요약: smooth-mac 앱은 개인 데이터를 수집하지 않습니다. 아무것도 기기 밖으로 나가지 않습니다.',
    sections: [
      {
        title: '데이터 수집',
        body: 'smooth-mac 앱(SmoothSnap, SmoothPeek)은 개인 데이터를 수집, 전송 또는 저장하지 않습니다. 계정도, 분석도, 텔레메트리도 없습니다.',
      },
      {
        title: '이 웹사이트',
        body: 'smoothmac.app은 Cloudflare 웹 분석을 사용합니다 — 쿠키가 필요 없고 개인 식별 정보를 수집하지 않는 개인정보 보호 분석 솔루션입니다. 추적 픽셀도, 서드파티 스크립트도 없습니다.',
      },
      {
        title: '시스템 권한',
        body: 'SmoothPeek은 Dock에서 활성화된 앱을 감지하고 기기 내에서 창 미리보기를 캡처하기 위한 목적으로만 손쉬운 사용(Accessibility) 및 화면 기록(Screen Recording) 권한을 요청합니다. 이 권한을 통해 수집된 데이터는 전송, 저장 또는 공유되지 않습니다. 시스템 설정 > 개인정보 보호 및 보안에서 언제든지 권한을 취소할 수 있습니다.',
      },
      {
        title: 'App Store',
        body: '구매는 Mac App Store를 통해 Apple이 처리합니다. 구매 시 수집되는 데이터에는 Apple의 개인정보 정책이 적용됩니다.',
      },
      {
        title: '문의',
        body: '궁금한 점이 있으시면 이메일 주세요',
      },
    ],
    lastUpdated: '최종 업데이트: 2026년 3월',
    seo: {
      title: '개인정보 처리방침 — smooth-mac',
      description: 'smooth-mac 개인정보 처리방침. 개인 데이터를 수집하지 않습니다.',
    },
  },
  notFound: {
    headline: '페이지를 찾을 수 없습니다.',
    subheadline: '해당 페이지는 없지만 — 우리 앱은 있습니다.',
    goHome: '홈으로 가기',
  },
};

export default ko;
