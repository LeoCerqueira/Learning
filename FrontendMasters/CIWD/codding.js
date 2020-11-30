const input = document.querySelector('.input-to-copy');
const paragraph = document.querySelector('.p-to-copy-to');

input.addEventListener('keyup', function () {
	paragraph.innerText = input.value;
});

document
	.querySelector('.button-container')
	.addEventListener('click', function (event) {
		if (event.target.tagName === 'BUTTON') {
			alert(`You clicked on button ${event.target.innerText}`);
        }
        event.stopPropagation();
	});
