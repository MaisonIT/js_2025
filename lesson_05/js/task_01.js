"use strict"


if (confirm('Почати тестування?')) {
	for (let month = 3; month <= 8; month++) {
		let result
		if (month <= 5)
			result = `Місяць весни ${month}`;
		else
			result = `Місяць літа ${month}`;

		document.write(`<p>${result}</p>`)
	}
}
