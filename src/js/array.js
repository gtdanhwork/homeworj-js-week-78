let curArray = [];

function addValue() {
	let value = Number(document.getElementById('numberInput').value);
	curArray.push(value);
	document.querySelector('#curArrayInfo').innerHTML = curArray;
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
	document.querySelector('#btnSmallestPositiveResult').innerHTML = value;
}

document
	.querySelector('#btnSmallest')
	.addEventListener('click', findSmallestPositiveNumber);
