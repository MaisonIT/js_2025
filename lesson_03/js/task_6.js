"use strict"

// Вводимо дані
const numberOfDay = parseInt(prompt(`Введіть номер дня тижня (1-7)`))

// Умова та вивід результату
let res
switch (numberOfDay) {
	case 1:
		res = `Понеділок`
		break
	case 2:
		res = `Вівторок`
		break
	case 3:
		res = `Середа`
		break
	case 4:
		res = `Четверг`
		break
	case 5:
		res = `Пʼятниця`
		break
	case 6:
		res = `Субота`
		break
	case 7:
		res = `Неділя`
		break
	default:
		res = `Помилка`
}
document.write(`${res}`)