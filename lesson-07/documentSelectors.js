'user strict'

//function testConnection(){
//	alert('Connection is good.');	
//	console.log('Connection with js file is successful.');
//}


function selectByElement(){
	console.log(content);	
	console.log(window['content-holder']);
}

function changeColorToRed(){
	let contentElement = document.getElementById('content');

	let color = contentElement.style.background;

//	debugger;
		
	switch(color){
	case 'red':
		contentElement.style.background = 'yellow';
		break;
	case 'yellow':
		contentElement.style.background = 'green';
		break;
	case 'green':
		contentElement.style.background = 'white';
		break;
	case 'white':
		contentElement.style.background = 'red';
		break;

	default:
		contentElement.style.background = 'red';
	break;

	}		
}

function selectByTagName(){
	let tableElement = document.getElementById('custom-table');
	let elements = tableElement.getElementsByTagName('input');
	
	for (let i = 0; i < elements.length; i++) {
		
		let currentInput = elements[i];
		console.log(currentInput.attributes.value.nodeValue+' ----> '+currentInput.checked);		
	}	
}

function useQuerySelectors(){
	let elements = document.querySelectorAll('ul>li:last-child');
	
	for (let i = 0; i < elements.length; i++) {
		let currentElement = elements[i];
		console.log(currentElement.innerHTML);
		
		currentElement.innerHTML = '----->'
	}
}

function selectCustomAttributes(){
	let element = document.getElementById('divWithCustomAttributters');
console.log(element.getAttribute('data-about'));
console.log(element.getAttribute('data-current-student-name'));

console.log(element.dataset.about);
console.log(element.dataset.currentStudentName);

}






















