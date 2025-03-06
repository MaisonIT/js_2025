"use strict"

if (confirm('Почати тестування?')) {
	function array(userlength, firstHalf = 1, secondHalf = 7) {
		const arr = new Array(userlength)
		const half = Math.floor(userlength / 2)
		arr.fill(firstHalf, 0, half)
		arr.fill(secondHalf, half)
		return arr
	}
	const userlength = parseInt(prompt(`Введіть клилькість елементів`))

	document.write(array(userlength))
}
