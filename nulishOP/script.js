'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);


const userSettings = {
    theme: null,
    fontSize: 0,
    language: undefined
  };

  const defaultSettings = {
    theme: "dark",
    fontSize: 14,
    language: "en"
  };
  
const finalSetting = {
    theme: userSettings.theme ?? defaultSettings.theme,
    fontSize: userSettings.fontSize ?? defaultSettings.fontSize,
    language: userSettings.language ?? defaultSettings.language
}

//let result = prompt('Ввиди число', '');

//console.log(result ?? 10);