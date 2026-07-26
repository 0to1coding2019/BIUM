// BIUM - Empty Your Fridge. Fill Your Table.
// Core Web Application Logic with AdSense High-Quality Compliance & Permalinks

// --- 1. Recipe Database ---
const RECIPE_DATA = [
    {
        id: "rec-avocado-toast",
        title: "아보카도 에그 토스트",
        category: "quick",
        categoryKo: "10분한끼",
        description: "바쁜 아침 10분만에 고급스러운 브런치를 식탁 위에 완성하세요. 크러쉬드 레드페퍼가 느끼함을 잡아줍니다.",
        image: "images/avocado_toast.jpg",
        prepTime: 10,
        rating: 4.8,
        likes: 124,
        isLiked: false,
        userRating: 0,
        timerSeconds: 300,
        nutrition: {
            calories: 320,
            carbs: 24,
            protein: 12,
            fat: 20
        },
        replacementTips: "아보카도가 없다면 으깬 바나나나 크림치즈를 사용해도 고소한 브런치를 만드실 수 있습니다.",
        ingredients: [
            { name: "식빵", quantity: 1, unit: "장" },
            { name: "아보카도", quantity: 0.5, unit: "개" },
            { name: "계란", quantity: 1, unit: "개" },
            { name: "크러쉬드 레드페퍼", quantity: 0.5, unit: "작은술" },
            { name: "올리브오일", quantity: 1, unit: "큰술" },
            { name: "소금", quantity: 0.2, unit: "작은술" }
        ],
        steps: [
            "식빵을 토스터기나 팬에 앞뒤로 바삭하게 굽습니다.",
            "볼에 아보카도 과육을 넣고 포크로 으깨준 뒤, 올리브오일과 소금을 살짝 넣어 섞어줍니다.",
            "팬에 올리브오일을 약간 두르고 계란 프라이를 반숙으로 굽거나 수란을 만듭니다.",
            "바삭하게 구운 식빵 위에 으깬 아보카도를 넓게 펴 바릅니다.",
            "그 위에 정성껏 준비한 계란을 얹고, 마지막으로 크러쉬드 레드페퍼를 솔솔 뿌려 완성합니다."
        ],
        filters: ["easy", "low-calorie"]
    },
    {
        id: "rec-soy-egg-rice",
        title: "버터 간장 계란밥",
        category: "quick",
        categoryKo: "10분한끼",
        description: "추억의 맛이자 소울 푸드. 고소한 버터와 참기름이 입안 가득 감싸안는 초간단 한끼 식사입니다.",
        image: "images/butter_egg_rice.jpg",
        prepTime: 5,
        rating: 4.9,
        likes: 312,
        isLiked: false,
        userRating: 0,
        timerSeconds: 180,
        nutrition: {
            calories: 380,
            carbs: 55,
            protein: 10,
            fat: 12
        },
        replacementTips: "버터 대신 마가린이나 들기름을 사용해도 깊은 풍미를 내실 수 있습니다.",
        ingredients: [
            { name: "밥", quantity: 1, unit: "공기" },
            { name: "계란", quantity: 2, unit: "개" },
            { name: "버터", quantity: 1, unit: "조각 (10g)" },
            { name: "간장", quantity: 1.5, unit: "큰술" },
            { name: "참기름", quantity: 1, unit: "큰술" },
            { name: "통깨", quantity: 0.5, unit: "작은술" }
        ],
        steps: [
            "따뜻한 갓 지은 밥을 대접에 넉넉히 담아줍니다.",
            "뜨거운 밥 한가운데에 버터 조각을 넣어 밥의 잔열로 사르르 녹입니다.",
            "팬에 식용유를 살짝 두르고 계란 프라이 두 개를 반숙(노른자가 살아있게)으로 부쳐냅니다.",
            "버터가 녹은 밥 위에 계란 프라이를 올립니다.",
            "진간장과 참기름을 골고루 둘러준 뒤, 기호에 맞게 비비고 통깨를 뿌려 완성합니다."
        ],
        filters: ["easy"]
    },
    {
        id: "rec-salmon-poke",
        title: "훈제연어 아보카도 포케",
        category: "fit",
        categoryKo: "핏한끼",
        description: "다이어트와 헬시 라이프를 위한 최상의 건강식. 오메가-3와 고단백을 한번에 섭취해보세요.",
        image: "images/salmon_bowl.jpg",
        prepTime: 15,
        rating: 4.7,
        likes: 256,
        isLiked: false,
        userRating: 0,
        timerSeconds: 0,
        nutrition: {
            calories: 450,
            carbs: 35,
            protein: 28,
            fat: 22
        },
        replacementTips: "훈제연어 대신 캔참치나 자숙 닭가슴살을 찢어 넣어 포케로 만드셔도 훌륭합니다.",
        ingredients: [
            { name: "훈제연어", quantity: 100, unit: "g" },
            { name: "아보카도", quantity: 0.5, unit: "개" },
            { name: "현미밥", quantity: 0.7, unit: "공기" },
            { name: "오이", quantity: 0.3, unit: "개" },
            { name: "에다마메", quantity: 2, unit: "큰술" },
            { name: "간장", quantity: 1, unit: "큰술" },
            { name: "참기름", quantity: 0.5, unit: "큰술" }
        ],
        steps: [
            "오이를 깨끗이 씻어 얇게 동글동글 썰거나 깍둑썰어 줍니다.",
            "아보카도는 반으로 갈라 씨를 제거하고 한입 크기로 슬라이스합니다.",
            "훈제연어는 먹기 좋은 크기로 썰어 참기름, 간장 약간으로 가볍게 밑간을 해 둡니다.",
            "샐러드 보울 밑에 따뜻한 현미밥을 넓게 깔아줍니다.",
            "현미밥 위에 준비된 훈제연어, 아보카도, 오이, 에다마메를 색감 조화롭게 정렬하여 얹어 완성합니다."
        ],
        filters: ["high-protein", "low-calorie"]
    },
    {
        id: "rec-chicken-cabbage",
        title: "닭가슴살 양배추 쌈롤",
        category: "fit",
        categoryKo: "핏한끼",
        description: "양배추의 달큰함과 담백한 닭가슴살의 깔끔한 조합. 포만감은 가득하면서 칼로리 부담은 낮췄습니다.",
        image: "images/chicken_cabbage_roll.jpg",
        prepTime: 15,
        rating: 4.6,
        likes: 189,
        isLiked: false,
        userRating: 0,
        timerSeconds: 420,
        nutrition: {
            calories: 220,
            carbs: 12,
            protein: 26,
            fat: 4
        },
        replacementTips: "닭가슴살 대신 두부나 다진 돼지고기를 쪄서 쌈을 싸면 풍미가 더욱 좋아집니다.",
        ingredients: [
            { name: "닭가슴살", quantity: 120, unit: "g" },
            { name: "양배추", quantity: 6, unit: "잎" },
            { name: "마늘", quantity: 2, unit: "쪽" },
            { name: "고추장", quantity: 0.5, unit: "큰술" },
            { name: "참기름", quantity: 0.5, unit: "작은술" }
        ],
        steps: [
            "양배추 잎을 흐르는 물에 깨끗이 씻어 심지 부분을 살짝 제거합니다.",
            "김이 오른 찜기에 양배추를 넣고 약 7분간 부드럽게 쪄내어 식힙니다.",
            "닭가슴살은 끓는 물에 삶거나 시판용 제품을 결대로 잘게 찢어 놓습니다.",
            "찐 양배추 잎을 바닥에 넓게 펴고, 찢어 둔 닭가슴살과 얇게 저민 마늘을 얹습니다.",
            "고추장과 참기름을 섞은 소스를 가볍게 발라 김밥처럼 돌돌 말아 한입 크기로 썰어 완성합니다."
        ],
        filters: ["high-protein", "low-calorie", "easy"]
    },
    {
        id: "rec-kimchi-rice",
        title: "베이컨 김치볶음밥",
        category: "fridge",
        categoryKo: "냉털",
        description: "최고의 국민 냉털 메뉴! 신김치와 기름진 베이컨, 알싸한 대파기름이 만나면 실패할 수 없는 미식이 탄생합니다.",
        image: "images/kimchi_fried_rice.jpg",
        prepTime: 12,
        rating: 4.9,
        likes: 412,
        isLiked: false,
        userRating: 0,
        timerSeconds: 480,
        nutrition: {
            calories: 520,
            carbs: 70,
            protein: 15,
            fat: 18
        },
        replacementTips: "베이컨 대신 통조림 햄(스팸)이나 돼지고기 목살, 참치를 넣으셔도 매우 맛있습니다.",
        ingredients: [
            { name: "김치", quantity: 1, unit: "컵 (잘게 썬 것)" },
            { name: "밥", quantity: 1, unit: "공기" },
            { name: "베이컨", quantity: 2, unit: "줄" },
            { name: "대파", quantity: 0.5, unit: "대" },
            { name: "계란", quantity: 1, unit: "개" },
            { name: "간장", quantity: 1, unit: "큰술" },
            { name: "버터", quantity: 0.5, unit: "큰술" }
        ],
        steps: [
            "대파는 얇게 송송 썰고 베이컨도 1cm 두께로 썰어 준비합니다. 김치는 가위로 잘게 잘라줍니다.",
            "팬에 식용유를 두르지 않고 베이컨과 대파를 넣어 약불에서 서서히 볶아 기름을 냅니다.",
            "파향이 노릇하게 올라오면 썰어놓은 김치를 넣고 버터 반 큰술과 함께 촉촉해질 때까지 충분히 볶습니다.",
            "재료들을 팬 한쪽으로 몰아두고, 빈 공간에 간장을 살짝 부어 지글지글 끓여 불맛을 더합니다.",
            "불을 약하게 줄인 후 밥을 넣어 주걱 날로 가르듯이 고르게 볶아줍니다.",
            "그릇에 담아 완성하고 반숙 계란 프라이를 얹어 고소하게 즐깁니다."
        ],
        filters: ["easy"]
    },
    {
        id: "rec-garlic-steak",
        title: "갈릭 버터 립아이 스테이크",
        category: "popular",
        categoryKo: "인기메뉴",
        description: "특별한 날을 빛내는 완벽한 스테이크 레시피. 로즈마리 허브향과 고소한 버터 베이스팅으로 풍미를 극대화합니다.",
        image: "images/garlic_steak.jpg",
        prepTime: 20,
        rating: 4.95,
        likes: 654,
        isLiked: false,
        userRating: 0,
        timerSeconds: 600,
        nutrition: {
            calories: 680,
            carbs: 2,
            protein: 48,
            fat: 52
        },
        replacementTips: "등심 대신 안심이나 채끝살, 찹스테이크용 부위를 활용해도 훌륭합니다.",
        ingredients: [
            { name: "소고기 등심", quantity: 250, unit: "g" },
            { name: "마늘", quantity: 4, unit: "쪽" },
            { name: "버터", quantity: 20, unit: "g" },
            { name: "로즈마리", quantity: 2, unit: "줄기" },
            { name: "올리브오일", quantity: 2, unit: "큰술" },
            { name: "소금", quantity: 0.5, unit: "작은술" },
            { name: "후추", quantity: 0.3, unit: "작은술" }
        ],
        steps: [
            "등심 스테이크용 고기는 조리 30분 전 냉장고에서 꺼내 실온에 두고, 소금과 후추, 올리브오일로 사방을 코팅하듯 밑간해 둡니다.",
            "팬을 연기가 살짝 날 정도로 아주 강한 불에 달군 뒤, 올리브오일을 두르고 고기를 올립니다.",
            "고기 겉면이 바삭하고 짙은 갈색빛(마이야르 반응)이 돌 때까지 한 면당 1분 30초씩 시어링합니다.",
            "고기를 뒤집을 때 버터, 으깬 마늘, 로즈마리를 넣고 약불로 줄인 뒤 팬을 기울여 숟가락으로 녹은 버터를 고기 위에 반복해서 끼얹어 줍니다.",
            "원하는 굽기 정도로 구워지면 팬에서 꺼내 도마 위에 올려 5분간 레스팅(Resting)하여 육즙을 가두어 준 후 먹기 좋게 슬라이스해 서빙합니다."
        ],
        filters: ["high-protein"]
    },
    {
        id: "rec-cheese-pancake",
        title: "치즈 듬뿍 김치전",
        category: "fridge",
        categoryKo: "냉털",
        description: "비 내리는 날 어울리는 고소하고 매콤한 퓨전 전. 부침가루만 있으면 냉장고 속 신김치와 모짜렐라 치즈로 환상의 조화를 만듭니다.",
        image: "images/kimchi_pancake.jpg",
        prepTime: 15,
        rating: 4.8,
        likes: 288,
        isLiked: false,
        userRating: 0,
        timerSeconds: 540,
        nutrition: {
            calories: 460,
            carbs: 48,
            protein: 16,
            fat: 22
        },
        replacementTips: "부침가루가 없다면 밀가루와 튀김가루를 7:3 비율로 섞고 탄산수를 넣으면 더욱 바삭합니다.",
        ingredients: [
            { name: "김치", quantity: 1, unit: "컵" },
            { name: "부침가루", quantity: 1, unit: "컵" },
            { name: "모짜렐라 치즈", quantity: 80, unit: "g" },
            { name: "대파", quantity: 0.3, unit: "대" },
            { name: "물", quantity: 0.8, unit: "컵" }
        ],
        steps: [
            "김치와 대파는 가위나 칼을 사용해 잘게 다져 줍니다.",
            "넓은 볼에 부침가루와 찬 물을 넣고 멍울이 지지 않게 가볍게 섞어 준 후, 다진 김치와 대파를 섞어 반죽을 완성합니다.",
            "달군 팬에 식용유를 넉넉하게 두르고 반죽을 한 국자 떠서 얇고 둥글게 폅니다.",
            "가장자리가 바삭하게 익어가면 뒤집어서 반대쪽도 노릇하게 구워줍니다.",
            "한 번 더 뒤집은 뒤 한쪽 면에 모짜렐라 치즈를 듬뿍 얹고 뚜껑을 덮어 약불에서 치즈를 완전히 녹여 낸 후 꺼내 먹습니다."
        ],
        filters: ["easy"]
    },
    {
        id: "rec-rose-tteokbokki",
        title: "꾸덕 로제 떡볶이",
        category: "popular",
        categoryKo: "인기메뉴",
        description: "요즘 대세 트렌디 푸드! 고추장의 매콤함과 부드러운 생크림이 만나 꾸덕하고 중독성 강한 로제 소스 떡볶이를 완성합니다.",
        image: "images/rose_tteokbokki.jpg",
        prepTime: 15,
        rating: 4.9,
        likes: 498,
        isLiked: false,
        userRating: 0,
        timerSeconds: 600,
        nutrition: {
            calories: 590,
            carbs: 85,
            protein: 12,
            fat: 24
        },
        replacementTips: "생크림 대신 우유와 슬라이스 치즈 2장을 넣으셔도 부드러운 로제 맛을 구현할 수 있습니다.",
        ingredients: [
            { name: "떡볶이 떡", quantity: 200, unit: "g" },
            { name: "어묵", quantity: 2, unit: "장" },
            { name: "생크림", quantity: 1, unit: "컵 (200ml)" },
            { name: "고추장", quantity: 1.5, unit: "큰술" },
            { name: "베이컨", quantity: 2, unit: "줄" },
            { name: "마늘", quantity: 3, unit: "쪽" },
            { name: "물", quantity: 0.5, unit: "컵" }
        ],
        steps: [
            "떡볶이 떡은 찬물에 가볍게 헹구어 채반에 건져 둡니다. 베이컨은 한입 크기로 썰고 마늘은 편 썰어 둡니다. 어묵은 먹기 좋게 삼각형 모양으로 썹니다.",
            "팬에 식용유를 약간 두르고 편 썬 마늘과 베이컨을 넣어 마늘향이 올라오고 베이컨이 노릇해질 때까지 볶아줍니다.",
            "물 반 컵과 고추장 한 큰술 반을 넣어 고루 풀어 준 다음, 끓기 시작하면 떡과 어묵을 넣습니다.",
            "떡이 말랑해질 때까지 중불에서 약 3-4분간 끓여 졸입니다.",
            "생크림을 붓고 잘 섞어준 뒤, 소스가 걸쭉해질 때까지 약불에서 꾸덕하게 졸여내어 그릇에 담아 완성합니다."
        ],
        filters: []
    }
];

