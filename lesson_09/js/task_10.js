"use strict"

if (confirm('Почати тестування?')) {
	const arr = [1000, 2000, 500, 100000, 15000]

	const newArr = arr.map((el) => el * 0.2)

	document.write(newArr)
}
