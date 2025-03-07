"use strict"

// Знайти індекс останньої ціни, що більше за 1000

if (confirm('Почати тестування?')) {
	function getPriceArr(randomPeriod) {
		let prices = []
		for (let i = 0; i < randomPeriod; i++) {
			const randomPrice = 1 + Math.floor(Math.random() * 10000)
			prices.push(randomPrice)
		}
		return prices
	}

	function getLastIndexMoreThan1k(price) {
		const lastIndexMoreThan1k = price.findLastIndex((el) =>
			el > 1000
		)
		return lastIndexMoreThan1k
	}

	const randomPeriod = parseInt(prompt(`Введіть кількість цін`))
	const arr = getPriceArr(randomPeriod)
	const result = getLastIndexMoreThan1k(arr)

	document.write(`Масив цін: ${arr}<br>
		Індекс останньої ціни що більше за 1000: ${result}
		`)
}