// --- 2. Zero-Waste Storage Guides Database ---
const GUIDE_DATA = [
    {
        id: "storage-encyclopedia",
        icon: "fa-leaf",
        category: "보관 백과",
        title: "야채 & 채소류 냉장·냉동 장기 보관법 완벽 백과",
        summary: "양파, 대파, 마늘, 양배추, 아보카도 등 금방 무르는 채소를 무려 3배 이상 길게 신선하게 보관하는 습도 제어 및 소분 노하우.",
        readTime: "4분 읽기",
        content: `
            <h4>1. 대파 & 양파의 수명 3배 연장법</h4>
            <p>대파는 물에 씻지 않은 상태에서 흙만 털어내고 3등분하여 용기 바닥에 키친타올을 깔고 세워서 냉장 보관하면 한 달 이상 싱싱함이 유지됩니다. 깐 양파는 하나씩 랩으로 촘촘히 싸서 밀폐용기에 담으면 수분 손실과 부패를 예방합니다.</p>
            
            <h4>2. 양배추 & 잎채소 수분 제어 꿀팁</h4>
            <p>양배추는 칼로 칼집을 내어 심지 부분을 도려낸 후, 물에 적신 키친타올을 심지 자리에 박아 넣고 랩으로 감싸주면 두 달 가량 무르지 않고 신선합니다.</p>
            
            <h4>3. 후숙 과일(아보카도, 토마토) 상태별 보관</h4>
            <p>아보카도는 은박지(알루미늄 폼)에 싸서 냉장실 야채칸에 넣으면 갈변 속도를 현저히 늦출 수 있으며, 손질 후 남은 반쪽은 단면에 올리브오일을 약간 발라 밀폐 보관하세요.</p>
        `
    },
    {
        id: "meat-seafood-storage",
        icon: "fa-drumstick-bite",
        category: "소분 & 해동",
        title: "육류 & 해산물 소분 보관 및 안전 해동 가이드",
        summary: "세균 번식을 막는 냉동실 소분 지퍼백 포장법과 육즙 손실을 최소화하는 드립(Drip) 방지 해동 꿀팁.",
        readTime: "5분 읽기",
        content: `
            <h4>1. 소고기 & 돼지고기 올리브오일 코팅 보관</h4>
            <p>고기를 냉동하기 전 올리브오일을 겉면에 얇게 바르고 오일지나 랩으로 포장하면 공기 접촉(산화)을 차단하여 냉동실 냄새 흡수 및 냉동 상처(Freezer Burn)를 막아줍니다.</p>

            <h4>2. 해산물(연어, 새우) 해동의 금기사항</h4>
            <p>해산물이나 고기를 전자레인지나 따뜻한 물로 급속 해동하면 세균이 증식하고 육즙이 모두 빠져나가 질겨집니다. 조리 하루 전 냉장실로 옮기는 '유지 해동'이나 얼음물에 봉지째 담그는 방법이 가장 안전합니다.</p>

            <h4>3. 베이컨 & 다짐육 한 끼 분량 롤핑 스킬</h4>
            <p>베이컨은 종이호일 위에 하나씩 펼쳐 김밥처럼 돌돌 말아 지퍼백에 넣으면 필요한 수량만 쏙쏙 꺼내 쓰기 편합니다.</p>
        `
    },
    {
        id: "zero-waste-kitchen",
        icon: "fa-recycle",
        category: "제로웨이스트",
        title: "남은 식재료 쓰레기 제로(Zero-Waste) 실천 5계명",
        summary: "자취생부터 4인 가구까지 주방에서 버려지는 식재료를 0%로 줄여 식비를 매달 15만 원 이상 절감하는 습관.",
        readTime: "3분 읽기",
        content: `
            <h4>제 1 계명: 냉장고 재료 지도를 작성하라</h4>
            <p>MIUM 스마트 냉장고 탭에 보유 재료를 체크해두어 어떤 재료가 얼마 남아있는지 수시로 확인하고 유통기한 임박 재료부터 우선 요리합니다.</p>

            <h4>제 2 계명: 짜투리 채소는 야채수(Broth) 또는 볶음밥용으로 모으기</h4>
            <p>당근 꼬미, 양파 껍질, 대파 뿌리는 깨끗이 씻어 냉동실 모음 통에 넣어두었다가 육수를 낼 때 넣으면 시원하고 깊은 감칠맛을 만듭니다.</p>

            <h4>제 3 계명: 원형 식재료(Whole Food) 위주로 구매하기</h4>
            <p>밀키트나 다듬어진 소포장보다 원형 상태의 재료를 사서 직접 소분하면 가격도 절반 이하로 저렴하고 보관 기간도 3배 길어집니다.</p>
        `
    },
    {
        id: "nutrition-fit-guide",
        icon: "fa-heart-pulse",
        category: "영양 식단",
        title: "탄단지 밸런스와 칼로리 조절을 위한 핏(Fit) 식단 가이드",
        summary: "굶지 않는 다이어트! 탄수화물, 단백질, 지방 비율을 4:3:3으로 맞추어 건강한 에너지와 포만감을 유지하는 영양 공식.",
        readTime: "4분 읽기",
        content: `
            <h4>1. 손바닥(Palm) 계량법으로 한 끼 완성하기</h4>
            <p>복잡한 저울 없이 한 끼 식단을 구성해보세요: 단백질(닭가슴살/두부/연어)은 본인 손바닥 크기 1개, 채소는 양손 가득, 탄수화물(현미밥/고구마)은 주먹 1개 크기가 골든 밸런스입니다.</p>

            <h4>2. 혈당 스파이크를 막는 식사 순서</h4>
            <p>같은 음식도 섭취 순서에 따라 지방 축적 비율이 달라집니다. [식이섬유(채소) ➔ 단백질/지방 ➔ 탄수화물] 순서로 섭취하면 인슐린 분비가 안정되어 체지방 축적을 방지합니다.</p>

            <h4>3. 수분 섭취와 염분 조절의 연관성</h4>
            <p>하루 2리터 이상의 물을 섭취하면 나트륨 배출이 촉진되고 신진대사율이 올라가 하루 100kcal 이상의 칼로리가 자연 소모됩니다.</p>
        `
    }
];

