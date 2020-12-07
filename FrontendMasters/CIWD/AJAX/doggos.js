const DOG_URL = 'https://dog.ceo/api/breeds/image/random';
//const promise = fetch(DOG_URL);
const doggos = document.querySelector('.doggos');


// promise.then(function(response){
//     const processingPromise = response.json()
//     return processingPromise;
// })
// .then(function(processedResponse){
//     const img = document.createElement("img");
//     img.src = processedResponse.message;
//     img.alt = "Cut doggo"
//     doggos.appendChild(img);
//     console.log(processedResponse.message)

// });

function addNewDoggo() {
	const img = document.createElement('img');
	doggos.appendChild(img);
	img.alt = 'Cute dog';
	img.src = './2.gif';

	const promise = fetch(DOG_URL);
	promise
		.then(function (response) {
			const processingPromise = response.json();
			return processingPromise;
		})
		.then(function (processedResponse) {
			img.src = processedResponse.message;
		});
}

document.querySelector('.add-doggo').addEventListener('click', addNewDoggo);
