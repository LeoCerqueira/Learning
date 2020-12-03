let result = document.querySelector('.result'); // screen
let equal = 0;
let tempVar = 0;
let tempVar1 = 0;
let confirmation = false;

//----------add to the Screen

document.querySelector('.numbers').addEventListener('click', function (event) {
	if (event.target.innerText.length == 1 && result.innerText == 0) {
		result.innerText = event.target.innerText;
	} else if (event.target.innerText.length == 1 && result.innerText != 0) {
		result.innerText = `${result.innerText}` + event.target.innerText;
	}
});

//----------------Clear

document.querySelector('.clear').addEventListener('click', function () {
	result.innerText = 0;
	equal = 0;
});

//-------------=---Erase

document.querySelector('.erase').addEventListener('click', function () {
	if (result.innerText != 0 && result.innerText.length != 1) {
		result.innerText = result.innerText.slice(0, -1);
	} else if (result.innerText != 0 && result.innerText.length == 1) {
		result.innerText = 0;
	}
});

document.querySelector('.aside').addEventListener('click', function (event) {
	if (event.target.innerText.length == 1 && result.innerText != 0) {
		let operator = event.target.innerText;
		console.log(operator);
		switch (operator) {
			case '+':
				result.innerText = result.innerText + '+';
				break;
			case 'x':
				result.innerText = result.innerText + '*';
				break;
			case '-':
				result.innerText = result.innerText + '-';
				break;
			case '/':
				result.innerText = result.innerText + '/';
				break;
		}
	}
});

document.querySelector('.equal').addEventListener('click', function () {
	equal = result.innerText;
	result.innerText = eval(equal).toFixed(2);
});
