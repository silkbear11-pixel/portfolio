/* Portfolio content: edit translations and project details here. */
const translations = {
  en: {
    des15BookType: 'VISUAL DESIGN · EDITORIAL',
    des15BookName: 'Mirror, Connection, Color & Creativity',
    des15BookSummary: 'A 48-page final book exploring composition, visual relationships, color and creative expression.',
    des16RoomType: 'COLOR · DIGITAL ILLUSTRATION',
    des16RoomName: 'Digital Color — Interior Space',
    des16RoomSummary: 'Four digital color treatments for a single illustrated interior.',
    des16TypeType: 'TYPOGRAPHY · COMPOSITION',
    des16TypeName: 'Times New Roman — Type Composition',
    des16TypeSummary: 'Experimental type layout exploring scale, repetition and density.',
    des16NewtonType: 'POSTER DESIGN · IMAGE COMPOSITION',
    des16NewtonName: 'Isaac Newton — Visual Biography',
    des16NewtonSummary: 'A space-themed student poster combining typography and photographic imagery.',
    des16UclType: 'EVENT POSTER · DIGITAL COLLAGE',
    des16UclName: 'UEFA Champions League — Event Poster',
    des16UclSummary: 'Student-designed football event poster for the 2014/15 competition final.',

    des157PortalType: 'WEB DESIGN · HTML/CSS',
    des157PortalName: 'Course Portal',
    des157PortalSummary: 'Original course portal connecting interactive assignments and research.',
    des157MadType: 'INTERACTION · JAVASCRIPT',
    des157MadName: 'Campus Chaos — MadLibs',
    des157MadSummary: 'Interactive campus-themed word-input story generator with a working demo.',
    des157DeskType: 'PHOTO INTERACTION · WEB',
    des157DeskName: 'My Desk — Every Picture',
    des157DeskSummary: 'Interactive photo gallery with clickable images and working demo.',
    des157PigType: 'GAME UI · JAVASCRIPT',
    des157PigName: 'Game of Pig — The Dice Game',
    des157PigSummary: 'Playable dice game with score tracking, turns and sound controls.',
    des14FinalType: 'DRAWING · ILLUSTRATION',
    des14FinalName: 'Breathless World',
    des14FinalSummary: 'Environmental-themed final illustration drawn by hand.',
    des14SpaceType: 'DRAWING · CONCEPT',
    des14SpaceName: 'Space Cone',
    des14SpaceSummary: 'Concept drawing studying three-dimensional form and shading.',
    des14DrawingType: 'DRAWING · VISUAL STUDIES',
    des14DrawingName: 'Drawing & Visual Studies',
    des14DrawingSummary: 'Selected class drawings, figure studies, portrait and perspective work.',

    des127BusType: 'SUSTAINABLE · PRODUCT / URBAN',
    des127BusName: 'Eco-Powered Bus Stop Shelter',
    des127BusSummary: 'Solar-powered transit shelter concept with original renders and systems diagram.',
    des127HeatType: 'INFORMATION DESIGN · CLIMATE',
    des127HeatName: 'Heat Does Not Kill Equally',
    des127HeatSummary: 'Graphic poster about unequal heat-wave risk and social infrastructure.',
    des127EcoType: 'SUSTAINABILITY · SYSTEMS',
    des127EcoName: 'Ecodesign Strategy Wheel',
    des127EcoSummary: 'Lifecycle-based backpack redesign strategies and diagram.',
    des149CosmicType: 'INFORMATION DESIGN · TIMELINE',
    des149CosmicName: 'Cosmic Calendar',
    des149CosmicSummary: 'Visual timeline compressing cosmic history into one calendar year.',
    des149ClimateType: 'INFORMATION DESIGN · DATA',
    des149ClimateName: 'Climate Time Capsule',
    des149ClimateSummary: 'Layered dashboard illustrating key climate indicators in 2025.',

    'des115LettersType': 'TYPOGRAPHY · LETTERFORM STUDIES',
    'des115LettersName': 'Experimental Letterforms',
    'des115LettersSummary': 'Black-and-white compositions exploring letterform structure and contrast.',
    'des115LectureType': 'TYPOGRAPHY · INFORMATION DESIGN',
    'des115LectureName': 'Typographic Explorations',
    'des115LectureSummary': 'Lecture-series layouts comparing hierarchy and editorial structure.',
    'des115PatternType': 'EDITORIAL · PUBLICATION',
    'des115PatternName': 'Pattern — Editorial Publication',
    'des115PatternSummary': 'A twelve-page publication exploring repetition and natural patterns.',
    'des117BlogType': 'WEB · RESPONSIVE DESIGN',
    'des117BlogName': 'Responsive Blog Design',
    'des117BlogSummary': 'Desktop and mobile blog mockups with a coded five-post site.',
    'des117NarrativeType': 'WEB · STORYTELLING',
    'des117NarrativeName': 'Interactive Narrative',
    'des117NarrativeSummary': 'A coded personal narrative and coursework showcase with improved navigation.',

    'des112AggieType': 'UI/UX · MOBILE APP / FIGMA',
    'des112AggieName': 'Aggie Share — Student Marketplace',
    'des112AggieSummary': 'Student interviews, peer-to-peer exchange concept, and original Figma interface screens.',
    'des112BankType': 'UI/UX · RESEARCH / WIREFRAMES',
    'des112BankName': 'Banking Guide — UX Concept',
    'des112BankSummary': 'Banking usability study and educational interface proposal for Generation X.',

    skip: 'Skip to content', navWork: 'Work', navAbout: 'About', navContact: 'Contact', talk: "Let's talk",
    heroEyebrow: 'DESIGN PORTFOLIO / 2026', heroLine1: 'Designing', heroLine2: "what's next.",
    heroDesc: "I'm Hyunwoo — a designer exploring the space between visual storytelling, intuitive interfaces, and interactive experiences.",
    viewProjects: 'Explore my work', moreAbout: 'More about me',
    heroBottom: 'GRAPHIC DESIGN <span class="divider-star">✳</span> UI/UX <span class="divider-star">✳</span> INTERACTIVE MEDIA',
    scroll: 'SCROLL TO EXPLORE', workEyebrow: 'SELECTED WORK', workTitle: 'Ideas made tangible<span class="accent-period">.</span>',
    workIntro: 'A selection of coursework and experiments across design, code, and interaction.',
    filterAll: 'All work', filterWeb: 'Web & Interaction', filterVisual: 'Visual Design',
    portalType: 'WEB / INTERACTION', portalSummary: 'An interactive web project developed through design coursework.',
    ftpType: 'WEB / CREATIVE CODING', ftpSummary: 'A web-based project exploring layout and digital interaction.',
    experimentsType: 'INTERACTIVE MEDIA', experimentsName: 'Web Experiments', experimentsSummary: 'Small interactive exercises created with HTML, CSS, and JavaScript.',
    visualType: 'GRAPHIC / VISUAL DESIGN', visualName: 'Visual Design Collection', visualSummary: 'A space for typography, graphics, and visual communication work.',
    des50ModulesType: 'MODULAR / FORM EXPLORATION', des50ModulesName: 'Camouflaged & Pixelated', des50ModulesSummary: 'Modular geometry, physical studies, and spatial assemblies.',
    des50SeatingType: 'SPATIAL DESIGN / VISUALIZATION', des50SeatingName: 'Public Seating & Shade', des50SeatingSummary: 'An urban seating concept developed through models and renderings.',
    disclaimer: 'Visual previews are custom placeholders. Replace them with your actual project screenshots before publishing to employers.',
    aboutEyebrow: 'A LITTLE ABOUT ME', aboutTitle: 'Creative mind.<br>Curious by nature<span class="accent-period">.</span>',
    aboutLead: "I'm Hyunwoo Song, a design graduate from the University of California, Davis.",
    aboutBody: 'My interests span graphic design, UI/UX, digital experiences, and game interfaces. I enjoy bringing together visuals and functionality — from shaping a clear layout to building an interactive prototype.',
    aboutBody2: 'I work in English and Korean, and I value thoughtful details, accessible experiences, and learning through making.',
    educationLabel: 'EDUCATION', degree: 'B.A. in Design · 2026', focusLabel: 'FOCUS', focusValue: 'Visual + Interactive',
    skillsEyebrow: 'TOOLS & CAPABILITIES', skillsTitle: 'My creative toolkit<span class="accent-period">.</span>',
    designTools: 'Design tools', webTools: 'Web & prototyping', creativeAreas: 'Creative areas',
    creativeAreasList: 'UI/UX · Visual Design · Interactive Media · Motion Graphics',
    contactEyebrow: "WHAT'S NEXT?", contactTitle1: 'Have something', contactTitle2: 'in mind?',
    contactDesc: "I'm open to opportunities and creative conversations in visual design, UI/UX, and interactive experiences.",
    existingSite: 'Previous website', contactNote: 'Add your professional email address and LinkedIn URL in index.html when ready.',
    footerText: 'Designed & built with curiosity.', backTop: 'Back to top', visitProject: 'View project', close: 'Close',
    noLink: 'Add a confirmed project URL to script.js to enable this link.',
    dialogInfo: 'This is a starting description. Update it with actual project goals, your role, process, and results before sharing with recruiters.',
    'des111-drawitType': 'PROJECT 01 · PROCESSING / VISUAL SYSTEMS',
    'des111-drawitName': 'DrawIt — Generative Compositions',
    'des111-drawitSummary': 'A series of code-generated studies in rhythm, negative space, and color continuation.',
    'des111-inmotionType': 'PROJECT 02 · PROCESSING / MOTION',
    'des111-inmotionName': 'InMotion — Animated Studies',
    'des111-inmotionSummary': 'Four short coded motion explorations: a glowing phone, a repeating seasonal scene, color patterns, and a spring-like visual toy controlled by the mouse.',
    'des111-wheelsType': 'PROJECT 03 · PROCESSING / GENERATIVE PATTERNS',
    'des111-wheelsName': 'Bicycle Wheels — Free Patterns',
    'des111-wheelsSummary': 'An 8 × 8 grid of rotating bicycle-wheel motifs.',
    'des111-coolcolorType': 'PROJECT 04 · PROCESSING / GENERATIVE INTERACTION',
    'des111-coolcolorName': 'Cool Color — Branching Generative Art',
    'des111-coolcolorSummary': 'A mouse-triggered branching system influenced by generative-art processes.',
    'des111-glassType': 'FINAL PROJECT · PROCESSING / CREATIVE CODING',
    'des111-glassName': 'Cracked Glass — Generative Interaction',
    'des111-glassSummary': 'A generative interactive sketch where clicking an 800 × 800 canvas initiates multiple fracture lines that grow, turn, and sometimes branch under procedural rules.',
  },
  ko: {
    des15BookType: '시각 디자인 · 에디토리얼',
    des15BookName: '거울, 연결, 색채, 창의성',
    des15BookSummary: '구도, 시각적 관계, 색채와 창의적 표현을 다룬 48페이지 최종 디자인 북.',
    des16RoomType: '색채 · 디지털 일러스트레이션',
    des16RoomName: '디지털 컬러 — 실내 공간',
    des16RoomSummary: '한 가지 실내 공간 일러스트레이션에 적용한 네 가지 디지털 컬러.',
    des16TypeType: '타이포그래피 · 구성',
    des16TypeName: '타임스 뉴 로먼 — 타이포그래피 구성',
    des16TypeSummary: '크기, 반복, 밀도를 연구하는 실험적 타이포그래피 레이아웃.',
    des16NewtonType: '포스터 디자인 · 이미지 합성',
    des16NewtonName: '아이작 뉴턴 — 인물 포스터',
    des16NewtonSummary: '타이포그래피와 사진 이미지를 결합한 우주 테마 인물 포스터.',
    des16UclType: '이벤트 포스터 · 디지털 콜라주',
    des16UclName: 'UEFA 챔피언스리그 — 이벤트 포스터',
    des16UclSummary: '2014/15 대회 결승전을 위한 학생 제작 축구 이벤트 포스터.',

    des157PortalType: '웹 디자인 · HTML/CSS',
    des157PortalName: '수업 포털',
    des157PortalSummary: '인터랙티브 과제와 리서치를 연결한 웹 포털.',
    des157MadType: '인터랙션 · 자바스크립트',
    des157MadName: '캠퍼스 카오스 — 매드립스',
    des157MadSummary: '직접 체험 가능한 캠퍼스 스토리 생성기.',
    des157DeskType: '사진 인터랙션 · 웹',
    des157DeskName: '내 책상 — 에브리 픽처',
    des157DeskSummary: '사진을 클릭해 탐색하는 인터랙티브 갤러리.',
    des157PigType: '게임 UI · 자바스크립트',
    des157PigName: '피그 게임 — 주사위 게임',
    des157PigSummary: '점수 및 턴 관리와 사운드 설정이 있는 플레이 가능한 게임.',
    des14FinalType: '드로잉 · 일러스트레이션',
    des14FinalName: '숨 막히는 세상',
    des14FinalSummary: '환경을 주제로 한 수작업 최종 일러스트레이션.',
    des14SpaceType: '드로잉 · 콘셉트',
    des14SpaceName: '스페이스 콘',
    des14SpaceSummary: '입체적 형태와 명암을 탐구한 콘셉트 드로잉.',
    des14DrawingType: '드로잉 · 기초 표현',
    des14DrawingName: '드로잉과 시각적 탐구',
    des14DrawingSummary: '인체, 초상화, 원근 및 다양한 수업 드로잉.',

    des127BusType: '지속가능성 · 도시 디자인',
    des127BusName: '태양광 버스 정류장 쉘터',
    des127BusSummary: '태양광 기반 대중교통 쉘터 콘셉트, 렌더링과 시스템 설명.',
    des127HeatType: '정보 디자인 · 기후',
    des127HeatName: '폭염의 위험은 모두에게 같지 않다',
    des127HeatSummary: '폭염 위험의 불평등과 사회적 인프라를 다룬 포스터.',
    des127EcoType: '지속가능성 · 시스템',
    des127EcoName: '에코디자인 전략 휠',
    des127EcoSummary: '가방 생애주기와 지속가능한 제품 개선 방안.',
    des149CosmicType: '정보 디자인 · 타임라인',
    des149CosmicName: '우주 달력',
    des149CosmicSummary: '우주 역사를 1년 달력에 압축한 시각적 연대표.',
    des149ClimateType: '정보 디자인 · 데이터',
    des149ClimateName: '기후 타임캡슐',
    des149ClimateSummary: '2025년 주요 기후 지표를 한눈에 정리한 대시보드.',

    'des115LettersType': '타이포그래피 · 레터폼 연구',
    'des115LettersName': '실험적 레터폼 디자인',
    'des115LettersSummary': '글자의 구조와 대비를 탐색한 흑백 타이포그래피 구성.',
    'des115LectureType': '타이포그래피 · 정보 디자인',
    'des115LectureName': '타이포그래피 강연 시리즈',
    'des115LectureSummary': '강연 정보의 위계와 편집 구조를 비교한 레이아웃 연구.',
    'des115PatternType': '편집 디자인 · 출판',
    'des115PatternName': 'Pattern — 편집 디자인 출판물',
    'des115PatternSummary': '자연의 패턴과 반복을 탐구한 12페이지 편집 디자인.',
    'des117BlogType': '웹 · 반응형 디자인',
    'des117BlogName': '반응형 블로그 디자인',
    'des117BlogSummary': '데스크톱·모바일 시안과 5개 게시물로 구현한 블로그.',
    'des117NarrativeType': '웹 · 스토리텔링',
    'des117NarrativeName': '인터랙티브 내러티브',
    'des117NarrativeSummary': '탐색성과 정보 위계를 개선한 자기소개 및 수업 작업물 웹사이트.',

    'des112AggieType': 'UI/UX · 모바일 앱 / FIGMA',
    'des112AggieName': 'Aggie Share — 학생 간 교재 거래 앱',
    'des112AggieSummary': '학생 인터뷰와 교재 교환 서비스 기획, 실제 Figma 모바일 UI 디자인.',
    'des112BankType': 'UI/UX · 리서치 / 와이어프레임',
    'des112BankName': 'Banking Guide — UX 기획',
    'des112BankSummary': 'X세대 사용자를 위한 온라인 금융 UX 조사와 학습형 인터페이스 제안.',

    skip: '본문으로 이동', navWork: '작업물', navAbout: '소개', navContact: '연락', talk: '연락하기',
    heroEyebrow: '디자인 포트폴리오 / 2026', heroLine1: '다음 경험을', heroLine2: '디자인합니다.',
    heroDesc: '안녕하세요, 송현우입니다. 시각적 스토리텔링, 직관적인 인터페이스, 인터랙티브 경험이 만나는 지점을 탐구하는 디자이너입니다.',
    viewProjects: '프로젝트 보기', moreAbout: '더 알아보기',
    heroBottom: '그래픽 디자인 <span class="divider-star">✳</span> UI/UX <span class="divider-star">✳</span> 인터랙티브 미디어',
    scroll: '스크롤해서 둘러보기', workEyebrow: '주요 작업물', workTitle: '아이디어를 현실로<span class="accent-period">.</span>',
    workIntro: '디자인과 코드, 인터랙션을 넘나드는 수업 프로젝트와 실험을 모았습니다.',
    filterAll: '전체', filterWeb: '웹 & 인터랙션', filterVisual: '비주얼 디자인',
    portalType: '웹 / 인터랙션', portalSummary: '디자인 수업에서 제작한 인터랙티브 웹 프로젝트입니다.',
    ftpType: '웹 / 크리에이티브 코딩', ftpSummary: '레이아웃과 디지털 인터랙션을 탐구한 웹 기반 프로젝트입니다.',
    experimentsType: '인터랙티브 미디어', experimentsName: '웹 실험', experimentsSummary: 'HTML, CSS, JavaScript를 활용한 소규모 인터랙티브 실습입니다.',
    visualType: '그래픽 / 비주얼 디자인', visualName: '비주얼 디자인 모음', visualSummary: '타이포그래피, 그래픽, 시각 커뮤니케이션 작업을 소개할 공간입니다.',
    des50ModulesType: '모듈 / 형태 연구', des50ModulesName: 'Camouflaged & Pixelated', des50ModulesSummary: '기하학적 모듈과 실물 모형, 입체 구조의 발전 과정입니다.',
    des50SeatingType: '공간 디자인 / 시각화', des50SeatingName: '공공 좌석과 그늘 구조물', des50SeatingSummary: '모형과 렌더링을 통해 발전시킨 도심 좌석 디자인 콘셉트입니다.',
    disclaimer: '현재 프로젝트 이미지는 임시 디자인입니다. 채용 지원 전에 실제 작업물 스크린샷으로 교체하세요.',
    aboutEyebrow: '나에 대한 소개', aboutTitle: '창의적으로 생각하고<br>끊임없이 탐구합니다<span class="accent-period">.</span>',
    aboutLead: '안녕하세요. UC Davis에서 디자인을 전공한 송현우입니다.',
    aboutBody: '그래픽 디자인, UI/UX, 디지털 경험, 게임 인터페이스에 관심이 있습니다. 명확한 레이아웃부터 인터랙티브 프로토타입까지, 시각적 완성도와 기능성을 함께 고민합니다.',
    aboutBody2: '한국어와 영어를 사용하며, 세심한 디테일과 접근성, 직접 만들며 배우는 과정을 중요하게 생각합니다.',
    educationLabel: '학력', degree: '디자인 학사 · 2026', focusLabel: '관심 분야', focusValue: '비주얼 + 인터랙션',
    skillsEyebrow: '도구 및 역량', skillsTitle: '나의 디자인 도구<span class="accent-period">.</span>',
    designTools: '디자인 도구', webTools: '웹 & 프로토타이핑', creativeAreas: '디자인 분야',
    creativeAreasList: 'UI/UX · 시각 디자인 · 인터랙티브 미디어 · 모션 그래픽',
    contactEyebrow: '다음은 무엇일까요?', contactTitle1: '함께할 아이디어가', contactTitle2: '있으신가요?',
    contactDesc: '시각 디자인, UI/UX, 인터랙티브 경험 분야의 채용 기회와 협업에 열려 있습니다.',
    existingSite: '이전 웹사이트', contactNote: '연락용 이메일과 LinkedIn 주소가 준비되면 index.html에 추가하세요.',
    footerText: '호기심을 담아 디자인하고 만들었습니다.', backTop: '맨 위로', visitProject: '프로젝트 보기', close: '닫기',
    noLink: 'script.js에 확인된 프로젝트 URL을 추가하면 링크가 활성화됩니다.',
    dialogInfo: '현재 내용은 시작용 설명입니다. 채용 지원 전에 실제 목표, 담당 역할, 제작 과정, 결과를 추가하세요.',
    'des111-drawitType': '프로젝트 01 · 프로세싱 / 비주얼 시스템',
    'des111-drawitName': 'DrawIt — 생성형 구성 실험',
    'des111-drawitSummary': '선의 리듬, 네거티브 스페이스, 색의 연속성을 코드로 탐구한 작업입니다. 기본 기하학 도형을 반복하고 배열하여 시각적 시스템을 구성했습니다.',
    'des111-inmotionType': '프로젝트 02 · 프로세싱 / 모션',
    'des111-inmotionName': 'InMotion — 애니메이션 실험',
    'des111-inmotionSummary': '빛나는 휴대전화, 계절의 반복, 색 패턴, 마우스로 조작하는 스프링 형태의 비주얼 토이 등 네 가지 모션 실험입니다.',
    'des111-wheelsType': '프로젝트 03 · 프로세싱 / 생성형 패턴',
    'des111-wheelsName': 'Bicycle Wheels — 자유 패턴',
    'des111-wheelsSummary': '회전하는 자전거 바퀴 모티프를 8 × 8 격자에 반복했습니다. 방사형 바큇살, 미세한 크기 변화, 셀별 시간차로 리듬 있는 패턴을 만듭니다.',
    'des111-coolcolorType': '프로젝트 04 · 프로세싱 / 생성형 인터랙션',
    'des111-coolcolorName': 'Cool Color — 분기형 생성 아트',
    'des111-coolcolorSummary': '생성형 예술의 제작 방식을 참고한 클릭 기반 분기 시스템입니다. 사용자가 선택한 지점에서 가지가 자라며 무작위 규칙에 따라 방향이 변합니다.',
    'des111-glassType': '기말 프로젝트 · 프로세싱 / 크리에이티브 코딩',
    'des111-glassName': 'Cracked Glass — 생성형 인터랙션',
    'des111-glassSummary': '800 × 800 캔버스를 클릭하면 여러 균열선이 생성되고, 정해진 규칙과 무작위 값에 따라 성장하고 방향을 바꾸며 때로 분기하는 인터랙티브 스케치입니다.',
  }
};

