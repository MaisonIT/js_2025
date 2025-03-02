"use strict"

if (confirm('Почати тестування?')) {
	function getArray(min, max) {
		const arr = []
		for (let i = 1; i < 7; i++) {
			const winSum = min + Math.floor(Math.random() * (max - min + 1))
			arr.push(winSum)
		}
		return arr
	}
	function getUserWin(arr) {
		let sum = 0
		do {
			const userChoice = parseInt(prompt(`Зробіть вибір який елемнт відкрити від 1 до 7`))
			sum += arr[userChoice]
		} while (confirm(`Бажаєте відкрити ще один номер?`))
		return sum
	}
	const arr = getArray(-500, 500)
	document.write(`Масив: ${getArray(-500, 500)}<br>
	Сума виграшу = ${getUserWin(arr)}
	`)
}
