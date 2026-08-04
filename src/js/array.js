let curArray = [];

function addValue() {
	let value = Number(document.getElementById('numberInput').value);
	curArray.push(value);
	document.querySelector('#curArrayInfo').innerHTML = curArray;
	document.querySelector('#maxNumberOfArray').innerHTML = curArray.length - 1;
}

document.querySelector('#btnInput').addEventListener('click', addValue);

function sumArray() {
	let value = 0;
	for (let index = 0; index < curArray.length; index++) {
		if (curArray[index] > 0) value += curArray[index];
	}
	document.querySelector('#btnSumResult').innerHTML = value;
}

document.querySelector('#btnSum').addEventListener('click', sumArray);

function countArray() {
	let value = 0;
	for (let index = 0; index < curArray.length; index++) {
		if (curArray[index] > 0) {
			value++;
		}
	}
	document.querySelector('#btnCountResult').innerHTML = value;
}

document.querySelector('#btnCount').addEventListener('click', countArray);

function findSmallestNumber() {
	let value = curArray[0];
	for (let index = 1; index < curArray.length; index++) {
		if (curArray[index] < value) value = curArray[index];
	}

	/**
	 * Alternate Solution
	 * let tempArray = curArray.toSorted((a, b) => a - b);
	 * let value = tempArray[0]
	 */

	document.querySelector('#btnSmallestResult').innerHTML = value;
}

document
	.querySelector('#btnSmallest')
	.addEventListener('click', findSmallestNumber);

function findSmallestPositiveNumber() {
	let value = curArray[0];
	for (let index = 1; index < curArray.length; index++) {
		if (curArray[index] < value && curArray[index] > 0)
			value = curArray[index];
	}

	/**
	 * Alternate Solution
	 * let tempArray = curArray.toSorted((a, b) => a - b);
	 * let value = tempArray[0]
	 * 	let value = curArray[0];
	 *	for (let index = 0; index < curArray.length; index++) {
	 *		if (curArray[index] > 0)
	 *			value = curArray[index];
	 *			break;
	 *	}
	 */

	document.querySelector('#btnSmallestPositiveResult').innerHTML = value;
}

document
	.querySelector('#btnSmallestPositive')
	.addEventListener('click', findSmallestPositiveNumber);

function findLastOddNumber() {
	let value = -1;
	for (let index = curArray.length - 1; index >= 0; index--) {
		if (curArray[index] % 2 == 0) value = curArray[index];
		document.querySelector('#btnFindLastOddNumberResult').innerHTML = value;
		return;
	}
}

document
	.querySelector('#btnFindLastOddNumber')
	.addEventListener('click', findLastOddNumber);

function swapNumber() {
	let valuePos1 = document.getElementById('valuePos1').value;
	let valuePos2 = document.getElementById('valuePos2').value;

	let tempValue = curArray[valuePos1];
	curArray[valuePos1] = curArray[valuePos2];
	curArray[valuePos2] = tempValue;

	document.querySelector('#btnSwapResult').innerHTML = curArray;
}

document.querySelector('#btnSwap').addEventListener('click', swapNumber);

function sortAscArray() {
	document.getElementById('btnSortAscResult').innerHTML = curArray.sort(
		(a, b) => a - b,
	);
}

document.querySelector('#btnSortAsc').addEventListener('click', sortAscArray);

function isPrime() {
	let value = -1;

	for (let i = 0; i < curArray.length; i++) {
		let element = curArray[i];

		if (element <= 1) continue;
		if (element == 2) {
			value = element;
			break;
		}

		if (element % 2 == 0) continue;

		const boundary = Math.sqrt(curArray[index]);
		for (let j = 3; j < boundary; j += 2) {
			if (element % j == 0) continue;
		}
		value = element;
		break;
	}

	document.getElementById('btnIsPrimeResult').innerHTML = value;
}

document.querySelector('#btnIsPrime').addEventListener('click', isPrime);

function countInteger() {
	let value = 0;

	for (let index = 0; index < curArray.length; index++) {
		if (Number.isInteger(curArray[index])) value++;
	}
	document.getElementById('btnCountIntegerResult').innerHTML = value;
}

document
	.getElementById('btnCountInteger')
	.addEventListener('click', countInteger);

function countSeparateInteger() {
	let valuePositive = 0;
	let valueNegative = 0;
	let textResult = '';

	for (let index = 0; index < curArray.length; index++) {
		if (!Number.isInteger(curArray[index])) continue;
		if (curArray[index] >= 0) valuePositive++;
		else valueNegative++;
	}

	if ((valuePositive = valueNegative))
		textResult = `Số dương (${valuePositive}) = Số âm (${valueNegative})`;
	else if (valuePositive > valueNegative)
		textResult = `Số dương (${valuePositive}) > Số âm (${valueNegative})`;
	else textResult = `Số dương (${valuePositive}) < Số âm (${valueNegative})`;

	document.getElementById('btnCountSIntegerResult').innerHTML = textResult;
}

document
	.getElementById('btnCountSInteger')
	.addEventListener('click', countInteger);
