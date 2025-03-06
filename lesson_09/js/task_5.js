"use strict"

if (confirm('Почати тестування?')) {
	const arr = [-10, 20, -2, 5, 14, -23]

	let sum = 0
	for (const item of arr) {
		if (item > 0) sum += item
	}

	document.write(`${sum}`)
}