// --- 3. Default Fridge Shelf Ingredients ---
const DEFAULT_SHELF_INGREDIENTS = {
    freezer: ['소고기 등심', '훈제연어', '닭가슴살', '베이컨', '어묵'],
    veggies: ['아보카도', '김치', '오이', '에다마메', '양배추', '대파', '마늘', '로즈마리'],
    dairy: ['식빵', '계란', '밥', '현미밥', '떡볶이 떡', '버터', '생크림', '모짜렐라 치즈', '참기름', '간장', '고추장', '부침가루']
};

// --- 4. App State Management ---
const state = {
    currentTab: 'all',
    searchQuery: '',
    dietFilter: 'all',
    fridgeIngredients: new Set(),
    activeModalRecipe: null,
    activeModalGuide: null,
    servingSize: 1,
    // Timer states
    timerInterval: null,
    timerTimeLeft: 0,
    timerTotalSeconds: 0,
    timerIsRunning: false
};

// --- 5. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    loadLocalStorage();
    initThemeAndVisuals();
    renderFridgeShelves();
    renderRecipeGrid();
    renderStorageGuides();
    setupEventListeners();
    updateFridgeCount();
    initPWA();

    // Route based on URL hash
    window.addEventListener('hashchange', handleHashRoute);
    handleHashRoute();
});

