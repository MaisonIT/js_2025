"use strict"

if (confirm('Почати тестування?')) {
	function getBadMark(arr) {
		let count = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 2)
				count++
		}
		return count
	}
	function getGoodMarks(arr) {
		let count = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > 3)
				count++
		}
		return count
	}
	function getPassingGrade(arr) {
		let count = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < 4)
				count++
		}
		return count
	}
	const arr = [2, 3, 5, 4, 2, 1]
	document.write(`Кількість двійок яку ви маєте: ${getBadMark(arr)}<br>
	Кількість хороших оцинок(добре, відмінно): ${getGoodMarks(arr)}<br>
	Кількість оцінок нижче середнього: ${getPassingGrade(arr)}
	`)
}
