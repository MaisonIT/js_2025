"use strict"

if (confirm('Почати тестування?')) {
	function getSumAllYear(arr) {
		let sum = 0
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i]
		}
		return sum
	}
	function getSumFirstHalfYear(arr) {
		let sum = 0
		for (let i = 0; i < 6; i++) {
			sum += arr[i]
		}
		return sum
	}
	function getSumSecondHalfYear(arr) {
		let sum = 0
		for (let i = 6; i < arr.length; i++) {
			sum += arr[i]
		}
		return sum
	}
	function getSumSummer(arr) {
		let sum = 0
		for (let i = 5; i <= 7; i++) {
			sum += arr[i]
		}
		return sum
	}
	function getSumSecondQuarter(arr) {
		let sum = 0
		for (let i = 3; i < 6; i++) {
			sum += arr[i]
		}
		return sum
	}
	function getSumEven(arr) {
		let sum = 0
		for (let i = 0; i < arr.length; i++) {
			let arrEven = arr[i] % 2 === 0
			if (arrEven)
				sum += arr[i]
		}
		return sum
	}
	function getSumStartSeson(arr) {
		let sum = 0
		for (let i = 2; i < arr.length; i += 3) {
			sum += arr[i]
		}
		return sum
	}

	const arr = [100, 123, 2345, 23, 72, 6, 6462, 12, 22, 10045, 187, 625]

	document.write(`Сума платіжок за весь рік становить: ${getSumAllYear(arr)}<br>
	Сума платіжок за першу половину року: ${getSumFirstHalfYear(arr)}<br>
	Сума платіжок за другу половину року: ${getSumSecondHalfYear(arr)}<br>
	Сума платіжок за літо: ${getSumSummer(arr)}<br>
	Сума платіжок за II квартал: ${getSumSecondQuarter(arr)}<br>
	Сума платіжок за парні місяця: ${getSumEven(arr)}<br>
	Сумма платіжок за місяці які є початковими в сезоні(весна, літо, осінь, зима): ${getSumStartSeson(arr)}
	`)
}
