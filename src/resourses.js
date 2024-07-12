
let leagues = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Epic', 'Legendary', 'Master', 'Grandmaster', 'Lord', 'Creator'];

let arr;    
let arrString = localStorage.getItem('arr');
console.log(arrString);
if (arrString) {
    // Если данные есть, преобразуем их обратно в Map
    arr = new Map(Object.entries(JSON.parse(arrString)));
} else {
    // Если данных нет, создаем новый объект Map и задаем начальные значения
    arr = new Map();
    arr
        .set('balance', '10000')
        .set('profitTap', '1')
        .set('moneyToUp', '25000')
        .set('profitHour', '0')
        .set('myLeague', 'Bronze');

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