"use strict"

if (confirm('Почати тестування?')) {
	function randomImag(num) {
		switch (num) {
			case 1:
				document.write(`<div><img src="img/dart.webp"></div>`)
				break;
			case 2:
				document.write(`<div><img src="img/kylo.webp"></div>`)
				break;
			case 3:
				document.write(`<div><img src="img/luke.webp"></div>`)
				break;
			case 4:
				document.write(`<div><img src="img/anakin.webp"></div>`)
				break;
		}
	}

	let randomNumber = 1 + Math.floor(Math.random() * 4)

	randomImag(randomNumber)
}
