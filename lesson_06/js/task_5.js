"use strict"

if (confirm('Почати тестування?')) {
	const userInvestSum = parseInt(prompt(`Введіть сумму яку хочете інвестувати`))
	const receivingSum = (userInvestSum * 20) / 100
	let totalReceivingSum = 0
	for (let year = 1; year <= 20; year++) {
		totalReceivingSum += receivingSum
		document.write(`Ви отримаете за ${year} рік: ${receivingSum}грн.<br>`)
	}
	document.write(`Загалом ви отримаєте: ${totalReceivingSum}грн.`)
}
