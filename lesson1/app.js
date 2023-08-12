// console.log('Hello world');

//ES5
//переменная
var name = 'Aiperi'
console.log('Aiperi')
//camelcase
var nameAndSurname = 'Akylbekova Aiperi'
console.log(name + nameAndSurname)

//типы данных
//1) - string
var text = 'frontend'
console.log(typeof text) //метод для того, чтобы узнать типы двнных
// методы строк
console.log(text.toUpperCase())
console.log(text.toLowerCase())
// console.log(text. length())
console.log(text.repeat(23))
// 2) number
var number1 = 3
// console.log(typeof number)
// console.log(number. toString())
var number2 = 2
console.log(number1 / number2)

console.log((23 + 17 + 14 + 17 + 26 + 15 + 19 + 15 + 16 + 17 + 17 + 15 + 19 + 25) / 14 + 'лет')

// 3)boolean
var isMarried = true
console.log(isMarried)

var userName = prompt('Enter your name');
var userSurname = prompt('Enter your surname');
var userAge = prompt('Enter your age');
// if,else..if, else - uslovnie konstrukciyi
// &&, || -
if(userAge<= 18){
    console.log('Привет' +  userName)
}else if(userAge >= 19 && userAge <= 50 ){
    console.log("Здравствуйте!" + userName, userSurname)
}else if (userAge >= 51 && userAge <= 85){
   console.log("Добро пожаловать!" + userName, userSurname)
}else{
    alert('Введите корректные данные!')
}
