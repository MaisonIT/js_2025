"use strict"

// Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

if (confirm('Почати тестування?')) {
	function getPriceArr(randomPeriod) {
		let prices = []
		for (let i = 0; i < randomPeriod; i++) {
			const randomPrice = 1 + Math.floor(Math.random() * 10000)
			prices.push(randomPrice)
		}
		return prices
	}

	function getMaxPrice(price) {
		const maxPrice = price.reduce((prevPrice, price) =>
			price > prevPrice ? price : prevPrice)
		return maxPrice
	}

	function getPricePercentOfMax(price) {
		const maxPrice = getMaxPrice(price)
		const pricePercentOfMax = price.map((price) =>
			((price * 100) / maxPrice).toFixed(2)
		)
		return pricePercentOfMax
	}

	const randomPeriod = parseInt(prompt(`Введіть кількість цін`))
	const priceArray = getPriceArr(randomPeriod)
	const resPriceOfMaxPercent = getPricePercentOfMax(priceArray)
	document.write(`Масив цін: ${priceArray}<br>
		Новий масив цін в відсотках стосовно максимальної ціни: ${resPriceOfMaxPercent}
		`)

}