// Load state from local storage
function loadLocalStorage() {
    const savedIngredients = localStorage.getItem('bium_fridge_ingredients');
    if (savedIngredients) {
        const parsed = JSON.parse(savedIngredients);
        parsed.forEach(item => state.fridgeIngredients.add(item));
    }
    
    const savedLikes = localStorage.getItem('bium_recipe_likes');
    if (savedLikes) {
        const parsedLikes = JSON.parse(savedLikes);
        RECIPE_DATA.forEach(recipe => {
            if (parsedLikes[recipe.id] !== undefined) {
                recipe.isLiked = parsedLikes[recipe.id].isLiked;
                recipe.likes = parsedLikes[recipe.id].likesCount;
            }
        });
    }

    const savedRatings = localStorage.getItem('bium_recipe_ratings');
    if (savedRatings) {
        const parsedRatings = JSON.parse(savedRatings);
        RECIPE_DATA.forEach(recipe => {
            if (parsedRatings[recipe.id] !== undefined) {
                recipe.userRating = parsedRatings[recipe.id];
            }
        });
    }
}

// Save state to local storage
function saveState() {
    localStorage.setItem('bium_fridge_ingredients', JSON.stringify(Array.from(state.fridgeIngredients)));
    
    const likesMap = {};
    RECIPE_DATA.forEach(recipe => {
        likesMap[recipe.id] = {
            isLiked: recipe.isLiked,
            likesCount: recipe.likes
        };
    });
    localStorage.setItem('bium_recipe_likes', JSON.stringify(likesMap));

    const ratingsMap = {};
    RECIPE_DATA.forEach(recipe => {
        ratingsMap[recipe.id] = recipe.userRating;
    });
    localStorage.setItem('bium_recipe_ratings', JSON.stringify(ratingsMap));
}

// Initial design adjustments
function initThemeAndVisuals() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    }, 100);
}

// Handle hash navigation
function handleHashRoute() {
    const rawHash = window.location.hash.replace('#', '');
    if (!rawHash) {
        switchTab('all', false);
        return;
    }

    if (rawHash.startsWith('recipe/')) {
        const recipeId = rawHash.replace('recipe/', '');
        openRecipeModal(recipeId);
    } else if (rawHash.startsWith('guide/')) {
        const guideId = rawHash.replace('guide/', '');
        openGuideModal(guideId);
    } else if (rawHash === 'privacy') {
        openPolicyModal('privacy-modal');
    } else if (rawHash === 'terms') {
        openPolicyModal('terms-modal');
    } else if (rawHash === 'story') {
        openPolicyModal('story-modal');
    } else if (rawHash === 'disclaimer') {
        openPolicyModal('disclaimer-modal');
    } else if (rawHash === 'sitemap') {
        openPolicyModal('sitemap-modal');
    } else if (['all', 'quick', 'fit', 'fridge', 'guides', 'popular', 'partner'].includes(rawHash)) {
        switchTab(rawHash, true);
    }
}

// --- 6. Render Functions ---

// Render shelves elements in 냉털 View
function renderFridgeShelves() {
    const freezerContainer = document.getElementById('ingredients-freezer');
    const veggiesContainer = document.getElementById('ingredients-veggies');
    const dairyContainer = document.getElementById('ingredients-dairy');

    if (!freezerContainer || !veggiesContainer || !dairyContainer) return;

    const getChipHTML = (name) => {
        const isActive = state.fridgeIngredients.has(name) ? 'active' : '';
        const checkIcon = isActive ? 'fa-circle-check' : 'fa-circle';
        return `
            <button class="ingredient-chip ${isActive}" data-name="${name}">
                <i class="fa-regular ${checkIcon}"></i> ${name}
            </button>
        `;
    };

    freezerContainer.innerHTML = DEFAULT_SHELF_INGREDIENTS.freezer.map(getChipHTML).join('');
    veggiesContainer.innerHTML = DEFAULT_SHELF_INGREDIENTS.veggies.map(getChipHTML).join('');
    dairyContainer.innerHTML = DEFAULT_SHELF_INGREDIENTS.dairy.map(getChipHTML).join('');

    document.querySelectorAll('.ingredient-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const name = chip.getAttribute('data-name');
            toggleFridgeIngredient(name, chip);
        });
    });
}

