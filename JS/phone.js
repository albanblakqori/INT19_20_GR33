function ndrysho(){
element=document.getElementById("galaxy");
	if(element.src.match("samsung"))
		{
			element.src="images/tel/sams.jpg";
		}
	else if(element.src.match("sams")){
		element.src="images/tel/sam.jpg";
	}
	else{
			element.src="images/tel/samsung.jpg";
		}
}

var d= new Date();
console.log(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

function change_background(){
	if(d.getHours()>12 && (d.getHours() < 23 && d.getMinutes() < 59)){
		document.body.style.backgroundColor="#ffffff";
	}else{
		document.body.style.backgroundColor="#dadada";
	}
}

try{
	change_background();
	console.log('Backgroundi u nryshua me sukses');
}catch(TypeError){
	console.log('Tagu body nuk eshte krijuar ende, e shtojme ne onload.');
	window.onload=function(){
		change_background();
	}
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
	var zeri1 = new Audio('/sound/bloop.mp3');
	var zeri2 = new Audio('sound/bloop.mp3');
	zeri1.play()
	zeri2.play()
}
//Redirektimi nese nuk ka variabel te shkruar ne emrin name ne localStorage;
if(localStorage.getItem('name') === null){
	window.location.href = 'login.html';
}
