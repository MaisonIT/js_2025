"use strict"

if (confirm('Почати тестування?')) {
	function getArray(schoolSubjects) {
		const arr = []
		for (let i = 1; i <= schoolSubjects; i++) {
			const rating = parseInt(prompt(`Введіть оцінку від 1-5`))
			arr.push(rating)
		}
		return arr
	}

	function getAvarage(arr) {
		let sum = 0
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i]
		}
		return sum / arr.length
	}

	function getProgress(arr) {
		let bestStudent = false
		let goodStudent = false
		let badStudent = true
		let veryBadStudent = true
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 1 || arr[i] === 2) veryBadStudent = true
			if (arr[i] === 3) badStudent = true
			if (arr[i] < 4) goodStudent = false
			if (arr[i] < 5) bestStudent = false
		}
		if (veryBadStudent) return `Двійочник`
		if (badStudent) return `Трійочник`
		if (goodStudent) return `Хорошист`
		if (bestStudent) return `Відмінник`
	}

	const schoolSubjects = parseInt(prompt(`Введіть кількість предметів`))
	const ratingList = getArray(schoolSubjects)
	document.write(`Середній бал: ${getAvarage(ratingList).toFixed(2)}<br>
	Ви: ${getProgress(ratingList)}
	`)
}