// Render recipe grid based on current tab, query and sub-filters
function renderRecipeGrid() {
    const grid = document.getElementById('recipe-grid');
    if (!grid) return;

    const filtered = RECIPE_DATA.filter(recipe => {
        if (state.currentTab !== 'all') {
            if (state.currentTab === 'quick' && recipe.category !== 'quick') return false;
            if (state.currentTab === 'fit' && recipe.category !== 'fit') return false;
            if (state.currentTab === 'popular' && recipe.category !== 'popular' && recipe.likes < 300) return false;
        }

        if (state.dietFilter !== 'all') {
            if (state.dietFilter === 'high-protein' && !recipe.filters.includes('high-protein')) return false;
            if (state.dietFilter === 'low-calorie' && !recipe.filters.includes('low-calorie')) return false;
            if (state.dietFilter === 'easy' && !recipe.filters.includes('easy')) return false;
        }

        if (state.searchQuery.trim() !== '') {
            const q = state.searchQuery.toLowerCase();
            const titleMatch = recipe.title.toLowerCase().includes(q);
            const descMatch = recipe.description.toLowerCase().includes(q);
            const ingredientMatch = recipe.ingredients.some(ing => ing.name.toLowerCase().includes(q));
            return titleMatch || descMatch || ingredientMatch;
        }

        return true;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; height: 250px;">
                <i class="fa-solid fa-receipt empty-icon"></i>
                <p>일치하는 레시피가 없습니다.<br>다른 키워드로 검색해보세요.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(recipe => {
        const heartClass = recipe.isLiked ? 'liked' : '';
        const heartIcon = recipe.isLiked ? 'fa-solid' : 'fa-regular';
        
        return `
            <article class="recipe-card" data-id="${recipe.id}">
                <div class="card-img-wrapper">
                    <img src="${recipe.image}" alt="${recipe.title}" class="card-img" loading="lazy">
                    <span class="card-overlay-badge">${recipe.categoryKo}</span>
                    <button class="card-heart-btn ${heartClass}" data-id="${recipe.id}" aria-label="좋아요">
                        <i class="${heartIcon} fa-heart"></i>
                    </button>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${recipe.title}</h3>
                    <p class="card-description">${recipe.description}</p>
                    <div class="card-meta">
                        <div class="card-meta-left">
                            <span class="meta-item"><i class="fa-regular fa-clock"></i> ${recipe.prepTime}분</span>
                            <span class="meta-item"><i class="fa-solid fa-fire-flame-simple"></i> ${recipe.nutrition.calories} kcal</span>
                        </div>
                        <span class="card-rating-badge"><i class="fa-solid fa-star"></i> ${recipe.rating.toFixed(1)}</span>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    grid.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.card-heart-btn')) {
                const id = card.getAttribute('data-id');
                const btn = card.querySelector('.card-heart-btn');
                toggleLike(id, btn, e);
                return;
            }
            const id = card.getAttribute('data-id');
            window.location.hash = `recipe/${id}`;
        });
    });
}

// Render storage guides in Guides View
function renderStorageGuides() {
    const container = document.getElementById('guides-grid');
    if (!container) return;

    container.innerHTML = GUIDE_DATA.map(guide => `
        <div class="guide-card" data-id="${guide.id}">
            <div class="guide-card-header">
                <span class="guide-category-badge"><i class="fa-solid ${guide.icon}"></i> ${guide.category}</span>
                <span class="guide-read-time"><i class="fa-regular fa-clock"></i> ${guide.readTime}</span>
            </div>
            <h3 class="guide-card-title">${guide.title}</h3>
            <p class="guide-card-summary">${guide.summary}</p>
            <div class="guide-card-footer">
                <span class="guide-read-more">가이드 전체 읽기 <i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.guide-card').forEach(card => {
        card.addEventListener('click', () => {
            const guideId = card.getAttribute('data-id');
            window.location.hash = `guide/${guideId}`;
        });
    });
}

// Calculate and render matched recipes in 냉털 View
function renderFridgeMatchingResults() {
    const listContainer = document.getElementById('fridge-matching-list');
    const countBadge = document.getElementById('matched-count');
    if (!listContainer) return;

    if (state.fridgeIngredients.size === 0) {
        listContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-carrot empty-icon"></i>
                <p>냉장고 속 재료를 선택하시면<br>가장 알맞은 레시피를 실시간 추천해 줍니다.</p>
            </div>
        `;
        countBadge.innerText = '0개 매칭됨';
        return;
    }

    const matches = RECIPE_DATA.map(recipe => {
        const recipeIngredients = recipe.ingredients.map(ing => ing.name);
        
        let matchCount = 0;
        const missing = [];

        recipeIngredients.forEach(reqIng => {
            let found = false;
            for (let fridgeIng of state.fridgeIngredients) {
                if (reqIng.includes(fridgeIng) || fridgeIng.includes(reqIng)) {
                    found = true;
                    break;
                }
            }

            if (found) {
                matchCount++;
            } else {
                const isCondiment = ['소금', '후추', '물', '올리브오일', '참기름', '간장', '고추장', '부침가루', '통깨', '버터'].includes(reqIng);
                if (!isCondiment) {
                    missing.push(reqIng);
                }
            }
        });

        const score = Math.round((matchCount / recipeIngredients.length) * 100);
        return { recipe, score, missing };
    });

    matches.sort((a, b) => b.score - a.score);
    const suitableMatches = matches.filter(m => m.score >= 15);
    countBadge.innerText = `${suitableMatches.length}개 매칭됨`;

    if (suitableMatches.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-magnifying-glass-minus empty-icon"></i>
                <p>보유하신 재료와 어울리는 레시피가 없네요.<br>재료를 조금 더 추가해보세요!</p>
            </div>
        `;
        return;
    }

    listContainer.innerHTML = suitableMatches.map(m => {
        const r = m.recipe;
        let badgeClass = 'match-low';
        if (m.score === 100) badgeClass = 'match-100';
        else if (m.score >= 50) badgeClass = 'match-high';

        let missingText = '';
        if (m.score < 100 && m.missing.length > 0) {
            missingText = `<span class="missing-ingredients-text">${m.missing.slice(0, 2).join(', ')} 필요</span>`;
        } else if (m.score === 100) {
            missingText = `<span class="missing-ingredients-text" style="color: var(--accent-green-light)">요리 바로 가능!</span>`;
        }

        return `
            <div class="matching-item-card" data-id="${r.id}">
                <img src="${r.image}" alt="${r.title}" class="matching-item-img">
                <div class="matching-item-info">
                    <h4 class="matching-item-title">${r.title}</h4>
                    <div class="matching-item-stats">
                        <span><i class="fa-regular fa-clock"></i> ${r.prepTime}분</span>
                        <span><i class="fa-regular fa-star"></i> ${r.rating.toFixed(1)}</span>
                    </div>
                </div>
                <div class="match-rate-wrapper">
                    <span class="match-percentage-badge ${badgeClass}">${m.score}% 매치</span>
                    ${missingText}
                </div>
            </div>
        `;
    }).join('');

    listContainer.querySelectorAll('.matching-item-card').forEach(item => {
        item.addEventListener('click', () => {
            const id = item.getAttribute('data-id');
            window.location.hash = `recipe/${id}`;
        });
    });
}

// Toggle ingredient active state
function toggleFridgeIngredient(name, chipElement) {
    if (state.fridgeIngredients.has(name)) {
        state.fridgeIngredients.delete(name);
        if (chipElement) {
            chipElement.classList.remove('active');
            const icon = chipElement.querySelector('i');
            if (icon) icon.className = 'fa-regular fa-circle';
        }
    } else {
        state.fridgeIngredients.add(name);
        if (chipElement) {
            chipElement.classList.add('active');
            const icon = chipElement.querySelector('i');
            if (icon) icon.className = 'fa-regular fa-circle-check';
            triggerParticleGlow(chipElement);
        }
    }
    
    updateFridgeCount();
    saveState();
    
    if (state.currentTab === 'fridge') {
        renderFridgeMatchingResults();
    }
}

// Update badge count in header
function updateFridgeCount() {
    const badge = document.getElementById('fridge-count');
    if (badge) {
        badge.innerText = state.fridgeIngredients.size;
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 200);
    }
}

// --- 7. Modal Controllers ---

function openRecipeModal(recipeId) {
    const recipe = RECIPE_DATA.find(r => r.id === recipeId);
    if (!recipe) return;

    state.activeModalRecipe = recipe;
    state.servingSize = 1;

    resetCookingTimer();

    document.getElementById('modal-recipe-title').innerText = recipe.title;
    document.getElementById('modal-recipe-desc').innerText = recipe.description;
    document.getElementById('modal-category').innerText = recipe.categoryKo;
    document.getElementById('modal-time').innerText = recipe.prepTime;
    document.getElementById('modal-rating').innerText = recipe.rating.toFixed(1);
    document.getElementById('modal-likes').innerText = recipe.likes;
    
    const heroImg = document.getElementById('modal-hero-img');
    if (heroImg) {
        heroImg.style.backgroundImage = `url('${recipe.image}')`;
    }

    const replacementText = document.getElementById('modal-replacement-text');
    if (replacementText) {
        replacementText.innerText = recipe.replacementTips || "재료가 부족하면 유사한 재료로 대체해 조리하실 수 있습니다.";
    }

    document.getElementById('serving-val').innerText = state.servingSize;

    renderModalIngredients();
    renderModalNutrition();

    const stepsList = document.getElementById('modal-steps-list');
    if (stepsList) {
        stepsList.innerHTML = recipe.steps.map(step => `
            <li class="step-item">${step}</li>
        `).join('');
        
        stepsList.querySelectorAll('.step-item').forEach(stepItem => {
            stepItem.addEventListener('click', () => {
                stepItem.classList.toggle('checked');
                if (stepItem.classList.contains('checked')) {
                    stepItem.style.opacity = '0.5';
                    stepItem.style.textDecoration = 'line-through';
                } else {
                    stepItem.style.opacity = '1';
                    stepItem.style.textDecoration = 'none';
                }
            });
        });
    }

    const timerCard = document.getElementById('recipe-timer-card');
    if (timerCard) {
        if (recipe.timerSeconds > 0) {
            timerCard.style.display = 'block';
            state.timerTotalSeconds = recipe.timerSeconds;
            state.timerTimeLeft = recipe.timerSeconds;
            updateTimerDisplay();
        } else {
            timerCard.style.display = 'none';
        }
    }

    const modalLikeBtn = document.getElementById('modal-like-btn');
    const modalLikeIcon = document.getElementById('modal-like-icon');
    const modalLikeText = document.getElementById('modal-like-text');
    if (modalLikeBtn && modalLikeIcon && modalLikeText) {
        if (recipe.isLiked) {
            modalLikeBtn.classList.add('liked');
            modalLikeIcon.className = 'fa-solid fa-heart';
            modalLikeText.innerText = '좋아요 취소';
        } else {
            modalLikeBtn.classList.remove('liked');
            modalLikeIcon.className = 'fa-solid fa-heart';
            modalLikeText.innerText = '좋아요';
        }
    }

    renderInteractiveStars(recipe.userRating);

    const modal = document.getElementById('recipe-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeRecipeModal() {
    const modal = document.getElementById('recipe-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    resetCookingTimer();
    state.activeModalRecipe = null;
    
    // Clear hash if it was a recipe hash
    if (window.location.hash.startsWith('#recipe/')) {
        history.replaceState(null, null, ' ');
    }

    renderRecipeGrid();
    if (state.currentTab === 'fridge') {
        renderFridgeMatchingResults();
    }
}

function openGuideModal(guideId) {
    const guide = GUIDE_DATA.find(g => g.id === guideId);
    if (!guide) return;

    state.activeModalGuide = guide;

    const titleEl = document.getElementById('guide-modal-title');
    const subtitleEl = document.getElementById('guide-modal-subtitle');
    const bodyEl = document.getElementById('guide-modal-body');

    if (titleEl) titleEl.innerHTML = `<i class="fa-solid ${guide.icon} text-gold"></i> ${guide.title}`;
    if (subtitleEl) subtitleEl.innerText = `${guide.category} | ${guide.readTime}`;
    if (bodyEl) bodyEl.innerHTML = guide.content;

    const modal = document.getElementById('guide-detail-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeGuideModal() {
    const modal = document.getElementById('guide-detail-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    state.activeModalGuide = null;

    if (window.location.hash.startsWith('#guide/')) {
        history.replaceState(null, null, '#guides');
    }
}

function openPolicyModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePolicyModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    if (['#privacy', '#terms', '#story', '#disclaimer', '#sitemap'].includes(window.location.hash)) {
        history.replaceState(null, null, ' ');
    }
}

// Adjust ingredient quantities based on servings multiplier
function renderModalIngredients() {
    const list = document.getElementById('modal-ingredients-list');
    const recipe = state.activeModalRecipe;
    if (!list || !recipe) return;

    list.innerHTML = recipe.ingredients.map(ing => {
        let qtyText = '';
        if (ing.quantity) {
            const scaledQty = ing.quantity * state.servingSize;
            qtyText = Math.round(scaledQty * 10) / 10;
        }

        let hasInFridge = false;
        for (let fridgeIng of state.fridgeIngredients) {
            if (ing.name.includes(fridgeIng) || fridgeIng.includes(ing.name)) {
                hasInFridge = true;
                break;
            }
        }

        const checkedClass = hasInFridge ? 'checked' : '';
        
        return `
            <li class="ingredient-item ${checkedClass}">
                <span class="ing-name">
                    <span class="ing-checkbox"><i class="fa-solid fa-check"></i></span>
                    ${ing.name}
                </span>
                <span class="ing-qty">${qtyText} ${ing.unit}</span>
            </li>
        `;
    }).join('');

    list.querySelectorAll('.ingredient-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
        });
    });
}

function renderModalNutrition() {
    const caloriesVal = document.getElementById('macro-calories');
    const carbsVal = document.getElementById('macro-carbs');
    const proteinVal = document.getElementById('macro-protein');
    const fatVal = document.getElementById('macro-fat');

    const barCalories = document.getElementById('bar-calories');
    const nutritionSection = document.getElementById('modal-nutrition-section');

    const recipe = state.activeModalRecipe;
    if (!recipe) return;

    if (!recipe.nutrition) {
        if (nutritionSection) nutritionSection.style.display = 'none';
        return;
    }

    if (nutritionSection) nutritionSection.style.display = 'block';

    const scaledCalories = recipe.nutrition.calories * state.servingSize;
    if (caloriesVal) caloriesVal.innerText = `${scaledCalories} kcal`;
    if (carbsVal) carbsVal.innerText = `${recipe.nutrition.carbs * state.servingSize}g`;
    if (proteinVal) proteinVal.innerText = `${recipe.nutrition.protein * state.servingSize}g`;
    if (fatVal) fatVal.innerText = `${recipe.nutrition.fat * state.servingSize}g`;

    if (barCalories) {
        const percentage = Math.min((scaledCalories / 2000) * 100, 100);
        barCalories.style.width = `${percentage}%`;
    }
}

function renderInteractiveStars(rating) {
    const starContainer = document.getElementById('star-rating-interactive');
    if (!starContainer) return;

    const stars = starContainer.querySelectorAll('i');
    stars.forEach((star, idx) => {
        if (idx < rating) {
            star.className = 'fa-solid fa-star active';
        } else {
            star.className = 'fa-regular fa-star';
        }
    });
}

function changeServing(amount) {
    const newVal = state.servingSize + amount;
    if (newVal < 1 || newVal > 20) return;

    state.servingSize = newVal;
    document.getElementById('serving-val').innerText = state.servingSize;
    
    renderModalIngredients();
    renderModalNutrition();
}

// --- 8. Cooking Timer Logic ---

function updateTimerDisplay() {
    const display = document.getElementById('timer-time-display');
    const fill = document.getElementById('timer-progress-fill');
    
    if (!display || !fill) return;

    const mins = Math.floor(state.timerTimeLeft / 60);
    const secs = state.timerTimeLeft % 60;
    
    display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    const ratio = ((state.timerTotalSeconds - state.timerTimeLeft) / state.timerTotalSeconds) * 100;
    fill.style.width = `${ratio}%`;
}

function startCookingTimer() {
    if (state.timerIsRunning) return;

    state.timerIsRunning = true;
    
    const toggleBtn = document.getElementById('timer-toggle-btn');
    const resetBtn = document.getElementById('timer-reset-btn');
    const statusBadge = document.getElementById('timer-status');

    if (toggleBtn) toggleBtn.innerText = '일시정지';
    if (resetBtn) resetBtn.disabled = false;
    if (statusBadge) {
        statusBadge.innerText = '진행 중';
        statusBadge.className = 'timer-status-badge running';
    }

    state.timerInterval = setInterval(() => {
        if (state.timerTimeLeft <= 0) {
            finishCookingTimer();
        } else {
            state.timerTimeLeft--;
            updateTimerDisplay();
        }
    }, 1000);
}

function pauseCookingTimer() {
    if (!state.timerIsRunning) return;

    state.timerIsRunning = false;
    clearInterval(state.timerInterval);

    const toggleBtn = document.getElementById('timer-toggle-btn');
    const statusBadge = document.getElementById('timer-status');

    if (toggleBtn) toggleBtn.innerText = '계속';
    if (statusBadge) {
        statusBadge.innerText = '일시정지';
        statusBadge.className = 'timer-status-badge';
    }
}

function resetCookingTimer() {
    state.timerIsRunning = false;
    clearInterval(state.timerInterval);

    const recipe = state.activeModalRecipe;
    if (recipe && recipe.timerSeconds > 0) {
        state.timerTimeLeft = recipe.timerSeconds;
    } else {
        state.timerTimeLeft = 0;
    }

    updateTimerDisplay();

    const toggleBtn = document.getElementById('timer-toggle-btn');
    const resetBtn = document.getElementById('timer-reset-btn');
    const statusBadge = document.getElementById('timer-status');

    if (toggleBtn) toggleBtn.innerText = '시작';
    if (resetBtn) resetBtn.disabled = true;
    if (statusBadge) {
        statusBadge.innerText = '대기 중';
        statusBadge.className = 'timer-status-badge';
    }
}

function finishCookingTimer() {
    state.timerIsRunning = false;
    clearInterval(state.timerInterval);

    const statusBadge = document.getElementById('timer-status');
    const toggleBtn = document.getElementById('timer-toggle-btn');

    if (statusBadge) {
        statusBadge.innerText = '조리 완료!';
        statusBadge.className = 'timer-status-badge finished';
    }
    if (toggleBtn) toggleBtn.innerText = '완료';

    const audio = document.getElementById('timer-sound');
    if (audio) {
        audio.play().catch(err => console.log('Audio playback prevented', err));
    }

    triggerTimerFinishParticles();
}

// --- 9. Micro-interactions & Particles ---

function triggerParticleGlow(element) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.borderRadius = '50%';
        particle.style.background = 'var(--accent-gold)';
        particle.style.top = `${rect.top + rect.height / 2}px`;
        particle.style.left = `${rect.left + rect.width / 2}px`;
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '999';
        
        const vx = (Math.random() - 0.5) * 60;
        const vy = (Math.random() - 0.5) * 60;

        document.body.appendChild(particle);

        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
        ], {
            duration: 600,
            easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
        }).onfinish = () => particle.remove();
    }
}

