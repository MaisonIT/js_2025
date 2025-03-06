"use strict"

if (confirm('Почати тестування?')) {

	const arr = [100, 200, 10, 20, 1000, 400, 500]

	const newArr = []
	for (const item of arr) {
		if (item > 100) newArr.push(item)
	}
	document.write(`${newArr}`)
}
