"use strict"

if (confirm('Почати тестування?')) {
	function getGoodsUserCanBuy(arrPrices, arrTitles, userMoney) {
		let productForUser = []
		for (let i = 0; i < arrPrices.length; i++) {
			if (arrPrices[i] <= userMoney)
				productForUser.push(arrTitles[i])
		}
		return productForUser
	}
	const productsPrices = [1000, 20, 31]
	const productsTitles = [`cheese`, `juice`, `bread`]
	const userMoney = parseInt(prompt(`Введіть скільки ви маєете грошей`))

	document.write(`Список товарів який ві можете собі довзолити: ${getGoodsUserCanBuy(productsPrices, productsTitles, userMoney)}`)
}