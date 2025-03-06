"use strict"

if (confirm('Почати тестування?')) {
	const arr = [`Olga`, `Viktor`, `Sasha`, `Tom`]

	const newArr = arr.map((el) => el[0])

	document.write(newArr)
}
