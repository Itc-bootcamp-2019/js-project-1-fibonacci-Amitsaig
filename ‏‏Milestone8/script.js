let scroll = document.getElementById("topBtn");
let sorting = document.getElementById('sortList');
let searchBox = document.getElementById('xFibonacci')
let answer = document.getElementById('yFibonacci');
let mistake = document.getElementById('errorBox');
let error42 = document.getElementById('newError42');

//xFibonacci.classList.remove("red-xFibonacci")
//sort list of results
sorting.onchange = function() {sortBy()};
/*function() {sortBy()};*/

function sortBy() {
	fetch('http://localhost:5050/getFibonacciResults').then((response) => {
    return response.json();
  	})
  	.then((data) => {
	let resultsList = document.getElementById('resultsList');
	resultsList.innerHTML = ''
	resultList();
	
})}

// scroll top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// spinner function
function showSpinner() {
    spinner.className = "show";
    setTimeout(() => {
        spinner.className = spinner.className.replace("show", "");
    }, 600);
}
// style changing functions
function defaultBox() {
/*	document.getElementById('errorBox').style.visibility = 'hidden';*/
	mistake.classList.add('hidden-error');
	mistake.classList.remove('errorBox');
	searchBox.classList.add('xFibonacci');
	searchBox.classList.remove('red-box');
}
function error() {
	/*document.getElementById('errorBox').style.visibility = 'visible';*/
	mistake.classList.add('errorBox');
	mistake.classList.remove('hidden-error');
	error42.classList.remove('pop-error');
	error42.classList.add('newError42');
	/*document.getElementById('newError42').style.visibility = 'hidden';*/
	searchBox.classList.remove('xFibonacci');
	searchBox.classList.add('red-box');
	/*document.getElementById('yFibonacci').style.visibility = 'hidden';*/
	answer.classList.add('answer')
}

//checking input number
function checker() {
	let num = parseInt(document.getElementById('xFibonacci').value);
	if  (0 < num && num < 50 && num != 42) {
		defaultBox();
		changer();
	} else if (num == 42) {
		defaultBox()
		error42.classList.add('pop-error');
		error42.classList.remove('newError42');
		answer.classList.add('answer')
	} else {
		return error();
	}
}

// function + result
function changer() {
	showSpinner()
	answer.classList.add('answer')
	error42.classList.remove('pop-error');
	error42.classList.add('newError42');
    let number = document.getElementById('xFibonacci').value;
    let y = fetch('http://localhost:5050/fibonacci/' + number).then(response => {
            return response.json();
        })
        .then((data) => {;
            document.getElementById('yFibonacci').innerText = data.result;
            answer.classList.remove('answer')
            answer.classList.add('yFibonacci')
            function createNew() {
            	let resultsList = document.getElementById('resultsList');
  				let newResult = document.createElement('div');
    			let date = new Date(data.createdDate);
				resultsList.appendChild(newResult);
				newResult.classList.add('append-class')
				newResult.innerHTML += 'The Fibonacci Of ' + data.number 
				+ ' is ' + data.result + ' Calculated at: ' 
				+ date.toString() + '  <br>' ;
            }
            createNew();
        });
}

// ONE BUTTON TO RULE THEM ALL
document.getElementById("myBtn").addEventListener("click", checkBox);

// GENESIS
window.onload = resultList();

function resultList() {
	fetch('http://localhost:5050/getFibonacciResults').then((response) => {
    return response.json();
  	})
  		.then((data) => {
  			//build on existing function
			//loop through the value function
		/*	data.results.sort(function(a, b) {
			return (b.createdDate - a.createdDate);})*/
			if (sorting.value == 1) {				
				data.results.sort(function(a, b) {
				return (a.number - b.number);})	

			} else if (sorting.value == 2) {
				data.results.sort(function(a, b) {
				return (b.number - a.number);})

			} else if (sorting.value == 3) {
				data.results.sort(function(a, b) {
				return (a.createdDate - b.createdDate);})

			} else if (sorting.value == 4) {
				data.results.sort(function(a, b) {
				return (b.createdDate - a.createdDate);}) 
			}
  			let resultsList = document.getElementById('resultsList');
    		function listOfResults() {
			for (i = 0; i < data.results.length; i++ ) {
  			let newResult = document.createElement('div');
    			let date = new Date(data.results[i].createdDate);
				resultsList.appendChild(newResult);
				newResult.classList.add('append-class')
				newResult.innerHTML += 'The Fibonacci Of ' + data.results[i].number 
				+ ' is ' + data.results[i].result + ' Calculated at: ' 
				+ date.toString() + '  <br>' ;		
			}
}
    	listOfResults();					
	});
}

// save or not depending on checkbox
async function checkBox() {
 	let saving = await document.getElementById('checkBox');
 	if (saving.checked == true){
 		checker();
 	} else {
 		manualChanger();
 	}
 }

// manual check 
function manualFibonacci(x) {
	if (x < 2) {
		return x;
	} else {
		return manualFibonacci(x - 2) + manualFibonacci(x - 1);
	}

/*	let first =  0;
	let second = 1;
	let y = 0;

	for (let i = 2; i <= x ; i++ ) {
		y = first + second;
		first = second;
		second = y;
	}
	return y;*/	
}

function manualChanger() {
	let inputnum = document.getElementById('xFibonacci').value;
	let y = manualFibonacci(inputnum);
	document.getElementById('yFibonacci').innerText = y;
}