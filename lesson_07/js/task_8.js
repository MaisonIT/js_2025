"use strict"

if (confirm('Почати тестування?')) {
	function bunnerOutput() {
		return `
		<h1>Дізнайся більше про Кайло Рена</h1>
		<a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B9%D0%BB%D0%BE_%D0%A0%D0%B5%D0%BD" width="300">
		<img src="img/kylo.webp">
		</a>
		<br> 
	`
	}
	document.write(`${bunnerOutput()}`)
}
