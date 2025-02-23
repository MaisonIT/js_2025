"use strict"

if (confirm('Почати тестування?')) {
	let temperatureSum = 0

	for (let i = 1; i <= 12; i++) {
		const userDataTemperature = parseInt(prompt(`Введіть температуру ${i} місяця`))

		temperatureSum += userDataTemperature
	}
	const avarageTemperatureSum = (temperatureSum / 12).toFixed(2)
	document.write(` Середня температура складає: ${avarageTemperatureSum}`)
}