// IMPORTANT: replace the null URLs with real, public project links when available.
// The Portal, FTP, and Web Experiments names are based on known coursework;
// all decorative preview artwork is placeholder artwork, NOT screenshots.
const projects = {
  portal: {
    title: {en: 'Portal', ko: 'Portal'}, type: {en: 'WEB / INTERACTION', ko: '웹 / 인터랙션'},
    description: {
      en: 'A coursework-based interactive web experience. This case study can show the original assignment, your design decisions, implementation details, and final interaction.',
      ko: '수업을 통해 제작한 인터랙티브 웹 경험입니다. 실제 과제 목표, 디자인 결정, 구현 방법, 최종 인터랙션을 이곳에 정리할 수 있습니다.'
    }, tags: ['HTML', 'CSS', 'JavaScript'], url: null

  },
  ftp: {
    title: {en: 'FTP', ko: 'FTP'}, type: {en: 'WEB / CREATIVE CODING', ko: '웹 / 크리에이티브 코딩'},
    description: {
      en: 'A web project from your coursework. Replace this introductory text with the accurate project brief, screenshots, your specific contributions, and what you learned.',
      ko: '수업에서 작업한 웹 프로젝트입니다. 실제 프로젝트 설명, 스크린샷, 담당 작업, 배운 점으로 이 소개를 교체하세요.'
    }, tags: ['Web Design', 'Coursework'], url: null
  },
  experiments: {
    title: {en: 'Web Experiments', ko: '웹 실험'}, type: {en: 'INTERACTIVE MEDIA', ko: '인터랙티브 미디어'},
    description: {
      en: 'A collection page for smaller interactive exercises such as interface explorations, animations, and front-end experiments. Add only the exercises you actually completed.',
      ko: '인터페이스 실험, 애니메이션, 프런트엔드 실습 등을 모아둘 공간입니다. 실제로 완성한 작업만 추가하세요.'
    }, tags: ['HTML', 'CSS', 'JavaScript'], url: null
  },
  visual: {
    title: {en: 'Visual Design Collection', ko: '비주얼 디자인 모음'}, type: {en: 'GRAPHIC / VISUAL DESIGN', ko: '그래픽 / 비주얼 디자인'},
    description: {
      en: 'A placeholder collection for your real typography, visual communication, or graphic design work. Add authentic project photos, design rationale, and the tools used.',
      ko: '타이포그래피, 시각 커뮤니케이션, 그래픽 디자인 작업을 채워 넣을 공간입니다. 실제 이미지, 제작 의도, 사용 도구를 추가하세요.'
    }, tags: ['Figma', 'Adobe Creative Cloud'], url: null
  }
};

