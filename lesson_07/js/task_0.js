"use strict"

if (confirm('Почати тестування?')) {
	function timeOfYear(monthNumber) {
		let res
		switch (monthNumber) {
			case 12:
			case 1:
			case 2:
				res = `Зима`
				break;
			case 3:
			case 4:
			case 5:
				res = `Весна`
				break;
			case 6:
			case 7:
			case 8:
				res = `Літо`
				break;
			case 9:
			case 10:
			case 11:
				res = `Осінь`
				break;
		}
		return res
	}
	const randomMonthNumber = 1 + Math.floor(Math.random() * 12)
	document.write(`Номер ${randomMonthNumber}<br>
		Пора року ${timeOfYear(randomMonthNumber)}
		`)
}
