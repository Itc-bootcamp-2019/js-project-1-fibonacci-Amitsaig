
function fibo(x) {
	let first = 0;
	let second = 1;
	let y = 0;

	for (let i = 2; i <= x ; i++ ) {
		y = first + second;
		first = second;
		second = y;
	}
	return y;
		
}

function changer() {
	let inputnum = document.getElementById('func').value;
	let y = fibo(inputnum);
	document.getElementById('fibi').innerText = y;
}
document.getElementById("myBtn").addEventListener("click",changer);




