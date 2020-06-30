window.onload = function()
{
		
		var btn = document.getElementById("old");
		btn.onclick = function()
		{
			// accesam data nasterii
			var birthDate = document.getElementById("age").value.split("#");
			var date_birthDate = new Date(birthDate[2], birthDate[1] - 1, birthDate[0]).getTime();
		
			// actualizam numartoarea la fiecare secunda
			var x = setInterval(function() {

			// aflaz data si ora curenta
			var now = new Date().getTime();
    
			// gasim distanta dintre data curenta si data nasterii
			var distance = now - date_birthDate;
    
			// calculam anii, lunile, minutele, secundele
			var years = 0;
			var days = Math.floor(distance  / (1000 * 60 * 60 * 24));
			if (days > 365) {
				years = Math.floor(days / 365);
				days = days % 365;
			}
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
			// afisam 
			document.getElementById("print").innerHTML = years + "yrs " + days + "d " + hours + "h "
			+ minutes + "m " + seconds + "s ";
    
			
		}, 1000);
		
	}
	
	var btn = document.getElementById("reducere");
	btn.onclick = function()
	{
		setTimeout(myFunction, 1000);
	}
	
	function myFunction()
	{
		alert("Congratulations! Use the code NX6RTO9 for 25% OFF!");
	}
	
	document.getElementById("nrCuvinte").innerHTML = document.body.innerText.split(/\s/).filter(function (txt) {return /\S/.test(txt)}).length;
	
	var btn1 = document.getElementById("bckcolor");
		btn1.onclick = function()
		{	
			var color = document.getElementById("color").value;
			document.body.style.background = color;
			if(document.body.style.background == ""){
				alert("You didn't insert a valid color for the background! Try again!");
			}
		
	}
	
	var btn2 = document.getElementById("hide");
	btn2.onclick = function()
	{
		var images = document.getElementsByTagName('img');
		if(images[0].style.display === "none")
		{
			for(var i = 0 ;i<images.length; i++){
				images[i].style.display = "block";
			}
		btn2.innerHTML = "Hide Images";
		}
		else
		{
			for(var i = 0; i<images.length; i++) {
				images[i].style.display = "none";
			}
		btn2.innerHTML = "Show Images";
		}
		
	}
	
	
	var ore = [["08:00:00","09:00:00"], ["11:00:00","12:00:00"],["16:00:00","20:00:00"]];
		var data = new Date();
		var ora_curenta = data.getHours();
		var minute_curente = data.getMinutes();
		var x = document.getElementById("happy");
		
		
        for(var i = 0;i < ore.length;i++){
        	var ora1 = parseInt(ore[i][0]);
            var minute1 = parseInt(ore[i][0].slice(3,5));
            
            var ora2 = parseInt(ore[i][1]);
            var minute2 = parseInt(ore[i][1].slice(3,5));
            
            if(ora_curenta >= ora1 && ora_curenta <= ora2) {
            	if(ora1 == ora_curenta){
                	if(minute_curente >= minute1){
						x.style.display = "block";
                	}
                }
                else if(ora2 == ora_curenta){
                	if(minute_curente <= minute2){
                   		x.style.display = "block";
                    }
                }
                else{
					x.style.display = "block";
                }
                
            }
			else{
				x.style.display = "none";
			}
        }	
		

	
}
