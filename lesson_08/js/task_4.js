"use strict"

if (confirm('Почати тестування?')) {
	function getStartFirstA(arr) {
		let count = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][0] === 'A') count++
		}
		return count
	}
	function getFirstLastLetter(arr) {
		let count = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][0] === arr[i][arr[i].length - 1])
				count++
		}
		return count
	}
	function getCountSymbols(arr) {
		let count = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].length > 5) count++
		}
		return count
	}
	const arr = ['AP321CD', 'AL3412BB', 'CD81982CCD', 'FGT8765FF', '']
	document.write(`Кількість номерів що починається на "А": ${getStartFirstA(arr)}<br>
		Кількість номерів у яких співпадають перша і остання цифрі: ${getFirstLastLetter(arr)}<br>
		Кількість номерів які складаються з більше ніж 5 символів: ${getCountSymbols(arr)}
	`)
}
