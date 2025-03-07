"use strict"

// Знайти першу ціну, що більше за 1000

if (confirm('Почати тестування?')) {
	function getPriceArr(randomPeriod) {
		let prices = []
		for (let i = 0; i < randomPeriod; i++) {
			const randomPrice = 1 + Math.floor(Math.random() * 10000)
			prices.push(randomPrice)
		}
		return prices
	}

	function getFirstPriceMoreThan1k(price) {
		const firstPriceMoreThan1k = price.find((el) => el > 1000)
		return firstPriceMoreThan1k
	}

	const randomPeriod = parseInt(prompt(`Введіть кількість цін`))
	const arr = getPriceArr(randomPeriod)
	const result = getFirstPriceMoreThan1k(arr)

	document.write(`Масив цін: ${arr}<br>
		Пераш ціна більша за 1000: ${result}
		`)
}
