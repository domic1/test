/* console.log('czesc')
console.log('czesc')
console.log('czesc')
console.log('czesc')
console.log('czesc')
console.log('czesc')
console.log('7')
const test 
let test */
/* const name = 'DON'
const age = '26'
const dog = 'Lucek'
const ageDog = '5'
let food = 'PINSA'

console.log(name)
console.log(age)
console.log(food)
console.log(`Cześć jestem ${name}, a to jest mój pies ${dog}`)
console.log(`${dog} ma już ${ageDog} lat`) */

/* const firstName = 'Tomek'
let age = 12
age = 18

const favColor = 'niebieski'
const favMeal = 'schabowy'

let current = 'Car'
current.Car = 'Audi'

let firstName2 = 'Ania'
let age2 = 24
let favColor2 = 'czerwony'
 */

/*
    Metody do wykorzystania:
    charAt()
    includes()
    replace()* podchwytliwe 🙂 
    slice()
    split()
    toLowerCase()
    toUpperCase()
*/

/* const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'

console.log(text1.toUpperCase())
console.log(text2.toLowerCase())
console.log(text3.slice(6))
console.log(text4.includes('czy'))
console.log(text5.charAt(2))
console.log(text6.replaceAll('pies', 'kot'))
console.log(text7.split(',')) */

/* const pass = 'sfdfsdfda32'

if (pass.length > 10) {
	console.log('Masz dobre hasło')
} else {
	console.log('Masz za krótkie hasło')
} */

/* const color = 'blue'

if (color == 'blue') {
	if (10 > 0) {
		console.log('true true')
	}
} else {
	console.log('false')
} */

// const pass = '21rfdg!5wre'

// if (pass.length > 10 && pass.includes('!')) {
// 	console.log('masz rewelacyjne hasło')
// } else if (pass.length >= 10) {
// 	console.log('masz dobre hasło')
// } else {
// 	console.log('masz słabe hasło')
// }

// const X=50
// const Y=30
// if(X>Y){
// 	console.log('${x} jest większy od ${y}')
// }else{
// 	console.log('${y} jest większy od ${x}')
// }
/* const color = 'blue'
const newColor = 'green'
if (color === newColor) {
	console.log('Kolory się zgadzają.')
} else {
	console.log('Kolory się nie zgadzają.')
}
 */
/* let x =0
while(x<10){
x= x+2
console.log(x);
} */
// let x = 20
// do {
// 	/* x = x - 3 */
//     x -=3
// } while (x > 0)
// 	console.log(x)
// const numbers = [5, 8, 10, 23, 48, 60]
// for (const number of numbers) {
// 	console.log(number / 5)
// }
// console.log('~~~~~~~~~~~~')
// for (const number of numbers) {
// 	if (number % 2 === 0) {
// 		console.log(`%cLiczba ${number} jest parzysta`, 'background-color: yellow; color:black')
// 	} else {
// 		console.log(`%cLiczba ${number} jest nieparzysta`, 'background-color: tomato; color:black')
// 	}
// }
// const num1 = 1
// const num2 = 2
// const num3 = 3
// const num4 = 4
// const number = [1, 2, 3, 4, 5, 6]
// const  arr =[1, 2, 3, 4, 5, 6, 'sasf", ['asdfasf']]

// const btn1 = document.querySelector('button:nth-of-type(1)')
// const btn2 = document.querySelector('button:nth-of-type(2)')
// const btn3 = document.querySelector('button:nth-of-type(3)')

// console.log(btn1, btn2, btn3)
// const btns = document.querySelectorAll('button')

// function btnMsg(e) {
// 	console.log(`Kliknięto ${e.target.textContent} ! 👻`)
// }
// btn1.addEventListener('click', btnMsg)
// btns.forEach(btn => btn.addEventListener('click', btnMsg))
// const numbers = [1, 2, 3, 4, 5]
// numbers.unshift(100, 200, 'avta')
// numbers.shift()
// console.log(numbers)
// const colors = ['red', 'green', 'blue']
// console.log(colors)
// colors.push('gold', 123)
// console.log(colors)

// colors.pop()
// console.log(colors)
// const numbers = [1, 2, 3, 4, 5]
// function multiply(x) {
// 	return x * 2
// }
// const newNumbers = numbers.map(multiply)
// console.log(numbers)
// console.log(newNumbers)
const numbers = [1, 2, 3, 4, 5]

const abc = ['a', 'b', 'c']
const newAbc = numbers.concat(6, 7, 8, true, abc)

// console.log(newAbc)
// console.log(numbers)

console.log(abc)
console.log(...abc)

const drinks = ['pepsi', 'kawa', 'zupa', 'sok', 'woda']
const meals = ['schabowy', 'spaghetti', 'deser', 'krokiety']

const menu = [...drinks, ...meals]
const menu2 = drinks.concat(meals)
console.log(menu2)
