
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
        name: "Card 1",
        photo: 'img/монетка.png',
        text: 'Получите профессиональную юридическую консультацию или оценку вашего бизнеса',
        currentLevel: 0,
        currentIncome: 0,
        levelUpCosts: [1000, 2000, 2000, 8700, 10000, 20000, 40000, 100000],
        incomeIncreases: [250, 400, 640, 870, 900, 1200, 2200, 5000]
    },
    {
        name: "Card 2",
        photo: 'img/монетка.png',
        currentLevel: 0,
        currentIncome: 0,
        levelUpCosts: [150, 250, 400],
        incomeIncreases: [60, 120, 180]
    },
    {
        name: "Card 3",
        photo: 'img/монетка.png',
        currentLevel: 0,
        currentIncome: 0,
        levelUpCosts: [100, 200, 350],
        incomeIncreases: [70, 140, 210]
    }
];

if (arrString) {
    // Если данные есть, преобразуем их обратно в Map
    arr = new Map(Object.entries(JSON.parse(arrString)));
} else {
    // Если данных нет, создаем новый объект Map и задаем начальные значения
    arr = new Map();
    arr
        .set('balance', 4990)
        .set('indexProgress', 0)
        .set('profitTap', 1)
        .set('moneyToUp', moneyToUpArr[arr.get('indexProgress')]) // начальное значение, можете заменить
        .set('profitHour', calculateTotalIncome(initialCards))
        .set('myLeague', leagues[arr.get('indexProgress')]) // начальное значение, можете заменить
        .set('energy', 1000)
        .set('energyLimit', 1000)
        .set('cards', initialCards); // добавляем начальные значения карт

    // Преобразуем Map в объект и сохраняем в localStorage
    const obj = Object.fromEntries(arr);
    localStorage.setItem('arr', JSON.stringify(obj));
}

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
