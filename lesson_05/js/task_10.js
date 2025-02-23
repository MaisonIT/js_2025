"use strict"

if (confirm('Почати тестування?')) {
	const userStartNumber = parseInt(prompt(`Задайте початкове число`))
	const userEndNumber = parseInt(prompt(`Задайте кінцеве число`))
	let sum = 0
	for (let i = userStartNumber; i <= userEndNumber; i++) {
		if (i % 2 !== 0) {
			document.write(`Непарне число: ${i}<br>`)
			sum += i
		}
	}
	document.write(`Сумма непарних чісел = ${sum}`)
}

