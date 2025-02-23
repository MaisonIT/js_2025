"use strict"

if (confirm('Почати тестування?')) {
	for (let i = 1; i <= 10; i++) {
		const product = `Product #${i}`
		document.write(`
			<div>
				<label for="product#${i}">Product#${i}</label>
				<input type="number" id="product#${i}">
			</div>
			`)
	}
}
