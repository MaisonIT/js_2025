"use strict"

if (confirm('Почати тестування?')) {
	function workDay(dayNumber) {
		let res
		if (dayNumber <= 5)
			res = `Робочий день`
		else
			res = `Вихідний`
		return res
	}
	const randomNumberDay = 1 + Math.floor(Math.random() * 7)
	document.write(`День номер: ${randomNumberDay}<br>
		Це: ${workDay(randomNumberDay)}
		`)
}
