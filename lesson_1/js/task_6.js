"use strict"

// Вводимо дані
const firstGoodsCost = parseInt(prompt(`Введіть вартість першого товару в грн.`, ``))
const secondGoodsCost = parseInt(prompt(`Введіть вартість другого товару в грн.`, ``))
const thirdGoodsCost = parseInt(prompt(`Введіть вартість третього товару в грн.`, ``))
const firstGoods = parseInt(prompt(`Введіть кількість першого товару`, ``))
const secondGoods = parseInt(prompt(`Введіть кількість другого товару`, ``))
const thirdGoods = parseInt(prompt(`Введіть кількість третього товару`, ``))

// Обчислюеммо вирази
const firstTotalCost = firstGoodsCost * firstGoods
const secondTotalCost = secondGoodsCost * secondGoods
const thirdTotalCost = thirdGoodsCost * thirdGoods
const totalCost = firstTotalCost + secondTotalCost + thirdTotalCost


// Виводемо дані в таблицю
document.write(`
	<h3>Чек оперції обчислення</h3>
	<table>
		<tr>
			<th>Товар</th>
			<th>Кількість товару</th>
			<th>Вартість товару за одиницю</th>
			<th>Загальна вартість товару</th>
		</tr>
		<tr>
			<td>Товар №1</td>
			<td>${firstGoods}шт.</td>
			<td>${firstGoodsCost}грн.</td>
			<td>${firstTotalCost}грн.</td>
		</tr>
			<tr>
			<td>Товар №2</td>
			<td>${secondGoods}шт.</td>
			<td>${secondGoodsCost}грн.</td>
			<td>${secondTotalCost}грн.</td>
		</tr>
			<tr>
			<td>Товар №3</td>
			<td>${thirdGoods}шт.</td>
			<td>${thirdGoodsCost}грн.</td>
			<td>${thirdTotalCost}грн.</td>
		</tr>
		<tr>
			<td>Загальна вартість</td>
			<td colspan="3" >${totalCost}грн.</td>
		</tr>
	</table>
	`)
