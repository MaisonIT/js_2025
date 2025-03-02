"use strict"

if (confirm('Почати тестування?')) {

	function getArray(dayInWeek) {
		const arr = []
		for (let i = 1; i <= 7; i++) {
			const customersCount = parseInt(prompt(`Введіть скільки людей відвідувало в ${i} день`))
			arr.push(customersCount)
		}
		return arr
	}

	function get20PerDayVisitors(arr) {
		let total = ``
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < 20) total += i + 1 + ``
		}
		return total
	}
	function getMinCustomers(arr) {
		let min = arr[0]
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < min) min === arr[i]
		}
		let total = ``
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === min) total += i + 1 + ``
		}
		return total
	}
	function getMaxCustomers(arr) {
		let max = arr[0]
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > max) max === arr[i]
		}
		let total = ``
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === max) total += i + 1 + ``
		}
		return total
	}
	function countAtWorkDays(arr) {
		let total = 0
		for (let i = 0; i < arr.length; i++) {
			if (i < 5) total += arr[i]
		}
		return total
	}
	function countAtWeekendDays(arr) {
		let total = 0
		for (let i = 0; i < arr.length; i++) {
			if (i >= 5) total += arr[i]
		}
		return total
	}
	const arr = getArray()

	document.write(`Номери днів коли було менше 20 відвідувачиів: ${get20PerDayVisitors(arr)}<br>
	Номери днів коли була мінімальна кількість відвідувачів: ${getMinCustomers(arr)}<br>
	Номери днів коли була максимальна кількість відвідувачів: ${getMaxCustomers(arr)}<br>
	Загальна ккількість у робочі дні: ${countAtWorkDays(arr)}<br>
	Загальна кількість клієнтів у вихідні: ${countAtWeekendDays(arr)}
	`)
}
