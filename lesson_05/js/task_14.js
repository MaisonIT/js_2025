"use strict"

if (confirm('Почати тестування?')) {
	let randomPrice = 1000 + Math.floor(Math.random() * 100000 - 1000 + 1)
	alert(`Вам потрібно сплатит ${randomPrice}грн.`)
	let sum = 0
	do {
		let userPay = parseInt(prompt(`Введіть сумму`))
		sum += userPay
		if (sum < (randomPrice + 1)) {
			let remainingSum = randomPrice - sum
			alert(`Вам залишилось сплатити ${remainingSum}грн.`)
		}
	} while (remainingSum === 0);
	alert(` Вся сумма сплачена`)
}