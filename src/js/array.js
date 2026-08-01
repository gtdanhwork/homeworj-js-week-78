let curArray = [];

function addValue() {
	let value = Number(document.getElementById('numberInput').value);
	console.log(value);
	curArray.push(value);
	document.querySelector('#curArrayInfo').innerHTML = curArray;
}

document.querySelector('#btnInput').addEventListener('click', addValue);

function sumArray() {}

function displayArray() {
	document.getElementById('');
}
