"use strict"


if (confirm('Почати тестування?')) {
	let userNumberCount = parseInt(prompt(`Введіть кількічть випадкових чісел`))
	for (let i = 1; i <= userNumberCount; i++) {
		const randomNumber = 1 + Math.floor(Math.random() * 100)
		document.write(`<li>${randomNumber}</li>`)
	}
}
