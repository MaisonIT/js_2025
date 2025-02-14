"use strict"

// Вводимо дані
const price = parseInt(prompt(`Введіть ціну товару`))
const quanityMoney = parseInt(prompt(`Введіть клількість грошей`))

// Створюємо умови і виводимо результат
if (quanityMoney < price)
	document.write(`У покупці відмовлено`)
else if (quanityMoney >= price)
	document.write(`У вас достатньо коштів, можете купити лоторею за 4грн.`)