"use strict"

// Визначати, чи усі ціни більше за 1000

if (confirm('Почати тестування?')) {
	function getPriceArr(randomPeriod) {
		let prices = []
		for (let i = 0; i < randomPeriod; i++) {
			const randomPrice = 1 + Math.floor(Math.random() * 10000)
			prices.push(randomPrice)
		}
		return prices
	}

	function getPriceMoreThan1k(price) {
		let res
		if (price.every((p) => p > 1000))
			res = `Усі ціни більші за 1000`
		else res = `Не усі ціні більші за 1000`
		return res
	}
	const randomPeriod = parseInt(prompt(`Введіть кількість цін`))
	const arr = getPriceArr(randomPeriod)
	const result = getPriceMoreThan1k(arr)
	document.write(`Масив цін: ${arr}<br>
	Результат: ${result}
	`)
}
