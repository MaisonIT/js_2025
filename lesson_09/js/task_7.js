"use strict"

if (confirm('Почати тестування?')) {
	const arr = [100, 2000, 10000, 500, 200]

	arr.forEach((el, ind, arr) => {
		if (el > 1000) arr[ind] *= 0.7
	})
	document.write(`${arr}`)
}
