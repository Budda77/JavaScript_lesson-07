'user strict'

let wordOfSong = [
	'Oh, in the meadow red viburnum bent down.',
	'For some reason, our glorious Ukraine is distressed.',
	'But we will raise that red viburnum!',
	'And we will cheer our glorious Ukraine up, hey-hey!',
	'Do not bend low, oh red viburnum, you have a white flower,',
	'Do not worry, glorious Ukraine, you have free people.',
	'But we will raise that red viburnum!',
	'And we will cheer our glorious Ukraine up, hey-hey!',
	'Marching forward, our fellow volunteers, into a bloody fray,',
	'To free our brother Ukrainians from Moscow shackles.',
	'And we will liberate our brother Ukrainians,',
	'And we will cheer our glorious Ukraine up, hey-hey!'
	]

function inputTextInList(){
//	let elements = document.getElementsByTagName('li');
	
	let elem = document.getElementById('content');
	let elements = elem.getElementsByTagName('li');
	
	for (var i = 0; i < elements.length; i++) {
		let currentElement = elements[i];
		currentElement.innerHTML = wordOfSong[i];
	}
	
	alert('Total number of tag <li> is '+ elements.length);
}

function createTextInLi(){
	let list = document.querySelector('ol');
	list.innerHTML = '';
	
	for (var i = 0; i < wordOfSong.length; i++) {
		let currentElement = wordOfSong[i];
		
		let listItem = document.createElement('li');
		listItem.textContent = currentElement;
		list.appendChild(listItem);
	}
}	
	
function colorURL(){
	const elem = document.getElementsByTagName('a');

	for(let i=0; i<elem.length; i++){
		let currentElement = elem[i].toString();

		if(currentElement.indexOf("http:") == 0 && currentElement.indexOf("http://internal") == -1){

			console.log( currentElement);
			elem[i].classList = 'external-red';
		}		
	}
}	
	

	
	
	
	
	









