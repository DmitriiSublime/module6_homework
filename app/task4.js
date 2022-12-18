// Задание 4.

// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).


// function getNumber (a){
//     for (let i = 5; i < a; i++){
//         console.log(a)
//     } if (a === 15) {
//         console.log(a)        
//     }
// }
// setInterval(getNumber, 1000, 5);



// const timer = function(a, b) {
//     console.log(a++)
// } 
// setInterval(timer, 1000, 5, 15)

// const example = function() {
    
// }

function getNumber(a, b) {      
    let timer = setInterval(function() {
      console.log(a);
      if (a === b) {
        clearInterval(timer);
      } else a++;
    }, 1000);
  }   
  getNumber(5, 15);


// const getNumber = function (a){
//     console.log(a + 1)
// } 

// const intervalId = setInterval (getNumber, 1000, 5)