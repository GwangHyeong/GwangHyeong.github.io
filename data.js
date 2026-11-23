// ============================================================
//  사이트 내용은 이 파일만 고치면 됩니다.
//  프로젝트·논문이 늘어나면 해당 배열에 항목을 하나씩 추가하세요.
//  (항목 순서 = 화면에 보이는 순서. 최신 것을 맨 위에 두세요.)
// ============================================================

const SITE = {
  name: "이광형",
  nameEn: "Gwanghyeong Lee",
  role: "연구원 · AI응용연구센터 지능정보융합팀",
  org: "한국전자기술연구원 (KETI)",
  tagline: "초분광 영상과 컴퓨터 비전을 활용하는 AI 연구자",

  links: {
    email: "lightbro@keti.re.kr",
    github: "",                               // GitHub 주소 (비워두면 표시 안 함)
    scholar: "",                              // Google Scholar 주소 (없으면 비워두기)
    cv: "",                                   // CV PDF 경로, 예: "cv.pdf"
  },

  about: [
    "초분광(hyperspectral) 영상 분석과 컴퓨터 비전을 중심으로, 영상 데이터에서 의미 있는 정보를 추출하는 AI 모델을 연구·개발하고 있습니다.",
    "데이터 수집 체계 구축부터 딥러닝 모델 설계·학습, 현장에서 바로 쓰는 데스크톱·웹 애플리케이션 개발까지 전 과정을 직접 수행합니다.",
  ],

  interests: [
    "초분광 영상 분석", "Computer Vision", "Deep Learning",
    "Object Detection", "Desktop / Web App",
  ],

  experience: [
    {
      period: "2022.01 — 현재",
      title: "연구원",
      org: "한국전자기술연구원 · AI응용연구센터 지능정보융합팀",
      desc: "초분광 영상 분석 SW 개발, 컴퓨터 비전 기반 딥러닝 모델 연구 및 응용 시스템 개발",
    },
    {
      period: "2021.08 — 2021.12",
      title: "연구원",
      org: "전주대학교 빅데이터센터",
      desc: "",
    },
  ],

  education: [
    { period: "2024.03 — 현재", title: "컴퓨터공학 박사과정", org: "전북대학교" },
    { period: "2020 — 2022",    title: "AgroAI 석사",        org: "전주대학교" },
    { period: "2015 — 2020",    title: "스마트미디어 학사",   org: "전주대학교" },
  ],

  // R&D 과제 목록 — 수상/자격증처럼 한 줄씩 표시됩니다.
  // period: 기간 / title: 과제명 / org: 재원 · 사업명 / role: 과제성격(주관·참여) 또는 담당 역할
  projects: [
    {
      period: "2026.04 — 2030.12",
      title: "시설농업 AI로봇 실증 기반 구축 사업",
      org: "산업부 · 산업핵심기술개발사업",
      role: "주관",
    },
    {
      period: "2025.04 — 2027.12",
      title: "수확 후 전 과정 무인 자동화 시스템 개발 및 실증",
      org: "농림부 · 스마트팜다부처패키지혁신기술개발사업",
      role: "참여/공동",
    },
    {
      period: "2025.04 — 2029.12",
      title: "상가·공장·폐교 등 농촌 유휴시설 활용·연계 수직농장 모델 개발",
      org: "농림부 · 농림축산식품연구개발사업",
      role: "주관",
    },
    {
      period: "2023 — 2027",
      title: "디지털 트윈 기반 특용 작물 자율 재배 플랫폼 개발",
      org: "산업부 · 산업부기타사업",
      role: "주관",
    },
    {
      period: "2022.08 — 2022.12",
      title: "영상처리 기술을 이용한 아시아매미나방(AGM) 탐지장비 개발",
      org: "연구용역",
      role: "",
    },
    {
      period: "2022.04 — 2024.12",
      title: "빅데이터 기반 디지털육종 영상 표준화 기술개발",
      org: "농림부 · 디지털육종전환기술개발사업",
      role: "",
    },
  ],

  // type: "journal" | "conference" | "patent" 등 자유롭게
  publications: [
    {
      year: "2026",
      title: "Vision-Based Strawberry Ripeness Grading for Harvest Decision Support in Smart Greenhouses",
      authors: "Gwanghyeong Lee, Deepak Ghimire, Sewoon Cho, Jihwan Seo, Sunghwan Jeong, Byoungjun Kim",
      venue: "Agriculture, 16, 1550",
      type: "journal",
      link: "https://doi.org/10.3390/agriculture16141550",
    },
    {
      year: "2025",
      title: "FUSE-Net: Multi-Scale CNN for NIR Band Prediction from RGB Using GNDVI-Guided Green Channel Enhancement",
      authors: "Gwanghyeong Lee, Deepak Ghimire, Donghoon Kim, Sewoon Cho, Byoungjun Kim, Sunghwan Jeong",
      venue: "Sensors, 25(13), 4076",
      type: "journal",
      link: "https://doi.org/10.3390/s25134076",
    },
  ],

  awards: [
    { year: "2024.12", title: "농림축산식품부장관상" },
    { year: "2020",    title: "정보처리기사" },
    { year: "2019",    title: "IoT지식능력검정 (KIOT)" },
  ],
};
