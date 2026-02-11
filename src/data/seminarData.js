export const seminarData = {
    title: "AI 목회 활용 세미나",
    description: "인공지능을 통해 목회 사역의 지평을 넓히는 실무 세미나",
    eventInfo: {
        date: "2026년 3월 2일(월) 10시-12시",
        location: "대구성동교회",
        fee: "2만원",
        hookingMessage: "인공지능을 통해 설교 준비부터 이미지 생성, 슬라이드 구성까지 목회 사역의 효율을 극대화하는 방법을 제안합니다."
    },
    sessions: [
        {
            id: 1,
            title: "구글 제미나이(Gemini)로 자료 수집하기",
            content: "설교 예화, 신학적 배경, 성경 주석 등 방대한 자료를 AI를 통해 효율적으로 수집하고 분석하는 방법을 배웁니다. 구글 검색 연동 기능을 통한 최신 정보 수집이 핵심입니다.",
            method: "Gemini 앱/웹 접속 -> '최신 신학적 관점에서 본 성령론 요약해줘' 등 실습"
        },
        {
            id: 2,
            title: "AI 이미지 생성으로 생동감 넘치는 주보 만들기",
            content: "구글의 이미지 생성 AI를 활용하여 성경 이야기나 주일학교 교육 자료를 시각화합니다. 텍스트를 이미지로 바꾸는 프롬프트 전략을 익힙니다.",
            method: "Imagen/Gemini 활용 -> '호수 위에서 설교하시는 예수님의 모습을 유화 스타일로 그려줘' 실습"
        },
        {
            id: 3,
            title: "NotebookLM으로 발표 자료 및 슬라이드 구성",
            content: "수집한 텍스트 자료를 NotebookLM에 업로드하여 핵심 요약을 추출하고, 이를 기반으로 발표 슬라이드나 강의안의 구조를 잡는 자동화 기술을 배웁니다.",
            method: "자료 업로드 -> 핵심 Q&A 생성 -> 슬라이드 개요 도출"
        },
        {
            id: 4,
            title: "더 나은 결과를 만드는 프롬프트 엔지니어링",
            content: "AI와 대화하는 '기술'을 배웁니다. 역할 부여(Role), 맥락 설정(Context), 형식 지정(Format)의 3단계 공식을 통해 목회적 맥락에 최적화된 답변을 얻는 법을 다룹니다.",
            method: "단답형 질문 vs 맥락형 질문 비교 실습"
        }
    ],
    registrationFields: [
        { id: "name", label: "이름", type: "text", placeholder: "성함을 입력해 주세요", required: true },
        { id: "church", label: "시무교회", type: "text", placeholder: "교회 이름을 입력해 주세요", required: true },
        { id: "denomination", label: "교단", type: "text", placeholder: "소속 교단을 입력해 주세요", required: true },
        { id: "email", label: "구글 메일 주소", type: "email", placeholder: "example@gmail.com", description: "@gmail.com 형식을 권장합니다.", required: true },
        {
            id: "mail_response",
            label: "메일 응답 설정",
            type: "select",
            options: ["정기 안내 메일 수신", "세미나 관련 긴급 안내만 수신"],
            required: true
        }
    ],
    diagnosis: [
        {
            id: "yt_mobile",
            question: "1. 휴대폰에서 유튜브 앱을 켰을 때, 특정 채널을 '구독'할 수 있나요?",
            description: "구독 버튼이 활성화된다면 이미 휴대폰에 구글 로그인이 되어 있는 상태입니다. (안 되어 있다면 로그인 창이 뜹니다)",
            type: "select",
            options: ["네, 구독 중인 채널이 있습니다.", "아니요, 로그인이 필요하다고 뜹니다.", "잘 모르겠습니다."]
        },
        {
            id: "yt_pc",
            question: "2. 노트북 브라우저(크롬 등)에서 유튜브 접속 시 우측 상단에 '프로필 사진'이나 '이름'이 보이나요?",
            description: "로그인된 상태라면 본인의 정보가 보입니다. 보이지 않는다면 미리 로그인을 해주셔야 세미나 참여가 원활합니다.",
            type: "select",
            options: ["네, 보입니다.", "아니요, '로그인' 버튼만 보입니다."]
        },
        {
            id: "gemini_check",
            question: "3. 지금 바로 [구글 제미나이](https://gemini.google.com/)에 접속해 보세요. 자동으로 로그인이 되나요?",
            description: "노트북에서 직접 클릭해 보세요. 비밀번호를 묻는다면 그 계정의 비밀번호를 미리 메모해 오셔야 합니다.",
            type: "select",
            options: ["자동으로 바로 입장됩니다.", "비밀번호를 입력하라고 나옵니다.", "계정 자체가 없다고 나옵니다."]
        },
        {
            id: "ai_help",
            question: "4. 지금 어떤 일을 AI의 도움을 받고 싶습니까? 또는 당신에게 비서가 3명 있다면 어떤 일을 맡겨보겠습니까?",
            description: "AI를 통해 해결하고 싶은 가장 절실한 문제를 적어주세요.",
            type: "textarea",
            required: true
        },
        {
            id: "pain_point",
            question: "5. '이런 일을 좀 쉽게 하는 방법은 없을까' 목회 현장에서 가장 오래 시간을 소비하게 하는 작업은 무엇인가요?",
            description: "업무 효율화를 위한 실습 사례 선정에 활용됩니다.",
            type: "textarea",
            required: true
        }
    ],
    notebookLM: {
        title: "노트북LM(NotebookLM) 로그인 안내",
        steps: [
            "1. [NotebookLM 공식 사이트](https://notebooklm.google.com/)에 접속합니다.",
            "2. 화면 우측 상단의 'Try NotebookLM' 버튼을 클릭합니다.",
            "3. 이미 구글 로그인이 되어 있다면 바로 사용이 가능하며, 아닐 경우 구글 계정으로 로그인해 주세요.",
            "4. 첫 화면에서 'Welcome' 메시지가 나오면 성공입니다!"
        ],
        tip: "NotebookLM은 별도의 설치 없이 웹브라우저에서 바로 실행됩니다."
    },
    preLearning: [
        {
            title: "필수 시청 1: 구글 계정 보안 관리",
            url: "https://www.youtube.com/results?search_query=구글+계정+비밀번호+찾기+방법",
            description: "현장에서 로그인이 안 되어 시간을 낭비하지 않도록 반드시 미리 확인해 주세요."
        },
        {
            title: "필수 시청 2: 제미나이(Gemini) 기초 가이드",
            url: "https://www.youtube.com/results?search_query=구글+제미나이+사용법",
            description: "AI와 처음 대화하는 법을 가볍게 익히고 오시면 실습이 훨씬 수월합니다."
        }
    ]
};
