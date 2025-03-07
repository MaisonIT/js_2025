"use sttrict"

// Сформувати список з тих цін, які більші за попереднє значення

if (confirm('Почати тестування?')) {
	function getPriceArr(randomPeriod) {
		let prices = []
		for (let i = 0; i < randomPeriod; i++) {
			const randomPrice = 1 + Math.floor(Math.random() * 10000)
			prices.push(randomPrice)
		}
		return prices
	}

	function numbersMoreThenPrev(price) {
		const listMoreThenPrev = price.filter(
			(price, ind, arr) => ind > 0 && arr[ind] > arr[ind - 1]
		)
		return listMoreThenPrev
	}
	const randomPeriod = parseInt(prompt(`Введіть кількість цін`))
	const priceArray = getPriceArr(randomPeriod)

	document.write(`Масив цін: ${priceArray}<br>
		Новий масив в яких ціни бльші за попередні: ${numbersMoreThenPrev(priceArray)}
		`)
}

