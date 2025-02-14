"use strict"

// Вводимо дані
const monthNumber = parseInt(prompt(`Введіть номер місяця від 1 до 12`))

// Умова і вивід результата
let res
switch (monthNumber) {
	case 12:
	case 1:
	case 2:
		res = `Зима`
		break
	case 3:
	case 4:
	case 5:
		res = `Весна`
		break
	case 6:
	case 7:
	case 8:
		res = `Літо`
		break
	case 9:
	case 10:
	case 11:
		res = `Осінь`
		break
	default:
		res = `Помилка`
		break
}
document.write(`${res}`)