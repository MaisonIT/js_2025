"use strict"

if (confirm('Почати тестування?')) {
	function array(userLength) {
		const arr = []
		for (let i = 0; i < userLength; i++) {
			arr.push(0)
		}
		return arr
	}
	const userLength = parseInt(prompt(`Вкажіть кількість елементів у масиві`))
	document.write(array(userLength))
}