function toggleLike(recipeId, btnElement, event) {
    const recipe = RECIPE_DATA.find(r => r.id === recipeId);
    if (!recipe) return;

    recipe.isLiked = !recipe.isLiked;

    if (recipe.isLiked) {
        recipe.likes++;
        btnElement.classList.add('liked');
        const icon = btnElement.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-heart';
        
        spawnFloatingHeart(event.clientX, event.clientY);
    } else {
        recipe.likes--;
        btnElement.classList.remove('liked');
        const icon = btnElement.querySelector('i');
        if (icon) icon.className = 'fa-regular fa-heart';
    }

    saveState();

    const modalLikes = document.getElementById('modal-likes');
    const modalLikeBtn = document.getElementById('modal-like-btn');
    const modalLikeText = document.getElementById('modal-like-text');
    const modalLikeIcon = document.getElementById('modal-like-icon');

    if (state.activeModalRecipe && state.activeModalRecipe.id === recipeId) {
        if (modalLikes) modalLikes.innerText = recipe.likes;
        if (modalLikeBtn && modalLikeText && modalLikeIcon) {
            if (recipe.isLiked) {
                modalLikeBtn.classList.add('liked');
                modalLikeText.innerText = '좋아요 취소';
                modalLikeIcon.className = 'fa-solid fa-heart';
            } else {
                modalLikeBtn.classList.remove('liked');
                modalLikeText.innerText = '좋아요';
                modalLikeIcon.className = 'fa-solid fa-heart';
            }
        }
    }
}

