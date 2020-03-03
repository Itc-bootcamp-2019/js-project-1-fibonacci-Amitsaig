/*function functi(number) {
	fetch('http://localhost:5050/fibonacci/:')
}*/
/*let y = functi(number);*/

function changer() {
	let number = document.getElementById('func').value;
	let y = fetch('http://localhost:5050/fibonacci/' + number).then(response => {
    return response.json(); })
    .then((data) => {
    console.log(data);
	document.getElementById('fibi').innerText = data.result;
	console.log(number)
  	});
}
document.getElementById("myBtn").addEventListener("click",changer);

/*.toString()).then(response => console.log(response) );*/