"use strict"

if (confirm('Почати тестування?')) {
	const weekNumber = parseInt(prompt(`Введіть кількість тижнів`))
	let totalSum = 0
	let weekSum = 0
	for (let week = 1; week <= weekNumber; week++) {
		for (let day = 1; day <= 7; day++) {
			const dayProfit = parseInt(prompt(`Введіть прибуток за ${day} день ${week} тижня`))
			weekSum += dayProfit
		}
		totalSum += weekSum
		document.write(`Прибуток за ${week} = ${weekSum}<br>`)
	}
	document.write(`Загальна сумма = ${totalSum}`)
}