"use strict"

// Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

if (confirm('Почати тестування?')) {
	function getPriceArr(randomPeriod) {
		let prices = []
		for (let i = 0; i < randomPeriod; i++) {
			const randomPrice = 1 + Math.floor(Math.random() * 10000)
			prices.push(randomPrice)
		}
		return prices
	}

	function getIndexMore1k(prices) {
		const indexNumbers = prices.reduce(
			(arr, el, ind) => {
				if (el > 1000) arr.push(ind)
				return arr
			}, []
		)
		return indexNumbers
	}

	const randomPeriod = parseInt(prompt(`Введіть кількість цін`))
	const priceArray = getPriceArr(randomPeriod)
	document.write(`Масив цін: ${priceArray}<br>
		Новий масив з номерами тих що більше за 1000грн.: ${getIndexMore1k(priceArray)}
		`)

}