const languageButtons = document.querySelectorAll('.lang-button');
const filterButtons = document.querySelectorAll('.filter-pill');
const cards = document.querySelectorAll('.project-card');
const dialog = document.querySelector('#project-dialog');
const dialogLink = document.querySelector('#dialog-link');
const dialogNote = document.querySelector('#dialog-note');
let currentLanguage = 'en';
let currentProject = null;

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.title = lang === 'ko' ? '송현우 — 크리에이티브 디자이너' : 'Hyunwoo Song — Creative Designer';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = translations[lang][element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  languageButtons.forEach((button) => {
    const selected = button.dataset.lang === lang;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  document.querySelector('#menu-toggle').setAttribute('aria-label', lang === 'ko' ? '메뉴 열기' : 'Open menu');
  document.querySelectorAll('[data-project]').forEach((button) => {
    const name = projects[button.dataset.project].title[lang];
    button.setAttribute('aria-label', lang === 'ko' ? `${name} 프로젝트 상세 보기` : `View ${name} project details`);
  });
  if (dialog.open && currentProject) renderProject(currentProject);
  try { localStorage.setItem('portfolio-language', lang); } catch (error) { /* Storage is optional. */ }
}

function renderProject(id) {
  const project = projects[id];
  if (!project) return;
  currentProject = id;
  document.querySelector('#dialog-title').textContent = project.title[currentLanguage];
  document.querySelector('#dialog-type').textContent = project.type[currentLanguage];
  document.querySelector('#dialog-description').textContent = project.description[currentLanguage];
  const tags = document.querySelector('#dialog-tags');
  tags.replaceChildren();
  project.tags.forEach((tag) => {
    const chip = document.createElement('span');
    chip.textContent = tag;
    tags.appendChild(chip);
  });
  dialogLink.hidden = !project.url;
  if (project.url) dialogLink.href = project.url;
  else dialogLink.removeAttribute('href');
  dialogNote.textContent = translations[currentLanguage][project.url ? 'dialogInfo' : 'noLink'];
}

languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
filterButtons.forEach((button) => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filterButtons.forEach((item) => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  cards.forEach((card) => { card.hidden = selected !== 'all' && card.dataset.category !== selected; });
}));

document.querySelectorAll('[data-project]').forEach((button) => button.addEventListener('click', () => {
  renderProject(button.dataset.project);
  if (typeof dialog.showModal === 'function') dialog.showModal();
}));
function closeDialog() { if (dialog.open) dialog.close(); }
document.querySelector('#dialog-close').addEventListener('click', closeDialog);
document.querySelector('#dialog-back').addEventListener('click', closeDialog);
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });

const menuButton = document.querySelector('#menu-toggle');
const nav = document.querySelector('#primary-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}

document.querySelector('#year').textContent = new Date().getFullYear();
let preferredLanguage = 'en';
try { preferredLanguage = localStorage.getItem('portfolio-language') || 'en'; } catch (error) { /* Storage is optional. */ }
setLanguage(preferredLanguage === 'ko' ? 'ko' : 'en');
