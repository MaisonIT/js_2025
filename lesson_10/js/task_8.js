"use strict"

// Підрахувати кількість цін, що більше за 1000

if (confirm('Почати тестування?')) {
	function getPriceArr(randomPeriod) {
		let prices = []
		for (let i = 0; i < randomPeriod; i++) {
			const randomPrice = 1 + Math.floor(Math.random() * 10000)
			prices.push(randomPrice)
		}
		return prices
	}

	function getCountMoreThan1k(price) {
		const countMoreThan1k = price.reduce((prevCount, el) => el > 1000 ? prevCount + 1 : prevCount, 0)
		return countMoreThan1k
	}

	const randomPeriod = parseInt(prompt(`Введіть кількість цін`))
	const arr = getPriceArr(randomPeriod)
	const result = getCountMoreThan1k(arr)

	document.write(`Масив цін: ${arr}<br>
		Кількість більших за 1000: ${result}
		`)
}
