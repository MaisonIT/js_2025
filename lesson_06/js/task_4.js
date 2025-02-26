"use strict"

if (confirm('Почати тестування?')) {
	const char = `o`
	for (let s = 0; s < 3; s++) {

		document.write(`<div>`)
		for (let i = 0; i < 6; i++) {
			document.write(`<p></p>`)
			for (let j = 0; j < i; j++) {
				document.write(`${char}`)
			}
		}
		document.write(`</div>`)
	}
}
