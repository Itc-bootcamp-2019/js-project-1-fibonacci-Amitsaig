
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

let xx = document.getElementById('x');
xx.innerText = 8;
document.getElementById('y').innerText = fibo(8)


