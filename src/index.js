import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './css/main.css';
import App from './App';
import './components/Header.js';
import reportWebVitals from './reportWebVitals';
import arr, {saveToLocalStorage} from './resourses.js';
import { leagues } from './resourses.js';
import { moneyToUpArr } from './resourses.js';

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
            let bal = parseInt(arr.get('balance'));
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
        }
    }


    const checkAndUpdateProgressBar = () => {
        const updateProgress = () => {
            const progressBar = document.getElementById('progress-bar');
            let bal = parseInt(arr.get('balance'));
            let moneyToUp = getMoneyToUpValueFromStr(arr.get('moneyToUp'));
            const progressPercentage = (bal / moneyToUp) * 100;
            console.log(progressPercentage);
            progressBar.style.width = `${progressPercentage}%`;       
        };
            setInterval(updateProgress, 1000);
    };

    const updateLeague = () => {
        let bal = parseInt(arr.get('balance'));
        let moneyToUp = getMoneyToUpValueFromStr(arr.get('moneyToUp'));
        let profitTap = parseInt(arr.get('profitTap'));
        let energyLimit = parseInt(arr.get('energyLimit'));

        console.log(arr.get('moneyToUp') +'www' + bal + ',,,' +moneyToUp + ',' + profitTap);
        if (bal >= moneyToUp) {
            console.log('balance more');
            console.log('ky' + arr.get('indexProgress'));
            arr.set('indexProgress', parseInt(arr.get('indexProgress')) + 1);
            arr.set('profitTap', profitTap + 1);
            arr.set('moneyToUp', moneyToUpArr[parseInt(arr.get('indexProgress'))]);
            arr.set('myLeague', leagues[parseInt(arr.get('indexProgress'))]);
            arr.set('energyLimit', energyLimit + 500);
            saveToLocalStorage();
            console.log('ky' + arr.get('indexProgress'));
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
        }else{
            console.log('balance less');
        }
    }
    updateLeague();
    checkAndUpdateProgressBar();
});

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
    }
}

document.addEventListener('DOMContentLoaded', () => {

    
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
        }
        
    };

    // Увеличиваем энергию каждую секунду
    setInterval(increaseEnergy, 1000);

    // офлайн счётчик на три часа (заработок + восстановление)
    const lastExitTime = localStorage.getItem('lastExitTime');
    
    if (lastExitTime) {
        const currentTime = Date.now();
        const offlineTime = Math.floor((currentTime - lastExitTime) / 1000);

        let bal = parseInt(arr.get('balance'));
        const profitTap = parseInt(arr.get('profitTap'));
        const maxOfflineBonus = profitTap * 3600 * 3; // Максимум 3 часа бонуса
        const addedBalance = Math.min(profitTap * offlineTime, maxOfflineBonus);
        bal += addedBalance;
        arr.set('balance', bal);

        let energy = arr.get('energy');
        const maxOfflineEnergy = arr.get('energyLimit');
        const newEnergy = Math.min(energy + (profitTap * offlineTime), maxOfflineEnergy);
        energy = newEnergy;
        arr.set('energy', energy);

        console.log(`Вы были оффлайн ${offlineTime} секунд`);
        console.log(`Заработали ${offlineTime*parseInt(arr.get('profitTap'))} `);
        saveToLocalStorage();
        if (window.updateBalance) {
            window.updateBalance();
        }
        if (window.updateEnergy) {
            window.updateEnergy();
        }
    }
    else{

    }
    
    

    // Сохраняем текущее время как время последнего выхода при закрытии или обновлении страницы
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('lastExitTime', Date.now());
    });
});

reportWebVitals();
