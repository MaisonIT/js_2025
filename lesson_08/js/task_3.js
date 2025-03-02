"use sttrict"

if (confirm('Почати тестування?')) {
	function getNameArray(nameList) {
		const arr = []
		for (let i = 1; i <= nameList; i++) {
			const name = prompt(`Введіть имʼя учня №${i}`)
			arr.push(name)
		}
		return arr
	}
	function getNameIvan(arr) {
		let count = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === `Іван`) count++
		}
		return count
	}
	const nameList = parseInt(prompt(`Введіть кількість учнів`))
	const array = getNameArray(nameList)
	document.write(`Кількість учнів на імʼя Іван: ${getNameIvan(array)}`)
}

