"use strict"

if (confirm('Почати тестування?')) {
	const userStartNumber = parseInt(prompt(`Введіть початкове число від якого компʼтер буде вгадувати`))
	const userEndNumber = parseInt(prompt(`Введіть кінцеве число до якого компʼтер буде вгадувати`))
	const userNumber = parseInt(prompt(`Введіть число яке повинен вгадати компʼютер`))
	for (let i = userStartNumber; i <= userEndNumber; i++) {
		let computerNumber = userStartNumber + Math.floor(Math.random() * userEndNumber - userStartNumber + 1)
		if (computerNumber === userNumber) {
			alert(`Вгадав, Ваше число ${computerNumber}`)
			break
		}
		else
			alert(`Ваше число ${computerNumber}?`)
	}
}
