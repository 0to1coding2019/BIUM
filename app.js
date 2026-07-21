// BIUM - Empty Your Fridge. Fill Your Table.
// Core Web Application Logic

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
        timerSeconds: 300, // 5 min for cooking eggs/toast prep
        nutrition: {
            calories: 320,
            carbs: 24,
            protein: 12,
            fat: 20
        },
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
        image: "images/kimchi_fried_rice.jpg", // reuse or elegant container styling
        prepTime: 5,
        rating: 4.9,
        likes: 312,
        isLiked: false,
        userRating: 0,
        timerSeconds: 180, // 3 min
        nutrition: {
            calories: 380,
            carbs: 55,
            protein: 10,
            fat: 12
        },
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
        timerSeconds: 0, // No cooking needed (raw/prep assembly)
        nutrition: {
            calories: 450,
            carbs: 35,
            protein: 28,
            fat: 22
        },
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
        image: "images/salmon_bowl.jpg", // styling handles visuals
        prepTime: 15,
        rating: 4.6,
        likes: 189,
        isLiked: false,
        userRating: 0,
        timerSeconds: 420, // 7 min steaming
        nutrition: {
            calories: 220,
            carbs: 12,
            protein: 26,
            fat: 4
        },
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
        timerSeconds: 480, // 8 min
        nutrition: {
            calories: 520,
            carbs: 70,
            protein: 15,
            fat: 18
        },
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
        timerSeconds: 600, // 10 min cooking + resting
        nutrition: {
            calories: 680,
            carbs: 2,
            protein: 48,
            fat: 52
        },
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
            "고기를 뒤집을 때 버터, 으깬 마늘, 로즈마리를 넣고 약불로 줄인 뒤 팬을 기울여 숟가락으로 녹은 버터를 고기 위에 반복해서 끼얹어 줍니다 (아로제 베이팅).",
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
        image: "images/kimchi_fried_rice.jpg",
        prepTime: 15,
        rating: 4.8,
        likes: 288,
        isLiked: false,
        userRating: 0,
        timerSeconds: 540, // 9 min
        nutrition: {
            calories: 460,
            carbs: 48,
            protein: 16,
            fat: 22
        },
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
        image: "images/kimchi_fried_rice.jpg",
        prepTime: 15,
        rating: 4.9,
        likes: 498,
        isLiked: false,
        userRating: 0,
        timerSeconds: 600, // 10 min
        nutrition: {
            calories: 590,
            carbs: 85,
            protein: 12,
            fat: 24
        },
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

// --- 2. Default Fridge Shelf Ingredients ---
const DEFAULT_SHELF_INGREDIENTS = {
    freezer: ['소고기 등심', '훈제연어', '닭가슴살', '베이컨', '어묵'],
    veggies: ['아보카도', '김치', '오이', '에다마메', '양배추', '대파', '마늘', '로즈마리'],
    dairy: ['식빵', '계란', '밥', '현미밥', '떡볶이 떡', '버터', '생크림', '모짜렐라 치즈', '참기름', '간장', '고추장', '부침가루']
};

// --- 3. App State Management ---
const state = {
    currentTab: 'all',
    searchQuery: '',
    dietFilter: 'all',
    fridgeIngredients: new Set(),
    activeModalRecipe: null,
    servingSize: 1,
    // Timer states
    timerInterval: null,
    timerTimeLeft: 0,
    timerTotalSeconds: 0,
    timerIsRunning: false
};

// --- 4. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    loadLocalStorage();
    initThemeAndVisuals();
    renderFridgeShelves();
    renderRecipeGrid();
    setupEventListeners();
    updateFridgeCount();
});

// Load state from local storage (if existing)
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
    // Add page load effects
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    }, 100);
}

// --- 5. Render Functions ---

// Render shelves elements in 냉털 View
function renderFridgeShelves() {
    const freezerContainer = document.getElementById('ingredients-freezer');
    const veggiesContainer = document.getElementById('ingredients-veggies');
    const dairyContainer = document.getElementById('ingredients-dairy');

    if (!freezerContainer || !veggiesContainer || !dairyContainer) return;

    // Helper to generate chip markup
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

    // Attach listeners to chips
    document.querySelectorAll('.ingredient-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            const name = chip.getAttribute('data-name');
            toggleFridgeIngredient(name, chip);
        });
    });
}

