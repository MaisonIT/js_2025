"use strict"

if (confirm('Почати тестування?')) {
	function converterSmToInch(sm) {
		return sm / 2.54
	}
	function converterKgToPound(kg) {
		return kg / 2.205
	}
	function converterKmToMile(km) {
		return km / 1.609
	}

	const userSm = parseInt(prompt(`Введіть см`))
	const userKg = parseInt(prompt(`Введіть кг`))
	const userKm = parseInt(prompt(`Введіть км`))
	document.write(`${userSm}см це ${converterSmToInch(userSm).toFixed(4)} дюймів <br>
	${userKg}кг це ${converterKgToPound(userKg).toFixed(4)} фунтів <br>
	${userKm}км це ${converterKmToMile(userKm).toFixed(4)} миль
	`)
}
