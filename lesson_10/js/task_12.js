"use strict"

// Знайти останню ціну, що більше за 1000

if (confirm('Почати тестування?')) {
	function getPriceArr(randomPeriod) {
		let prices = []
		for (let i = 0; i < randomPeriod; i++) {
			const randomPrice = 1 + Math.floor(Math.random() * 10000)
			prices.push(randomPrice)
		}
		return prices
	}

	function getLastPriceMoreThan1k(price) {
		const lastPriceMoreThan1k = price.findLast((el) =>
			el > 1000
		)
		return lastPriceMoreThan1k
	}

	const randomPeriod = parseInt(prompt(`Введіть кількість цін`))
	const arr = getPriceArr(randomPeriod)
	const result = getLastPriceMoreThan1k(arr)

	document.write(`Масив цін: ${arr}<br>
		Остання ціна що більше за 1000: ${result}
		`)
}