// Render recipe grid based on current tab, query and sub-filters
function renderRecipeGrid() {
    const grid = document.getElementById('recipe-grid');
    if (!grid) return;

    // Filter recipes
    const filtered = RECIPE_DATA.filter(recipe => {
        // Tab category filter
        if (state.currentTab !== 'all') {
            if (state.currentTab === 'quick' && recipe.category !== 'quick') return false;
            if (state.currentTab === 'fit' && recipe.category !== 'fit') return false;
            if (state.currentTab === 'popular' && recipe.category !== 'popular' && recipe.likes < 300) return false;
        }

        // Sub diet/quick filter pills
        if (state.dietFilter !== 'all') {
            if (state.dietFilter === 'high-protein' && !recipe.filters.includes('high-protein')) return false;
            if (state.dietFilter === 'low-calorie' && !recipe.filters.includes('low-calorie')) return false;
            if (state.dietFilter === 'easy' && !recipe.filters.includes('easy')) return false;
        }

        // Search text filter
        if (state.searchQuery.trim() !== '') {
            const q = state.searchQuery.toLowerCase();
            const titleMatch = recipe.title.toLowerCase().includes(q);
            const descMatch = recipe.description.toLowerCase().includes(q);
            const ingredientMatch = recipe.ingredients.some(ing => ing.name.toLowerCase().includes(q));
            return titleMatch || descMatch || ingredientMatch;
        }

        return true;
    });

    // Populate grid
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

    // Attach click events to cards
    grid.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Check if user clicked heart button
            if (e.target.closest('.card-heart-btn')) {
                const id = card.getAttribute('data-id');
                const btn = card.querySelector('.card-heart-btn');
                toggleLike(id, btn, e);
                return;
            }
            const id = card.getAttribute('data-id');
            openRecipeModal(id);
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

    // Process matching scores for all recipes
    const matches = RECIPE_DATA.map(recipe => {
        const recipeIngredients = recipe.ingredients.map(ing => ing.name);
        
        let matchCount = 0;
        const missing = [];

        recipeIngredients.forEach(reqIng => {
            // Substring/Fuzzy match check
            // Check if any active fridge ingredient is contained in the recipe ingredient name (or vice versa)
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
                // Keep track of primary ingredients (we skip micro ones like '소금', '후추', '물', '올리브오일' for missing tags list)
                const isCondiment = ['소금', '후추', '물', '올리브오일', '참기름', '간장', '고추장', '부침가루', '통깨', '버터'].includes(reqIng);
                if (!isCondiment) {
                    missing.push(reqIng);
                }
            }
        });

        const score = Math.round((matchCount / recipeIngredients.length) * 100);
        return {
            recipe,
            score,
            missing
        };
    });

    // Sort by match percentage (descending)
    matches.sort((a, b) => b.score - a.score);

    // Filter out matches below 15% to maintain utility
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

    // Attach click listeners to matched cards
    listContainer.querySelectorAll('.matching-item-card').forEach(item => {
        item.addEventListener('click', () => {
            const id = item.getAttribute('data-id');
            openRecipeModal(id);
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
    
    // If in 냉털 tab, update results in real-time
    if (state.currentTab === 'fridge') {
        renderFridgeMatchingResults();
    }
}

// Update badge count in header
function updateFridgeCount() {
    const badge = document.getElementById('fridge-count');
    if (badge) {
        badge.innerText = state.fridgeIngredients.size;
        // Bounce animation on update
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 200);
    }
}

// --- 6. Recipe Details Modal Controller ---

function openRecipeModal(recipeId) {
    const recipe = RECIPE_DATA.find(r => r.id === recipeId);
    if (!recipe) return;

    state.activeModalRecipe = recipe;
    state.servingSize = 1;

    // Reset timer
    resetCookingTimer();

    // Populate text content
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

    // Render Serving size
    document.getElementById('serving-val').innerText = state.servingSize;

    // Render ingredients & nutrition
    renderModalIngredients();
    renderModalNutrition();

    // Render steps
    const stepsList = document.getElementById('modal-steps-list');
    if (stepsList) {
        stepsList.innerHTML = recipe.steps.map(step => `
            <li class="step-item">${step}</li>
        `).join('');
        
        // Add click cross-out listener to steps
        stepsList.querySelectorAll('.step-item').forEach(stepItem => {
            stepItem.addEventListener('click', () => {
                stepItem.classList.toggle('checked');
                // subtle style cross-out
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

    // Configure Timer visibility
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

    // Configure Interactive Likes class
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

    // Configure Stars rating
    renderInteractiveStars(recipe.userRating);

    // Show modal
    const modal = document.getElementById('recipe-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // lock background scroll
    }
}

function closeRecipeModal() {
    const modal = document.getElementById('recipe-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // restore scroll
    }
    resetCookingTimer();
    state.activeModalRecipe = null;
    
    // Re-render grid to reflect any likes changes
    renderRecipeGrid();
    if (state.currentTab === 'fridge') {
        renderFridgeMatchingResults();
    }
}

// Adjust ingredient quantities based on servings multiplier
function renderModalIngredients() {
    const list = document.getElementById('modal-ingredients-list');
    const recipe = state.activeModalRecipe;
    if (!list || !recipe) return;

    list.innerHTML = recipe.ingredients.map(ing => {
        // Calculate scaled quantity
        let qtyText = '';
        if (ing.quantity) {
            const scaledQty = ing.quantity * state.servingSize;
            // Round nicely to 1 decimal place
            qtyText = Math.round(scaledQty * 10) / 10;
        }

        // Check if user has this ingredient in their fridge to pre-check or highlight
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

    // Attach click events to checklist items
    list.querySelectorAll('.ingredient-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
        });
    });
}

// Update nutrition macro progress bars
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

    // Calories progress percentage relative to average 2000kcal target
    if (barCalories) {
        const percentage = Math.min((scaledCalories / 2000) * 100, 100);
        barCalories.style.width = `${percentage}%`;
    }
}

// Render active stars inside rating area
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

// Modify serving count
function changeServing(amount) {
    const newVal = state.servingSize + amount;
    if (newVal < 1 || newVal > 20) return; // limits

    state.servingSize = newVal;
    document.getElementById('serving-val').innerText = state.servingSize;
    
    // Re-render
    renderModalIngredients();
    renderModalNutrition();
}

// --- 7. Cooking Timer Logic ---

function updateTimerDisplay() {
    const display = document.getElementById('timer-time-display');
    const fill = document.getElementById('timer-progress-fill');
    
    if (!display || !fill) return;

    const mins = Math.floor(state.timerTimeLeft / 60);
    const secs = state.timerTimeLeft % 60;
    
    display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    // Fill ratio
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

    // Play chime sound
    const audio = document.getElementById('timer-sound');
    if (audio) {
        audio.play().catch(err => console.log('Audio playback prevented', err));
    }

    // Trigger congratulations particle shower
    triggerTimerFinishParticles();
}

// --- 8. Micro-interactions & Particles ---

// Pulsing particles glow effect when selecting a chip
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
        
        // Random velocities
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

// Heart fly up animation
function toggleLike(recipeId, btnElement, event) {
    const recipe = RECIPE_DATA.find(r => r.id === recipeId);
    if (!recipe) return;

    recipe.isLiked = !recipe.isLiked;

    if (recipe.isLiked) {
        recipe.likes++;
        btnElement.classList.add('liked');
        const icon = btnElement.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-heart';
        
        // Spawn floating heart particles
        spawnFloatingHeart(event.clientX, event.clientY);
    } else {
        recipe.likes--;
        btnElement.classList.remove('liked');
        const icon = btnElement.querySelector('i');
        if (icon) icon.className = 'fa-regular fa-heart';
    }

    // Save
    saveState();

    // If modal active, update the likes label inside modal as well
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
                modalLikeIcon.className = 'fa-solid fa-heart'; // keep base style
            }
        }
    }
}

// Spawn absolute positioned flying heart element
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

// Confetti-style particles on timer finish
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
        const ty = Math.sin(angle) * speed - 50; // shift upward slightly

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

// --- 9. Event Listeners Setup ---

function setupEventListeners() {
    
    // Tab Nav clicks
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    // Logo click resets to 'all' tab
    const logoBtn = document.getElementById('logo-btn');
    if (logoBtn) {
        logoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab('all');
        });
    }

    // Hero buttons click
    const heroFridgeBtn = document.getElementById('hero-fridge-btn');
    if (heroFridgeBtn) {
        heroFridgeBtn.addEventListener('click', () => switchTab('fridge'));
    }

    const heroPopularBtn = document.getElementById('hero-popular-btn');
    if (heroPopularBtn) {
        heroPopularBtn.addEventListener('click', () => switchTab('popular'));
    }

    const fridgeShortcutBtn = document.getElementById('fridge-shortcut-btn');
    if (fridgeShortcutBtn) {
        fridgeShortcutBtn.addEventListener('click', () => switchTab('fridge'));
    }

    // Footer links click
    document.querySelectorAll('.footer-tab-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-tab');
            switchTab(target);
            // smooth scroll to top of content
            document.getElementById('filter-section-container').scrollIntoView({ behavior: 'smooth' });
        });
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

            // Add to veggie shelf by default as a new chip
            state.fridgeIngredients.add(val);
            customInput.value = '';
            
            // Re-render shelves
            renderFridgeShelves();
            updateFridgeCount();
            saveState();

            // Highlight the new ingredient by finding it
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

    // Reset fridge button click
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

    // Recommend recipe floating action
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

    // Modal Serving size click
    const servingMinus = document.getElementById('serving-minus');
    const servingPlus = document.getElementById('serving-plus');
    if (servingMinus) {
        servingMinus.addEventListener('click', () => changeServing(-1));
    }
    if (servingPlus) {
        servingPlus.addEventListener('click', () => changeServing(1));
    }

    // Modal interactive timer buttons
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

    // Modal like action
    const modalLikeBtn = document.getElementById('modal-like-btn');
    if (modalLikeBtn) {
        modalLikeBtn.addEventListener('click', (e) => {
            if (state.activeModalRecipe) {
                toggleLike(state.activeModalRecipe.id, modalLikeBtn, e);
            }
        });
    }

    // Modal rating action (click stars)
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
                
                // Trigger quick celebration particle
                triggerParticleGlow(star);
            }
        });
    }
}

