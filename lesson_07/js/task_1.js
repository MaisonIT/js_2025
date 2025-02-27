"use strict"

if (confirm('Почати тестування?')) {
	function monthName(monthNumber) {
		let res
		switch (monthNumber) {
			case 1:
				res = `Січень`
				break;
			case 2:
				res = `Лютий`
				break;
			case 3:
				res = `Березень`
				break;
			case 4:
				res = `Квітень`
				break;
			case 5:
				res = `Травень`
				break;
			case 6:
				res = `Червень`
				break;
			case 7:
				res = `Липень`
				break;
			case 8:
				res = `Серпень`
				break;
			case 9:
				res = `Вересень`
				break;
			case 10:
				res = `Жовтень`
				break;
			case 11:
				res = `Листопад`
				break;
			case 12:
				res = `Грудень`
				break;
		}
		return res
	}
	const randomMonthNumber = 1 + Math.floor(Math.random() * 12)
	document.write(`Місяць номер: ${randomMonthNumber}<br>
		Це: ${monthName(randomMonthNumber)}
		`)
}
