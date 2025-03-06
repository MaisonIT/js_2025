"use strict"

if (confirm('Почати тестування?')) {
	const arr = [5, 3, 10, 1, 4, 8]

	arr.forEach((el, ind, arr) => {
		if (el > arr[0])
			arr[ind] *= 2
	}
	)
	document.write(`${arr}`)
}