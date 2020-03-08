let scroll = document.getElementById("topBtn");
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showSpinner() {
    spinner.className = "show";
    setTimeout(() => {
        spinner.className = spinner.className.replace("show", "");
    }, 600);
}

function defaultBox() {
	document.getElementById('errorBox').style.visibility = 'hidden';
	document.getElementById('xFibonacci').style.color = 'black';
	document.getElementById('xFibonacci').style.border = '1px solid #CCCCCC';
}

function error() {
	document.getElementById('errorBox').style.visibility = 'visible';
	document.getElementById('newError42').style.visibility = 'hidden';
	document.getElementById('xFibonacci').style.color = '#D9534F';
	document.getElementById('xFibonacci').style.border = '1px solid #FD1F1F';
	document.getElementById('yFibonacci').style.visibility = 'hidden';
}

function checker() {
	let num = parseInt(document.getElementById('xFibonacci').value);
	if  (0 < num && num < 50 && num != 42) {
		defaultBox();
		changer();
	} else if (num == 42) {
		defaultBox()
		document.getElementById('newError42').style.visibility = 'visible';
		document.getElementById('yFibonacci').style.visibility = 'hidden';
	} else {
		return error();
	}
}


function changer() {
	showSpinner()
	document.getElementById('yFibonacci').style.visibility = 'hidden';
	document.getElementById('newError42').style.visibility = 'hidden'
    let number = document.getElementById('xFibonacci').value;
    let y = fetch('http://localhost:5050/fibonacci/' + number).then(response => {
            return response.json();
        })
        .then((data) => {;
            document.getElementById('yFibonacci').innerText = data.result;
            document.getElementById('yFibonacci').style.visibility = 'visible';
            function createNew() {
            	let resultsList = document.getElementById('resultsList');
  				let newResult = document.createElement('div');
    			let date = new Date(data.createdDate);
				resultsList.appendChild(newResult);
				newResult.classList.add('append-class')
				newResult.innerHTML += 'The Fibonacci of ' + data.number 
				+ ' is ' + data.result + ' Calculated at: ' 
				+ date.toUTCString() + '  <br>' ;
            }
            createNew();
        });
}
document.getElementById("myBtn").addEventListener("click", checker);

window.onload = function resultList() {
	fetch('http://localhost:5050/getFibonacciResults').then((response) => {
    return response.json();
  	})
  		.then((data) => {
  			/*console.log(data.results[0])*/
  			let resultsList = document.getElementById('resultsList');
    		function listOfResults() {
			for (i = 0; i < data.results.length; i++ ) {
  			let newResult = document.createElement('div');
    			let date = new Date(data.results[i].createdDate);
				resultsList.appendChild(newResult);
				newResult.classList.add('append-class')
				newResult.innerHTML += 'The Fibonacci of ' + data.results[i].number 
				+ ' is ' + data.results[i].result + ' Calculated at: ' 
				+ date.toUTCString() + '  <br>' ;
				
			}
}
    	listOfResults();	
			
				
			
	});
}

/*resultsList = [listOfResults() for (i in range(data))]*/
/*for (i in data.results);
resultsList.append(resultsList);*/