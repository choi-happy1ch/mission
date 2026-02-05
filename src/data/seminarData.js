export const seminarData = {
    title: "AI 목회 활용 세미나",
    description: "인공지능을 통해 목회 사역의 지평을 넓히는 실무 세미나",
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
    diagnosis: [
        {
            id: "q1",
            question: "구글 계정(Gmail) 주소와 비밀번호를 정확히 알고 계신가요?",
            description: "세미나 당일 로그인을 위해 필수입니다. 비밀번호를 모르신다면 미리 [구글 비밀번호 찾기](https://accounts.google.com/signin/recovery)를 통해 재설정해 주세요.",
            required: true
        },
        {
            id: "q2",
            question: "AI 도구(ChatGPT, Gemini 등)를 사용해보신 적이 있나요?",
            description: "기술 수준에 맞춘 맞춤형 지원을 위해 필요합니다.",
            type: "select",
            options: ["처음입니다", "가끔 사용합니다", "자주 사용합니다"]
        },
        {
            id: "q3",
            question: "세미나에 지참하실 기기는 무엇인가요?",
            description: "실습 환경 구성을 위해 필요합니다.",
            type: "multi",
            options: ["노트북", "태블릿", "스마트폰"]
        }
    ],
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
