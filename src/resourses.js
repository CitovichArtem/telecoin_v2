
export let leagues = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Epic', 'Legendary', 'Master', 'Grandmaster', 'Lord', 'Creator'];
export let moneyToUpArr = ['5K', '25K', '100K', '1M', '2M', '10M', '50M', '100M', '1B'];
export const tg = window.Telegram.WebApp;

export let arr;    
let arrString = localStorage.getItem('arr');
console.log(arrString);
window.updateBalance = null;
window.updateMoneyToUp = null;


export let fullName;
if (!tg) {
    console.error("Telegram Web App API не доступен");
    fullName = 'Имя и Фамилия)'
}else{
    console.log("Telegram Web App API инициализирован");
    try{
        tg.headerColor = "#00198a";
        tg.isClosingConfirmationEnabled = true;
        fullName = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
    }
    catch(e){
        console.error('!!!МЫ НЕ В ТЕЛЕГЕ:', e.message);
        fullName = 'Имя и Фамилия))';
    }
}

const initialCards = [
    {
        name: "KYC",
        photo: 'img/монетка.png',
        text: 'Получите профессиональную юридическую консультацию или оценку вашего бизнеса',
        currentLevel: 0,
        currentIncome: 0,
        levelUpCosts: [100, 200, 500, 1000, 3000, 5000, 10000, 20000, 40000, 100000, 150000, 250000],
        incomeIncreases: [50, 90, 200, 350, 250, 400, 640, 870, 900, 1200, 2200, 5000]
    },
    {
        name: "ETH",
        photo: 'img/монетка.png',
        currentLevel: 0,
        currentIncome: 0,
        levelUpCosts: [150, 250, 400, 4000, 6000, 9000, 15000, 23000, 51000, 211000],
        incomeIncreases: [60, 120, 180, 320, 550, 800, 1000, 1400, 2000, 5000]
    },
    {
        name: "Card 3",
        photo: 'img/монетка.png',
        currentLevel: 0,
        currentIncome: 0,
        levelUpCosts: [150, 250, 400, 4000, 6000, 9000, 15000, 23000, 51000, 211000],
        incomeIncreases: [80, 140, 220, 350, 610, 850, 1200, 1700, 2100, 9000]
    },
    {
        name: "Card 4",
        photo: 'img/монетка.png',
        currentLevel: 0,
        currentIncome: 0,
        levelUpCosts: [150, 250, 400, 4000, 6000, 9000, 15000, 23000, 51000, 211000],
        incomeIncreases: [60, 120, 180, 320, 550, 800, 1000, 1400, 2000, 5000]
    },
    {
        name: "Card 5",
        photo: 'img/монетка.png',
        currentLevel: 0,
        currentIncome: 0,
        levelUpCosts: [150, 250, 400, 4000, 6000, 9000, 15000, 23000, 51000, 211000],
        incomeIncreases: [60, 120, 180, 320, 550, 800, 1000, 1400, 2000, 5000]
    },
    {
        name: "Card 6",
        photo: 'img/монетка.png',
        currentLevel: 0,
        currentIncome: 0,
        levelUpCosts: [150, 250, 400, 4000, 6000, 9000, 15000, 23000, 51000, 211000],
        incomeIncreases: [60, 120, 180, 320, 550, 800, 1000, 1400, 2000, 5000]
    },
    {
        name: "Card 7",
        photo: 'img/монетка.png',
        currentLevel: 0,
        currentIncome: 0,
        levelUpCosts: [150, 250, 400, 4000, 6000, 9000, 15000, 23000, 51000, 211000],
        incomeIncreases: [60, 120, 180, 320, 550, 800, 1000, 1400, 2000, 5000]
    },
    {
        name: "Card 8",
        photo: 'img/монетка.png',
        currentLevel: 0,
        currentIncome: 0,
        levelUpCosts: [150, 250, 400, 4000, 6000, 9000, 15000, 23000, 51000, 211000],
        incomeIncreases: [60, 120, 180, 320, 550, 800, 1000, 1400, 2000, 5000]
    },
    {
        name: "Card 9",
        photo: 'img/монетка.png',
        currentLevel: 0,
        currentIncome: 0,
        levelUpCosts: [150, 250, 400, 4000, 6000, 9000, 15000, 23000, 51000, 211000],
        incomeIncreases: [60, 120, 180, 320, 550, 800, 1000, 1400, 2000, 5000]
    },
];

if (arrString) {
    // Если данные есть, преобразуем их обратно в Map
    arr = new Map(Object.entries(JSON.parse(arrString)));
} else {
    // Если данных нет, создаем новый объект Map и задаем начальные значения
    arr = new Map();
}
// Функция для установки базовых значений, если они отсутствуют
const initializeDefaults = () => {
    if (!arr.has('balance')) {
        arr.set('balance', 4990);
    }
    if (!arr.has('indexProgress')) {
        arr.set('indexProgress', 0);
    }
    if (!arr.has('profitTap')) {
        arr.set('profitTap', 1);
    }
    if (!arr.has('moneyToUp')) {
        arr.set('moneyToUp', moneyToUpArr[arr.get('indexProgress')]);
    }
    if (!arr.has('profitHour')) {
        arr.set('profitHour', calculateTotalIncome(initialCards));
    }
    if (!arr.has('myLeague')) {
        arr.set('myLeague', leagues[arr.get('indexProgress')]);
    }
    if (!arr.has('energy')) {
        arr.set('energy', 1000);
    }
    if (!arr.has('energyLimit')) {
        arr.set('energyLimit', 1000);
    }
    if (!arr.has('cards')) {
        arr.set('cards', initialCards);
    }

    // Преобразуем Map в объект и сохраняем в localStorage
    const obj = Object.fromEntries(arr);
    localStorage.setItem('arr', JSON.stringify(obj));
};

// Инициализируем базовые значения, если они отсутствуют
initializeDefaults();

// Функция для получения карты по названию
export function getCardByName(name) {
    const cards = arr.get('cards');
    return cards.find(card => card.name === name);
}
export function buyCardByName(name) {
    let cards = arr.get('cards');
    let card = cards.find(c => c.name === name);
    
    if (card) {
        const currentBalance = parseInt(arr.get('balance'), 10);
        const cost = card.levelUpCosts[card.currentLevel];
        
        if (currentBalance >= cost) {
            // Уменьшение баланса
            arr.set('balance', currentBalance - cost);
            
            // Увеличение уровня и дохода карты
            card.currentLevel++;
            card.currentIncome += card.incomeIncreases[card.currentLevel - 1] || 0;
            
            // Обновляем массив карт
            cards = cards.map(c => c.name === name ? card : c);
            arr.set('cards', cards);
            
            // Пересчитываем общий доход
            arr.set('profitHour', calculateTotalIncome(cards));
            
            // Сохраняем изменения в localStorage
            localStorage.setItem('arr', JSON.stringify(Object.fromEntries(arr)));
            if (window.updateBalance) {
                window.updateBalance();
            }
            if (window.updateMoneyToUp) {
                window.updateMoneyToUp();
            }
        } else {
            console.log('Недостаточно средств для покупки.');
        }
    } else {
        console.log('Карточка не найдена.');
    }
}


// Функция для расчета общей текущей прибыли по всем картам
function calculateTotalIncome(cards) {
    return cards.reduce((total, card) => total + card.currentIncome, 0);
}

export function saveToLocalStorage() {
    const obj = Object.fromEntries(arr);
    localStorage.setItem('arr', JSON.stringify(obj));
}
// Выводим arr в консоль для проверки
console.log(arr);
