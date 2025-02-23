"use strict"

if (confirm('Почати тестування?')) {
	const userRowField = parseInt(prompt(`Введіть кількість рядків поля`))
	const userColumnField = parseInt(prompt(`Введіть кількість стовпців поля`))
	let shipRowLocation = 1 + Math.floor(Math.random() * userRowField)
	let shipColumnLocation = 1 + Math.floor(Math.random() * userColumnField)

	const userStrikeChance = parseInt(prompt(`Введіть кількість снарядів для пострілу`))

	for (let i = 1; i <= userStrikeChance; i++) {
		const userStrikeRow = parseInt(prompt(`Введіть рядок для пострілу`))
		const userStrikeColumn = parseInt(prompt(`Введіть стовпець для пострілу`))
		if (userStrikeRow === shipRowLocation && userStrikeColumn === shipColumnLocation) {
			alert(`Вітаю ви потопиши ворожий корабель`)
			break
		}
		else
			alert(`Не влучили, ще спроба`)
	}
}