"use strict"

if (confirm('Почати тестування?')) {
	function calculationResults(num1, num2, num3) {
		let resEvenCount = 0
		if (num1 % 2 === 0)
			resEvenCount++
		if (num2 % 2 === 0)
			resEvenCount++
		if (num3 % 2 === 0)
			resEvenCount++
		let resPositiveCount = 0
		if (num1 > 0)
			resPositiveCount++
		if (num2 > 0)
			resPositiveCount++
		if (num3 > 0)
			resPositiveCount++
		let resMore100 = 0
		if (num1 > 100)
			resMore100++
		if (num2 > 100)
			resMore100++
		if (num3 > 100)
			resMore100++
		return `Парних чісел: ${resEvenCount}<br> Додатних чісел: ${resPositiveCount}<br> Чісел більших за 100: ${resMore100}`
	}
	const randomNumber1 = (-999) + Math.floor(Math.random() * 1999)
	const randomNumber2 = (-999) + Math.floor(Math.random() * 1999)
	const randomNumber3 = (-999) + Math.floor(Math.random() * 1999)
	document.write(` Згенеровані числа: ${randomNumber1}, ${randomNumber2}, ${randomNumber3}<br>
		${calculationResults(randomNumber1, randomNumber2, randomNumber3)}`)
}
