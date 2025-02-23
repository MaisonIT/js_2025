"use strict"

if (confirm('Почати тестування?')) {
	let countFirstImg = 0
	let countSecondImg = 0
	let countThirdImg = 0
	let countFourthImg = 0

	document.write(`<div class="items">`)
	for (let i = 1; i <= 3; i++) {
		let randomNumber = 1 + Math.floor(Math.random() * 4)
		if (randomNumber === 1) countFirstImg += 1
		if (randomNumber === 2) countSecondImg += 1
		if (randomNumber === 3) countThirdImg += 1
		if (randomNumber === 4) countFourthImg += 1

		switch (randomNumber) {
			case 1:
				document.write(`<div class="item"><img src="/img/lemon.webp"></div>`)
				break
			case 2:
				document.write(`<div class="item"><img src="/img/apple.webp"></div>`)
				break
			case 3:
				document.write(`<div class="item"><img src="/img/cherry.webp"></div>`)
				break
			case 4:
				document.write(`<div class="item"><img src="/img/bell.webp"></div>`)
				break
		}
	}
	document.write(`</div>`)

	if (countFirstImg === 3) alert(`Ви виграли 100грн.`)
	if (countSecondImg === 3) alert(`Ви виграли 200грн.`)
	if (countThirdImg === 3) alert(`Ви виграли 500грн.`)
	if (countFourthImg === 3) alert(`Ви виграли 1000грн.`)

}