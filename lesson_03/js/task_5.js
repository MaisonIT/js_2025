"use strict"

// Вводимо дані
const driverLicense = prompt(`Введіть категорію водійських прав(A, B, C)`)

// Умова та вивід результату
let res
switch (driverLicense) {
	case `A`:
		res = `Ви можете керувати мотоциклом`
		break
	case `B`:
		res = `Ви можете керувати легковим автомобілем`
		break
	case `C`:
		res = `Ви можете керувати вантажним автомобілем`
		break
	default:
		res = `Помилка`
}
document.write(`${res}`)
