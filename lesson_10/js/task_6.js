"use strict"

// Визначити, чи є ціна, що менше 1000

if (confirm('Почати тестування?')) {
	function getPriceArr(randomPeriod) {
		let prices = []
		for (let i = 0; i < randomPeriod; i++) {
			const randomPrice = 1 + Math.floor(Math.random() * 10000)
			prices.push(randomPrice)
		}
		return prices
	}

	function getPriceLessThan1k(price) {
		let res
		if (price.some((p) => p < 1000))
			res = `Є ціна менша за 1000`
		else res = `Немає ціни меншої за 1000`
		return res
	}

	const randomPeriod = parseInt(prompt(`Введіть кількість цін`))
	const arr = getPriceArr(randomPeriod)
	const result = getPriceLessThan1k(arr)
	document.write(`Масив цін: ${arr}<br>
	Чи є ціна менша за 1000: ${result}
	`)

}