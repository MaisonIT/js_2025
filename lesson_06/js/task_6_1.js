"use strict"

if (confirm('Почати тестування?')) {
	let boxInStorage = parseInt(prompt(`Введіть кількість ящиків з яблуками на складі`))
	let cars = 1
	let leftBoxInStorage = boxInStorage
	while (leftBoxInStorage > 0) {
		const countUserLoadBox = parseInt(prompt(`Введіть скільки ящиків потрібно завантажити в машину ${cars}`))

		if (countUserLoadBox > boxInStorage) {
			alert(`Немає такої кількості ящиків`)
			continue
		}

		leftBoxInStorage -= countUserLoadBox
		alert(`Залишилось ${leftBoxInStorage} ящиків`)
		cars++
	}
}

