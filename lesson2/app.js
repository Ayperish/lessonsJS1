// 4) undefined- неопределенный тип данных
// let lesson= undefined
// console.log(typeof lesson)
//
// 5)null- нулевой тип данных
// var lesson2 = null
// console.log(typeof lesson2)
//
//  NaN - not a number
// var notANumber = 67 **'text'
// console.log(typeof notANumber)
//
//  switch..case
// var age=Number (prompt('Age'))
// switch(age){
//     case 24:
//         console.error('Error')
//         break
//     case 25:
//         console.log('Error')
//         break
//     case 26:
//         alert("Ok")
//         break
//     default:
//         console.log('unknown age')


// var color = prompt('введите цвет светофора')
// switch (color) {
//     case 'red':
//         console.log('stop')
//         break
//
//     case 'yellow':
//         console.log('приготовтесь')
//         break
//     case 'green':
//         console.log('GO')
//         break
//     default:
//         console.log('вводите корректный цвет')
// }

//6) object
var user = {
    name: 'Aiperi',
    surname: 'Akylbeova',
    phoneNumber: 7865564,
    isMarried: false,
    object: {
        name2: 'John',
    },
    address: null
}
console.log(user.object.name2)

// добавление
user.course = 'GEEKS'
console.log(user)

// удаление
delete user.object
console.log(user)

//мзменение
user['address'] = undefined
console.log(user)

// методы объекта
console.log(Object.values(user))
console.log(Object.keys(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('address'))


//  array
var array = ['text', 87, null,  undefined, true , [1,2,3], {}, NaN]
console.log(array)

// индексация
console.log(array[4])
console.log(array.length - 1)
console.log(array[5][2])

// циклы
// for
for(var i = 0; i <= 10; i++){
    console.log(i)
}

var array2 = ['Aiperi', ['jogn', 'tim']]





