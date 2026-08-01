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

function displayArray() {
	document.getElementById('');
}
