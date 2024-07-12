import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './css/main.css';
import App from './App';
import './components/Header.js';
import reportWebVitals from './reportWebVitals';

const app = ReactDOMClient.createRoot(document.getElementById('app')) 
app.render(<App/>)


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


        if( (x-centerX)**2+(y-centerY)**2 <= 125**2){
            
            console.log("found" +x + " " + y);
            var number8 = document.createElement('div');
            number8.className = 'number-8';
            number8.textContent = '+19';
            number8.style.left = x + 'px';
            number8.style.top = y + 'px';

            document.body.appendChild(number8);

            // Удаляем элемент после завершения анимации
            number8.addEventListener('animationend', function() {
                document.body.removeChild(number8);
            });
        }
    }
    
    
});
const getMoneyToUpValue = (el) => {
    switch (el.textContent) {
        case '1B': return 1000000000;
        case '100M': return 100000000;
        case '50M': return 50000000;
        case '10M': return 10000000;
        case '2M': return 2000000;
        case '1M': return 1000000;
        case '100K': return 100000;
        case '25K': return 25000;
        case '5K': return 5000;

    }
}

document.addEventListener('DOMContentLoaded', () => {
    

    const checkAndUpdateProgressBar = () => {
        const progressBar = document.getElementById('progress-bar');
        const moneyToUpEl = document.getElementById('moneyToUp');
        const TextAllTokensEl = document.getElementById('TextAllTokens');


        if (progressBar && moneyToUpEl && TextAllTokensEl) {
            const moneyToUp = getMoneyToUpValue(moneyToUpEl);
            const TextAllTokens = parseInt(TextAllTokensEl.textContent.replace(/\s+/g, ''));

            const updateProgress = () => {
                const progressPercentage = (TextAllTokens / moneyToUp) * 100;
                progressBar.style.width = `${progressPercentage}%`;
            };
            
            // Обновление прогресс-бара каждую секунду
            setInterval(updateProgress, 1000);
        } else {
            console.log('no progress-bar, retrying...');
            setTimeout(checkAndUpdateProgressBar, 500); // Проверять каждые 500 мс
        }
    };

    // Инициализация проверки наличия progress-bar
    checkAndUpdateProgressBar();

});

reportWebVitals();
