"use strict";

if (4 == 9) {
  console.log('ok');
} else {
  console.log('error')
}
 const num = 50;

 if(num < 49) {
    console.log('Error!')
 } else if (num > 100) {
  console.log('Too many')
 } else {
  console.log('ok')
 }

 (num == 50) ?  console.log('ok') : console.log('Error!');


 switch (num)  {
    case 49:
      console.log('Hello!')
      break;
    case 510:
      console.log('Right');
      break
    case 51:
      console.log('RIGHT');
      break
    default:
      console.log('Бывает!')
      break;        
 }