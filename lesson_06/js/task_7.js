"use strict"

if (confirm('Почати тестування?')) {
	const userInvestSum = parseInt(prompt(`Введіть сумму яку хочете інвестувати`))
	const percentOf20year = 20
	const percentOf17year = 27
	const receivingSum20Year = (userInvestSum * percentOf20year) / 100
	const receivingSum17Year = (userInvestSum * percentOf17year) / 100
	const firstInvestYear = 20
	const secondInvestYear = 17

	let total20YearSum = 0
	let total17YearSum = 0

	for (let year1 = 0; year1 < firstInvestYear; year1++) {
		total20YearSum += receivingSum20Year
	}
	for (let year2 = 0; year2 < secondInvestYear; year2++) {
		total17YearSum += receivingSum17Year
	}
	document.write(`За ${firstInvestYear} років, під ${percentOf20year}% Ви отримаєте: ${total20YearSum}<br>
		За ${secondInvestYear} років, під ${percentOf17year}% Ви отримаєте: ${total17YearSum} 
		`)
}
