

// cream butonul "close" si il adaugam la itemurile din lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// cand apasam pe "close" ascundem liniile din lista
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



// cream o noua linie a listei cand apasam pe butonul "Add"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
window.onload = function(){
document.getElementById("nrCuvinte").innerHTML = document.body.innerText.split(/\s/).filter(function (txt) {return /\S/.test(txt)}).length;
}

// Setam data initiala
		var countDownDate = new Date("Jun 30, 2020 12:39:25").getTime();

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
