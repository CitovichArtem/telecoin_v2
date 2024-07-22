import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './css/main.css';
import App from './App';
import './components/Header.js';
import reportWebVitals from './reportWebVitals';
import {arr, saveToLocalStorage, leagues, moneyToUpArr, tg } from './resourses.js';

const app = ReactDOMClient.createRoot(document.getElementById('app')) 
app.render(<App/>)

window.updateBalance = null;
window.updateEnergy = null;
window.updateLeague = null;
window.updateMoneyToUp = null;
let mask = document.getElementById('mask');

window.addEventListener('load', () => {
    function load() {
        mask.classList.add('hide');
        let sectionmenu = document.getElementById('SectionMenu');
        sectionmenu.style.opacity ='1';
        setTimeout(() => {
            mask.remove();
        }, 500);
        const lastExitTime = localStorage.getItem('lastExitTime');
    
        if (lastExitTime) {
            const currentTime = Date.now();
            const offlineTime = Math.floor((currentTime - lastExitTime) / 1000);
            let bal = parseFloat(arr.get('balance'));
            let profitTap = parseInt(arr.get('profitTap'));
            let profitHour = parseInt(arr.get('profitHour'));
            const maxOfflineBonus = profitHour * 3; // Максимум 3 часа бонуса
            const addedBalance = Math.min(profitHour * offlineTime/3600, maxOfflineBonus);
            bal += addedBalance;
            arr.set('balance', bal);
            let energy = arr.get('energy');
            const maxOfflineEnergy = arr.get('energyLimit');
            const newEnergy = Math.min(energy + (profitTap * offlineTime), maxOfflineEnergy);
            arr.set('energy', newEnergy);

            console.log(`Вы были оффлайн ${offlineTime} секунд`);
            console.log(`Заработали ${offlineTime*parseInt(arr.get('profitHour'))/3600} `);
            saveToLocalStorage();
        }
        
    }
    setTimeout(load, 1000);
    
});

document.getElementById('app').addEventListener('click', function(event) {
    var x = event.clientX;
    var y = event.clientY;
    if(document.getElementById('myBody')){
        var img = document.getElementById('clickableArea');
        var tapcoin = document.getElementById('TapCoin');
        var width = img.offsetWidth;
        var height = img.offsetHeight;

        // Получаем координаты верхнего левого угла изображения относительно документа
        var rect = img.getBoundingClientRect();
        var x1 = rect.left + window.scrollX;
        var y1 = rect.top + window.scrollY;

        // Вычисляем координаты середины изображения
        var centerX = x1 + width / 2;
        var centerY = y1 + height / 2;
        console.log("centerXy" + centerX + " " + centerY);


        if( ((x-centerX)**2+(y-centerY)**2 <= 125**2) &&(parseInt(arr.get('energy')) >= parseInt(arr.get('profitTap')))){
            let bal = parseFloat(arr.get('balance'));
            let ener = parseInt(arr.get('energy'));

            bal = bal + parseInt(arr.get('profitTap'));
            ener = ener - parseInt(arr.get('profitTap'));

            var number8 = document.createElement('div');
            number8.className = 'number-8';
            number8.textContent = `+${arr.get('profitTap')}`;
            number8.style.left = x + 'px';
            number8.style.top = y + 'px';
            arr.set('balance', bal);
            arr.set('energy', ener);
            saveToLocalStorage();
            console.log(arr.get('balance'));
            tapcoin.classList.add('clickAnim');
            document.body.appendChild(number8);
            function deleteClass(){
                tapcoin.classList.remove('clickAnim')
            }
            // Удаляем элемент после завершения анимации
            number8.addEventListener('animationend', function() {
                document.body.removeChild(number8);
            });
            setTimeout(deleteClass, 300);
            if (window.updateBalance) {
                window.updateBalance();
            }
            updateLeague();
        }
    }    
    checkAndUpdateProgressBar();
});



const checkAndUpdateProgressBar = () => {
    const updateProgress = () => {
        try{
            const progressBar = document.getElementById('progress-bar');
            let bal = parseFloat(arr.get('balance'));
            let moneyToUp = getMoneyToUpValueFromStr(arr.get('moneyToUp'));
            const progressPercentage = (bal / moneyToUp) * 100;
            console.log(progressPercentage);
            progressBar.style.width = `${progressPercentage}%`; 
        }
        catch (e) {
        }
              
    };
        setInterval(updateProgress, 1000);
};

const updateLeague = () => {
    let bal = parseFloat(arr.get('balance'));
    let indexProgress = parseInt(arr.get('indexProgress'));
    let profitTap = parseInt(arr.get('profitTap'));
    let energyLimit = parseInt(arr.get('energyLimit'));
    
    let moneyToUp = getMoneyToUpValueFromStr(moneyToUpArr[indexProgress]);
    
    // Добавляем цикл, который будет обновлять лигу, пока баланс позволяет
    while (bal >= moneyToUp && indexProgress < leagues.length - 1) {
        console.log(`Переход на новую лигу: ${leagues[indexProgress + 1]}`);
        
        indexProgress += 1;
        profitTap += 1;
        energyLimit += 500;
        
        // Обновляем значения в arr
        arr.set('indexProgress', indexProgress);
        arr.set('profitTap', profitTap);
        arr.set('moneyToUp', moneyToUpArr[indexProgress]);
        arr.set('myLeague', leagues[indexProgress]);
        arr.set('energyLimit', energyLimit);

        // Пересчитываем сумму для следующего перехода
        moneyToUp = getMoneyToUpValueFromStr(moneyToUpArr[indexProgress]);
    }

    saveToLocalStorage();

    // Обновляем интерфейс, если есть соответствующие функции
    if (window.updateMoneyToUp) {
        window.updateMoneyToUp();
    }
    if (window.updateLeague) {
        window.updateLeague();
    }
    if (window.updateEnergy) {
        window.updateEnergy();
    }
    checkAndUpdateProgressBar();
};

const getMoneyToUpValueFromStr = (str) => {
    switch (str) {
        case '1B': return 1000000000;
        case '100M': return 100000000;
        case '50M': return 50000000;
        case '10M': return 10000000;
        case '2M': return 2000000;
        case '1M': return 1000000;
        case '100K': return 100000;
        case '25K': return 25000;
        case '5K': return 5000;
        case '25000' : return 25000;
        case '5000' : return 5000;
    }
}

// Функция для восстановления энергии
const increaseEnergy = () => {
    let energy = parseInt(arr.get('energy'));
    energy += parseInt(arr.get('profitTap'));
    if(energy <= arr.get('energyLimit')){
        arr.set('energy', energy);
        saveToLocalStorage();
        if (window.updateEnergy) {
            window.updateEnergy();
        }
        if(window.updateMoneyToUp){
            window.updateMoneyToUp();
        }
    }
    
};
const increaseBalance = () =>{
    
    let bal = parseFloat(arr.get('balance'));
    let profit = parseFloat(arr.get('profitHour'));
    bal += (profit/3600);
    arr.set('balance', bal);
    saveToLocalStorage();
    if (window.updateBalance) {
        window.updateBalance();
    }
    updateLeague();
}

document.addEventListener('DOMContentLoaded', () => {
    // Увеличиваем энергию каждую секунду
    setInterval(increaseEnergy, 1000);
    setInterval(increaseBalance, 1000);
});
// Сохраняем текущее время как время последнего выхода при закрытии или обновлении страницы
window.addEventListener('beforeunload', () => {
    localStorage.setItem('lastExitTime', Date.now());
});
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        localStorage.setItem('lastExitTime', Date.now());
    }
});

reportWebVitals();
