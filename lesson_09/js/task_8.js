"use strict"

if (confirm('Почати тестування?')) {
	const arr = [`AA293NN`, `BB233`, `NN1231`, `AA890V`]
	function getNewArray(oldArr) {
		const newArray = []
		oldArr.forEach((el) => {
			if (el[0] === `A`)
				newArray.push(el)
		})
		return newArray
	}
	document.write(getNewArray(arr))
}