function spawnFloatingHeart(x, y) {
    const heart = document.createElement('i');
    heart.className = 'fa-solid fa-heart floating-heart';
    heart.style.left = `${x - 10}px`;
    heart.style.top = `${y - 20}px`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}

function triggerTimerFinishParticles() {
    const modal = document.getElementById('recipe-modal');
    if (!modal) return;

    const rect = modal.getBoundingClientRect();
    for (let i = 0; i < 20; i++) {
        const dot = document.createElement('div');
        dot.style.position = 'fixed';
        dot.style.width = `${Math.random() * 8 + 4}px`;
        dot.style.height = `${Math.random() * 8 + 4}px`;
        dot.style.borderRadius = '50%';
        dot.style.background = ['var(--accent-gold)', 'var(--accent-green-light)', '#e07a5f', '#f4f1de'][Math.floor(Math.random() * 4)];
        dot.style.top = `${rect.top + rect.height / 2}px`;
        dot.style.left = `${rect.left + rect.width / 2}px`;
        dot.style.zIndex = '3000';
        dot.style.pointerEvents = 'none';

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 150 + 50;
        const tx = Math.cos(angle) * speed;
        const ty = Math.sin(angle) * speed - 50;

        document.body.appendChild(dot);

        dot.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0.2 }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
        }).onfinish = () => dot.remove();
    }
}

// --- 10. Event Listeners Setup ---

function setupEventListeners() {
    
    // Tab Nav clicks (Header & Mobile Bottom Nav)
    document.querySelectorAll('.nav-tab, .mobile-nav-item[data-tab]').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = tab.getAttribute('data-tab');
            switchTab(targetTab, true);
            if (window.location.hash !== '#' + targetTab) {
                history.pushState(null, null, '#' + targetTab);
            }
        });
    });

    const logoBtn = document.getElementById('logo-btn');
    if (logoBtn) {
        logoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab('all', true);
            if (window.location.hash !== '#all') {
                history.pushState(null, null, '#all');
            }
        });
    }

    const heroFridgeBtn = document.getElementById('hero-fridge-btn');
    if (heroFridgeBtn) {
        heroFridgeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab('fridge', true);
            if (window.location.hash !== '#fridge') {
                history.pushState(null, null, '#fridge');
            }
        });
    }

    const heroPopularBtn = document.getElementById('hero-popular-btn');
    if (heroPopularBtn) {
        heroPopularBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab('popular', true);
            if (window.location.hash !== '#popular') {
                history.pushState(null, null, '#popular');
            }
        });
    }

    const heroGuidesBtn = document.getElementById('hero-guides-btn');
    if (heroGuidesBtn) {
        heroGuidesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab('guides', true);
            if (window.location.hash !== '#guides') {
                history.pushState(null, null, '#guides');
            }
        });
    }

    const fridgeShortcutBtn = document.getElementById('fridge-shortcut-btn');
    if (fridgeShortcutBtn) {
        fridgeShortcutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab('fridge', true);
            if (window.location.hash !== '#fridge') {
                history.pushState(null, null, '#fridge');
            }
        });
    }

    // Footer links click
    document.querySelectorAll('.footer-tab-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-tab');
            switchTab(target, true);
            if (window.location.hash !== '#' + target) {
                history.pushState(null, null, '#' + target);
            }
        });
    });

    document.getElementById('footer-story-btn')?.addEventListener('click', () => window.location.hash = 'story');
    document.getElementById('footer-terms-btn')?.addEventListener('click', () => window.location.hash = 'terms');
    document.getElementById('footer-privacy-btn')?.addEventListener('click', () => window.location.hash = 'privacy');
    document.getElementById('footer-disclaimer-btn')?.addEventListener('click', () => window.location.hash = 'disclaimer');
    document.getElementById('footer-sitemap-btn')?.addEventListener('click', () => window.location.hash = 'sitemap');
    document.getElementById('footer-partner-btn')?.addEventListener('click', () => window.location.hash = 'partner');

    // Policy modals close listeners
    document.getElementById('privacy-close-btn')?.addEventListener('click', () => closePolicyModal('privacy-modal'));
    document.getElementById('terms-close-btn')?.addEventListener('click', () => closePolicyModal('terms-modal'));
    document.getElementById('story-close-btn')?.addEventListener('click', () => closePolicyModal('story-modal'));
    document.getElementById('disclaimer-close-btn')?.addEventListener('click', () => closePolicyModal('disclaimer-modal'));
    document.getElementById('sitemap-close-btn')?.addEventListener('click', () => closePolicyModal('sitemap-modal'));
    document.getElementById('guide-detail-close-btn')?.addEventListener('click', closeGuideModal);

    // Overlay click close
    ['privacy-modal', 'terms-modal', 'story-modal', 'disclaimer-modal', 'sitemap-modal', 'guide-detail-modal'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', (e) => {
                if (e.target === el) {
                    closePolicyModal(id);
                }
            });
        }
    });

    // Main search input
    const searchInput = document.getElementById('recipe-search-input');
    const clearSearch = document.getElementById('clear-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value;
            if (clearSearch) {
                clearSearch.style.display = state.searchQuery ? 'block' : 'none';
            }
            renderRecipeGrid();
        });
    }

    if (clearSearch) {
        clearSearch.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                state.searchQuery = '';
                clearSearch.style.display = 'none';
                renderRecipeGrid();
            }
        });
    }

    // Main diet pills filter
    document.querySelectorAll('.filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            state.dietFilter = pill.getAttribute('data-filter');
            renderRecipeGrid();
        });
    });

    // Fridge direct custom ingredient add
    const addCustomBtn = document.getElementById('add-custom-ingredient-btn');
    const customInput = document.getElementById('fridge-ingredient-search');
    if (addCustomBtn && customInput) {
        const handleAdd = () => {
            const val = customInput.value.trim();
            if (!val) return;

            state.fridgeIngredients.add(val);
            customInput.value = '';
            
            renderFridgeShelves();
            updateFridgeCount();
            saveState();

            setTimeout(() => {
                const newChip = document.querySelector(`.ingredient-chip[data-name="${val}"]`);
                if (newChip) {
                    newChip.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    triggerParticleGlow(newChip);
                }
            }, 100);

            if (state.currentTab === 'fridge') {
                renderFridgeMatchingResults();
            }
        };

        addCustomBtn.addEventListener('click', handleAdd);
        customInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleAdd();
        });
    }

    const resetFridgeBtn = document.getElementById('reset-fridge-btn');
    if (resetFridgeBtn) {
        resetFridgeBtn.addEventListener('click', () => {
            state.fridgeIngredients.clear();
            renderFridgeShelves();
            updateFridgeCount();
            saveState();
            if (state.currentTab === 'fridge') {
                renderFridgeMatchingResults();
            }
        });
    }

    const recommendRecipesBtn = document.getElementById('recommend-recipes-btn');
    if (recommendRecipesBtn) {
        recommendRecipesBtn.addEventListener('click', () => {
            renderFridgeMatchingResults();
            const resultsCard = document.querySelector('.fridge-results-card');
            if (resultsCard) {
                resultsCard.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Modal Close click
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalOverlay = document.getElementById('recipe-modal');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeRecipeModal);
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeRecipeModal();
            }
        });
    }

    const servingMinus = document.getElementById('serving-minus');
    const servingPlus = document.getElementById('serving-plus');
    if (servingMinus) {
        servingMinus.addEventListener('click', () => changeServing(-1));
    }
    if (servingPlus) {
        servingPlus.addEventListener('click', () => changeServing(1));
    }

    const timerToggle = document.getElementById('timer-toggle-btn');
    const timerReset = document.getElementById('timer-reset-btn');
    if (timerToggle) {
        timerToggle.addEventListener('click', () => {
            if (state.timerIsRunning) {
                pauseCookingTimer();
            } else {
                startCookingTimer();
            }
        });
    }
    if (timerReset) {
        timerReset.addEventListener('click', resetCookingTimer);
    }

    const modalLikeBtn = document.getElementById('modal-like-btn');
    if (modalLikeBtn) {
        modalLikeBtn.addEventListener('click', (e) => {
            if (state.activeModalRecipe) {
                toggleLike(state.activeModalRecipe.id, modalLikeBtn, e);
            }
        });
    }

    const starContainer = document.getElementById('star-rating-interactive');
    if (starContainer) {
        starContainer.addEventListener('click', (e) => {
            const star = e.target.closest('i');
            if (!star) return;

            const rating = parseInt(star.getAttribute('data-star'));
            if (state.activeModalRecipe) {
                state.activeModalRecipe.userRating = rating;
                renderInteractiveStars(rating);
                saveState();
                triggerParticleGlow(star);
            }
        });
    }

    setupPartnerForm();
}

