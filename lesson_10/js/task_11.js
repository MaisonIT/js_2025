"use strict"

// Знайти індекс першої ціни, що більше за 1000

if (confirm('Почати тестування?')) {
	function getPriceArr(randomPeriod) {
		let prices = []
		for (let i = 0; i < randomPeriod; i++) {
			const randomPrice = 1 + Math.floor(Math.random() * 10000)
			prices.push(randomPrice)
		}
		return prices
	}

	function getIndexFirstPriceMoreThan1k(price) {
		const indexFirstPriceMoreThan1k = price.findIndex((el) => el > 1000)
		return indexFirstPriceMoreThan1k
	}

	const randomPeriod = parseInt(prompt(`Введіть кількість цін`))
	const arr = getPriceArr(randomPeriod)
	const result = getIndexFirstPriceMoreThan1k(arr)

	document.write(`Масив цін: ${arr}<br>
		Індекс першого елемента більшого за 1000: ${result}
		`)
}
