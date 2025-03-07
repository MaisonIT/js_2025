"use strict"

// Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

if (confirm('Почати тестування?')) {
	function getPriceArr(randomPeriod) {
		let prices = []
		for (let i = 0; i < randomPeriod; i++) {
			const randomPrice = 1 + Math.floor(Math.random() * 10000)
			prices.push(randomPrice)
		}
		return prices
	}
	const randomPeriod = parseInt(prompt(`Введіть кількість цін`))
	const priceArray = getPriceArr(randomPeriod)

	function getListMoreThen1k(prices) {
		let newListPrices = prices.filter((el) => el > 1000)
		return newListPrices
	}

	document.write(` Історія цін за період: ${priceArray}<br>
	Ціни більші за 1000:	${getListMoreThen1k(priceArray)}`)
}



