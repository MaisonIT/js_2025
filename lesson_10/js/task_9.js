"use strict"

// Підрахувати суму цін, що більше за 1000

if (confirm('Почати тестування?')) {
	function getPriceArr(randomPeriod) {
		let prices = []
		for (let i = 0; i < randomPeriod; i++) {
			const randomPrice = 1 + Math.floor(Math.random() * 10000)
			prices.push(randomPrice)
		}
		return prices
	}

	function getSumMoreThan1k(price) {
		const SumMoreThan1k = price.reduce((prevCount, el) => el > 1000 ? prevCount + el : prevCount, 0)
		return SumMoreThan1k
	}

	const randomPeriod = parseInt(prompt(`Введіть кількість цін`))
	const arr = getPriceArr(randomPeriod)
	const result = getSumMoreThan1k(arr)

	document.write(`Масив цін: ${arr}<br>
		Сумма цін більших за 1000: ${result}
		`)
}
