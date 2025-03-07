"use strict"

// Підрахувати кількість змін цін

if (confirm('Почати тестування?')) {
	function getPriceArr(randomPeriod) {
		let prices = []
		for (let i = 0; i < randomPeriod; i++) {
			const randomPrice = 1 + Math.floor(Math.random() * 10000)
			prices.push(randomPrice)
		}
		return prices
	}

	function getCountChanges(price) {
		const countChanges = price.reduce((prevCount, el, ind, arr) =>
			el !== prevCount ? prevCount + 1 : prevCount, 0
		)
		return countChanges
	}

	const randomPeriod = parseInt(prompt(`Введіть кількість цін`))
	const arr = getPriceArr(randomPeriod)
	const userCountChanges = getCountChanges(arr)

	document.write(`Масив цін: ${getPriceArr(randomPeriod)}<br>
	Кількість змін: ${getCountChanges(arr)}
	`)


}
