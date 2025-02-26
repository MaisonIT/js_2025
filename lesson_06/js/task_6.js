"use strict"

if (confirm('Почати тестування?')) {
	const userInvestSum = parseInt(prompt(`Введіть сумму яку хочете інвестувати`))
	const receivingSum = (userInvestSum * 20) / 100

	let totalReceivingSum = 0
	let totalReceivingTaxSum
	let profitTax

	for (let year = 1; year <= 20; year++) {
		totalReceivingSum += receivingSum
	}
	profitTax = (totalReceivingSum * 5) / 100
	totalReceivingTaxSum = totalReceivingSum - profitTax
	document.write(`Сумма прибутку без оподаткування: ${totalReceivingSum}<br>
		Сумма після оподаткування: ${totalReceivingTaxSum}
		`)
}