function setupPartnerForm() {
    const form = document.getElementById('partner-form');
    const statusMsg = document.getElementById('partner-form-status');
    const submitBtn = document.getElementById('partner-submit-btn');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 전송 중...';
        }

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                if (statusMsg) {
                    statusMsg.className = 'form-status-msg success';
                    statusMsg.innerHTML = '<i class="fa-solid fa-circle-check"></i> <strong>제휴 문의가 성공적으로 접수되었습니다!</strong><br>작성해주신 연락처 및 이메일로 담당자가 검토 후 빠른 시일 내에 안내해 드리겠습니다.';
                    statusMsg.style.display = 'block';
                }
                form.reset();
            } else {
                const data = await response.json();
                let errorText = '문의 제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
                if (data && data.errors && data.errors.length > 0) {
                    errorText = data.errors.map(err => err.message).join(', ');
                }
                if (statusMsg) {
                    statusMsg.className = 'form-status-msg error';
                    statusMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <strong>오류 발생:</strong> ${errorText}`;
                    statusMsg.style.display = 'block';
                }
            }
        } catch (error) {
            if (statusMsg) {
                statusMsg.className = 'form-status-msg error';
                statusMsg.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> <strong>네트워크 오류:</strong> 인터넷 연결을 확인하고 다시 시도해 주세요.';
                statusMsg.style.display = 'block';
            }
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> 제휴 문의 보내기';
            }
        }
    });
}

// Switch between navigation tabs
function switchTab(tabId, scroll = true) {
    state.currentTab = tabId;

    document.querySelectorAll('.nav-tab, .mobile-nav-item[data-tab]').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const gridView = document.getElementById('recipe-grid-view');
    const fridgeView = document.getElementById('fridge-view');
    const guidesView = document.getElementById('guides-view');
    const partnerView = document.getElementById('partner-view');
    const filterSection = document.getElementById('filter-section-container');
    const gridTitle = document.getElementById('grid-view-title');

    if (tabId === 'fridge') {
        if (gridView) gridView.style.display = 'none';
        if (guidesView) guidesView.style.display = 'none';
        if (partnerView) partnerView.style.display = 'none';
        if (filterSection) filterSection.style.display = 'none';
        if (fridgeView) {
            fridgeView.style.display = 'block';
            fridgeView.classList.add('active-view');
        }
        renderFridgeMatchingResults();
    } else if (tabId === 'guides') {
        if (gridView) gridView.style.display = 'none';
        if (fridgeView) fridgeView.style.display = 'none';
        if (partnerView) partnerView.style.display = 'none';
        if (filterSection) filterSection.style.display = 'none';
        if (guidesView) {
            guidesView.style.display = 'block';
            guidesView.classList.add('active-view');
        }
        renderStorageGuides();
    } else if (tabId === 'partner') {
        if (gridView) gridView.style.display = 'none';
        if (fridgeView) fridgeView.style.display = 'none';
        if (guidesView) guidesView.style.display = 'none';
        if (filterSection) filterSection.style.display = 'none';
        if (partnerView) {
            partnerView.style.display = 'block';
            partnerView.classList.add('active-view');
        }
    } else {
        if (fridgeView) fridgeView.style.display = 'none';
        if (guidesView) guidesView.style.display = 'none';
        if (partnerView) partnerView.style.display = 'none';
        if (filterSection) filterSection.style.display = 'flex';
        if (gridView) {
            gridView.style.display = 'block';
            gridView.classList.add('active-view');
        }

        if (gridTitle) {
            if (tabId === 'all') gridTitle.innerHTML = '추천 레시피';
            if (tabId === 'quick') gridTitle.innerHTML = '⚡ 바쁜 일상을 위한 <span class="accent-text">10분한끼</span>';
            if (tabId === 'fit') gridTitle.innerHTML = '🥗 몸도 마음도 핏한 <span class="accent-text">핏한끼</span>';
            if (tabId === 'popular') gridTitle.innerHTML = '🔥 실시간 가장 핫한 <span class="accent-text">인기메뉴</span>';
        }

        renderRecipeGrid();
    }

    if (scroll) {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 70;
        const mainContainer = document.querySelector('.main-container');
        if (mainContainer) {
            const rect = mainContainer.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetTop = rect.top + scrollTop - headerHeight - 15;
            window.scrollTo({
                top: Math.max(0, targetTop),
                behavior: 'smooth'
            });
        }
    }
}

// --- 11. PWA Service Worker & Installation Handler ---
function initPWA() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('[BIUM PWA] SW registered:', reg.scope))
                .catch(err => console.warn('[BIUM PWA] SW registration failed:', err));
        });
    }

    let deferredPrompt = null;
    const banner = document.getElementById('pwa-install-banner');
    const triggerBtn = document.getElementById('pwa-install-trigger-btn');
    const modalInstallBtn = document.getElementById('modal-pwa-install-btn');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (banner) banner.style.display = 'flex';
    });

    const triggerInstall = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log('[BIUM PWA] Install choice outcome:', outcome);
            deferredPrompt = null;
            if (banner) banner.style.display = 'none';
        } else {
            openPolicyModal('app-install-modal');
        }
    };

    if (triggerBtn) triggerBtn.addEventListener('click', triggerInstall);
    if (modalInstallBtn) modalInstallBtn.addEventListener('click', triggerInstall);

    document.getElementById('pwa-banner-close-btn')?.addEventListener('click', () => {
        if (banner) banner.style.display = 'none';
    });

    document.getElementById('mobile-nav-install-btn')?.addEventListener('click', () => {
        openPolicyModal('app-install-modal');
    });

    document.getElementById('install-modal-close-btn')?.addEventListener('click', () => {
        closePolicyModal('app-install-modal');
    });
}