// Switch between navigation tabs
function switchTab(tabId) {
    state.currentTab = tabId;

    // Toggle nav active classes
    document.querySelectorAll('.nav-tab').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const gridView = document.getElementById('recipe-grid-view');
    const fridgeView = document.getElementById('fridge-view');
    const filterSection = document.getElementById('filter-section-container');
    const gridTitle = document.getElementById('grid-view-title');

    // Switch views visibility
    if (tabId === 'fridge') {
        if (gridView) gridView.style.display = 'none';
        if (filterSection) filterSection.style.display = 'none';
        if (fridgeView) {
            fridgeView.style.display = 'block';
            fridgeView.classList.add('active-view');
        }
        
        // Execute fridge matching immediately
        renderFridgeMatchingResults();
    } else {
        if (fridgeView) fridgeView.style.display = 'none';
        if (filterSection) filterSection.style.display = 'flex';
        if (gridView) {
            gridView.style.display = 'block';
            gridView.classList.add('active-view');
        }

        // Set appropriate grid title
        if (gridTitle) {
            if (tabId === 'all') gridTitle.innerHTML = '추천 레시피';
            if (tabId === 'quick') gridTitle.innerHTML = '⚡ 바쁜 일상을 위한 <span class="accent-text">10분한끼</span>';
            if (tabId === 'fit') gridTitle.innerHTML = '🥗 몸도 마음도 핏한 <span class="accent-text">핏한끼</span>';
            if (tabId === 'popular') gridTitle.innerHTML = '🔥 실시간 가장 핫한 <span class="accent-text">인기메뉴</span>';
        }

        // Re-render recipes list
        renderRecipeGrid();
    }

    // Scroll slightly down to focus on content
    const headerHeight = document.querySelector('.header').offsetHeight;
    const heroHeight = document.querySelector('.hero-section').offsetHeight;
    
    // Switch scroll behavior based on whether user is just landing or clicking
    window.scrollTo({
        top: heroHeight - headerHeight + 50,
        behavior: 'smooth'
    });
}
