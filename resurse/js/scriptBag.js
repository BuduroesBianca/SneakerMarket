window.onload = function()
{
	function countdown(){
		// Setam data initiala
		var countDownDate = new Date("Aug 30, 2020 12:39:25").getTime();

		// Actualizam numaratoarea la fiecare secunda
		var x = setInterval(function() {

		// Aflsam data si ora curenta
		var now = new Date().getTime();
    
		// Gasim distanta dintre data actuala si cea initiala
		var distance = countDownDate - now;
    
		// calculam anii, lunile, zilele, minutele, secundele
		
		var days = Math.floor(distance  / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
		// afisam dupa id ul "demo"
		document.getElementById("demo").innerHTML = + days + "d " + hours + "h "
		+ minutes + "m " + seconds + "s ";
    
		// daca numaratoarea inversa s-a terminat, afisam text 
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("demo").innerHTML = "EXPIRED";
		}
	}, 1000);
	}
	
	document.getElementById("nrCuvinte").innerHTML = document.body.innerText.split(/\s/).filter(function (txt) {return /\S/.test(txt)}).length;
	
	var  chkbox=document.getElementById("count");
	chkbox.onchange=function(e){
		countdown();
		var d=document.getElementById("demo");
		if(e.currentTarget.checked)
			d.style.display ="block";
		else
			d.style.display ="none";
			
	}
	
	
	var p = document.getElementById('paragraph').innerHTML;
	var btns = document.getElementById("s");
	btns.onclick = function() {
		var paragraph = document.getElementById('paragraph');
		var search = document.getElementById('typed-text').value;
		
		search = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 

		var re = new RegExp(search, 'g');
		
		if (search.length > 0)
			paragraph.innerHTML = p.replace(re, "<mark> $& </mark>");
		else paragraph.innerHTML = p;
}
		var btnr = document.getElementById("reset");
		btnr.onclick = function(){
			location.reload();
		}
}