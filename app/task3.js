// Задание 3.
// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function getNumber(a){
    return function anotherNumber(b){
        return a + b
    }
}
let result = getNumber(25)(4);
console.log(result)
