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
const numbers = [5, 8, 10, 23, 48, 60]
for (const number of numbers) {
	console.log(number / 5)
}
console.log('~~~~~~~~~~~~')
for (const number of numbers) {
	if (number % 2 === 0) {
		console.log(`%cLiczba ${number} jest parzysta`, 'background-color: yellow; color:black')
	} else {
		console.log(`%cLiczba ${number} jest nieparzysta`, 'background-color: tomato; color:black')
	}
}
