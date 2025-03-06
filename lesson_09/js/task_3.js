"use sttrict"

if (confirm('Почати тестування?')) {
	function array(userLength, firstFill = 1, secondFill = 5) {
		const arr = new Array(userLength)
		arr.fill(firstFill, 0, 5)
		arr.fill(secondFill, 5)
		return arr
	}
	const userLength = parseInt(prompt(`Введіть кількість елементів масиву`))

	document.write(array(userLength))
}

