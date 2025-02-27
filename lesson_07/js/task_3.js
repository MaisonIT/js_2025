"use sttrict"

if (confirm('Почати тестування?')) {
	function sumResult(num1, num2, num3, num4) {
		return sum = num1 + num2 + num3 + num4
	}
	function productResult(num1, num2, num3, num4) {
		return product = num1 * num2 * num3 * num4
	}
	function avarageArithmetic(num1, num2, num3, num4) {
		return avarage = (num1 + num2 + num3 + num4) / 4
	}
	function minimumValue(num1, num2, num3, num4) {
		return min = Math.min(num1, num2, num3, num4)
	}
	const randomNumber1 = 1 + Math.floor(Math.random() * 999)
	const randomNumber2 = 1 + Math.floor(Math.random() * 999)
	const randomNumber3 = 1 + Math.floor(Math.random() * 999)
	const randomNumber4 = 1 + Math.floor(Math.random() * 999)
	document.write(`Сгенеровані числа: ${randomNumber1}, ${randomNumber2}, ${randomNumber3},${randomNumber4}<br>
		Сумма = ${sumResult(randomNumber1, randomNumber2, randomNumber3, randomNumber4)}<br>
	Добуток = ${productResult(randomNumber1, randomNumber2, randomNumber3, randomNumber4)}<br>
	Середнє арифметичне = ${avarageArithmetic(randomNumber1, randomNumber2, randomNumber3, randomNumber4)}<br>
	Мінімальне = ${minimumValue(randomNumber1, randomNumber2, randomNumber3, randomNumber4)}<br>
	`)
}

