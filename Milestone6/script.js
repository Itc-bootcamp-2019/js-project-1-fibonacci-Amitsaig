/*const spinner = document.getElementById("spinner");
let bigError = document.getElementById('xFibonacci');
let hideError = document.getElementById('errorBox');
let hiddenY = document.getElementById('yFibonacci');
let hide42 = document.getElementById('newError42')*/
/*target.classList.toggle("done");*/

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
	hideY();
}

function checker() {
	let num = parseInt(document.getElementById('xFibonacci').value);
	if  (0 < num && num < 50 && num != 42) {
		defaultBox();
		changer();
	} else if (num == 42) {
		defaultBox()
		document.getElementById('newError42').style.visibility = 'visible';
		hideY();
	} else {
		return error();
	}
}


function changer() {
	showSpinner()
	hideY();
	document.getElementById('newError42').style.visibility = 'hidden'
    let number = document.getElementById('xFibonacci').value;
    let y = fetch('http://localhost:5050/fibonacci/' + number).then(response => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('yFibonacci').innerText = data.result;
            console.log(number);
            showY();
        });
}

document.getElementById("myBtn").addEventListener("click", checker);

function showY() {
    document.getElementById('yFibonacci').style.visibility = 'visible';
}
function hideY() {
    document.getElementById('yFibonacci').style.visibility = 'hidden';
}