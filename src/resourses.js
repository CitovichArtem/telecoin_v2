
export let leagues = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Epic', 'Legendary', 'Master', 'Grandmaster', 'Lord', 'Creator'];
export let moneyToUpArr = ['5K', '25K', '100K', '1M', '2M', '10M', '50M', '100M', '1B'];
export const tg = window.Telegram.WebApp;
let arr;    
let arrString = localStorage.getItem('arr');
console.log(arrString);
export let fullName;
export let photoSrc;

if (!tg) {
    console.error("Telegram Web App API не доступен");
    fullName = 'Имя и Фамилия)';
    photoSrc = 'img/image.png';
}else{
    console.log("Telegram Web App API инициализирован" + tg);
    tg.headerColor = "#00198a";
    tg.isClosingConfirmationEnabled = true;
    fullName = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
    photoSrc = tg.initDataUnsafe.user.photo_url;
}

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
        .set('moneyToUp', moneyToUpArr[parseInt(arr.get('indexProgress'))])
        .set('profitHour', 0)
        .set('myLeague', leagues[parseInt(arr.get('indexProgress'))])
        .set('energy', 1000)
        .set('energyLimit', 1000);

    // Преобразуем Map в объект и сохраняем в localStorage
    const obj = Object.fromEntries(arr);
    localStorage.setItem('arr', JSON.stringify(obj));
}
export function saveToLocalStorage() {
    const obj = Object.fromEntries(arr);
    localStorage.setItem('arr', JSON.stringify(obj));
}
// Выводим arr в консоль для проверки
console.log(arr);

export default arr