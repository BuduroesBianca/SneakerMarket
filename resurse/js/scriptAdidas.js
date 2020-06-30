
window.onload=function(){
	//creez un obiect de tip XMLHttpRequest cu care pot transmite cereri catre server
	var ajaxRequest = new XMLHttpRequest();


	ajaxRequest.onreadystatechange = function() 
	       {
			//daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
			if (this.readyState == 4 && this.status == 200) {
					//in proprietatea responseText am contintul fiserului JSON
					
					var obJson = JSON.parse(this.responseText);
					afiseajaJsonTemplate(obJson);
					afiseajaJsonTemplate1(obJson);
			}
	};
	//deschid o conexiune cu o cerere de tip get catre server
	//json e pus in folderul static "resurse" deci calea e relativa la acel folder (fisierul e la calea absoluta /resurse/json/produse.json)
	ajaxRequest.open("GET", "/json/produse.json", true);
	//trimit catre server cererea
	ajaxRequest.send();

	function afiseajaJsonTemplate(obJson) { 
			//in acets div voi afisa template-urile   
			let container=document.getElementById("afisAdidas");

			//in textTemplate creez continutul (ce va deveni innerHTML-ul) divului "afisTemplate"
			let textTemplate = "";
			//parcurg vetorul de produse din obJson
		
			for(let i=0;i<9;i++)
			{
				//creez un template ejs (primul parametru al lui ejs.render)
				//acesta va primi ca parametru un produs din vectorul de produse din json {produs: obJson.produse[i]}
				//practic obJson.produse[i] e redenumit ca "produs" in template si putem sa ii accesam proprietatile: produs.id etc
				textTemplate+=ejs.render("<div>\
				<div>\
				<figure><img src = <%= produs.poza %>>\
				<figcaption><%= produs.nume %></figcaption>\
				<figcaption> <%= produs.pret %> <%= produs.moneda %></figcaption>\
				<figcaption> <%= produs.discount %> </figcaption>\
				</figure>\
				</div>\
				</div>", 
				{produs: obJson.produse[i]});
			} 
			//adaug textul cu afisarea produselor in container
			container.innerHTML=textTemplate;
			
			
	}
	
	var data = [{"id":1,"pret":310,"nume":"Yeezy 350 Boost V2 Sesame","poza":"imagini/adidas/1.jpg", "moneda": "$","d":10},
{"id":2,"pret":280,"nume":"Yeezy 350 Boost V2 Yecheil","poza":"imagini/adidas/2.jpg","moneda": "$","d":20},
{"id":3,"pret":380,"nume":"Yeezy 350 Boost V2 Black","poza":"imagini/adidas/3.jpg","moneda": "$","d":10},
{"id":4,"pret":255,"nume":"Yeezy 350 Boost V2 Citrin","poza":"imagini/adidas/4.jpg","moneda": "$","d":10},
{"id":5,"pret":260,"nume":"Yeezy 350 V2 Boost Desert Sage","poza":"imagini/adidas/5.jpg","moneda": "$","d":10},
{"id":6,"pret":550,"nume":"Yeezy 350 Boost V2 Beluga 2.0","poza":"imagini/adidas/6.jpg","moneda": "$","d":10},
{"id":7,"pret":400,"nume":"Yeezy 350 Boost V2 Clay","poza":"imagini/adidas/7.jpg","moneda": "$","d":10},
{"id":8,"pret":350,"nume":"Yeezy 350 Boost V2 Cream White","poza":"imagini/adidas/8.jpg","moneda": "$","d":10},
{"id":9,"pret":420,"nume":"Yeezy 350 Boost V2 Static","poza":"imagini/adidas/9.jpg","moneda": "$","d":10}]

    function sortareDescrescatoare(Key) {
        return function(a, b) {  
            if (a[Key] > b[Key]) {  
                return -1;  
            } else if (a[Key] < b[Key]) {  
                return 1;  
            }  
            
        }  
    }
	
	function sortareCrescatoare(Key) {
        return function(a, b) {  
            if (a[Key] > b[Key]) {  
                return 1;  
            } else if (a[Key] < b[Key]) {  
                return -1;  
            }  
            
        }  
    }

		var btn = document.getElementById("sortD");
		btn.onclick = function()
		{
			var sorted = data.sort(sortareDescrescatoare("pret"));
			var containerDiv = document.getElementById("afisAdidas");
			let textTemplate = "";
		
			for(var i=0; i < sorted.length; i++) {
			
			
				textTemplate+=ejs.render("<div>\
				<div>\
				<figure><img src = <%= produs.poza %>>\
				<figcaption><%= produs.nume %></figcaption>\
				<figcaption> <%= produs.pret %> <%= produs.moneda %></figcaption>\
				</figure>\
				</div>\
				</div>", 
				{produs: sorted[i]});
			}
	
			containerDiv.innerHTML=textTemplate;
		}
		
		var btn1 = document.getElementById("sortC");
		btn1.onclick = function()
		{
			var sorted = data.sort(sortareCrescatoare("pret"));
			var containerDiv = document.getElementById("afisAdidas");
			let textTemplate = "";
		
			for(var i=0; i < sorted.length; i++) {
			
			
				textTemplate+=ejs.render("<div>\
				<div>\
				<figure><img src = <%= produs.poza %>>\
				<figcaption><%= produs.nume %></figcaption>\
				<figcaption> <%= produs.pret %> <%= produs.moneda %></figcaption>\
				</figure>\
				</div>\
				</div>", 
				{produs: sorted[i]});
			}
	
			containerDiv.innerHTML=textTemplate;
		}
		
		
		
		
		function checkPrice(key) {
			return function(a){ 
			return a[key] <= document.getElementById("priceToCheck").value;
			}
		}
		

		var btn2 = document.getElementById("filter");
		btn2.onclick = function()
		{
			
			var val = document.getElementById("priceToCheck").value;
			val = val.toString();
			localStorage.setItem("priceFilter",val);
			
			
			var sorted = data.filter(checkPrice("pret"));
			var containerDiv = document.getElementById("afisAdidas");
			let textTemplate = "";
			
			for(var i=0; i < sorted.length; i++) {
			
			
				textTemplate+=ejs.render("<div>\
				<div>\
				<figure><img src = <%= produs.poza %>>\
				<figcaption><%= produs.nume %></figcaption>\
				<figcaption> <%= produs.pret %> <%= produs.moneda %></figcaption>\
				</figure>\
				</div>\
				</div>", 
				{produs: sorted[i]});
			}
	
			containerDiv.innerHTML=textTemplate;
		}
		
		
		document.getElementById("priceToCheck").value = parseInt(localStorage.getItem("priceFilter"));
		
		var btn3 = document.getElementById("removePrice");
		btn3.onclick = function()
		{
			document.getElementById("removePrice").style.backgroundColor = "#d9d9d9";
			for(var i = 0;i<data.length;i++)
			{
				delete data[i].pret;
				delete data[i].moneda;
			}
			var containerDiv = document.getElementById("afisAdidas");
			let textTemplate = "";
			
			for(var i=0; i < data.length; i++) {
			
				textTemplate+=ejs.render("<div>\
				<div>\
				<figure><img src = <%= produs.poza %>>\
				<figcaption><%= produs.nume %></figcaption>\
				<figcaption> <%= produs.pret %> <%= produs.moneda %></figcaption>\
				</figure>\
				</div>\
				</div>", 
				{produs: data[i]});
			}
	
			containerDiv.innerHTML=textTemplate;
		}
		
		var btn4 = document.getElementById("search");
		btn4.onclick = function(){
    
		var text = document.body.innerText.split(' ');
		var input = document.getElementById("myInput").value;
		var s = [];
    
		for(var i = 0; i < text.length; i++){
			if(text[i].length == input.length && text[i][0] == input[0] && text[i][text[i].length-1] == input[input.length-1]){
        	s.push(text[i]) ;
			}  
		}
		
		 for(var i = 0; i < s.length; i++){
			for(var j = 0;j<text.length;j++){
				if(s[i] == text[j])
					text[j].innerHTML = "<span style='font-size:40px'>text[j]</span>";;
			}
		}
		
			
    
    
		if(s.length > 0){
    	document.getElementById("demo").innerHTML = s;
    }
    else{
		document.getElementById("demo").innerHTML = "This word doesn't exist in this page";
     }
        
 }
 
 
	var btn5 = document.getElementById("discount");
	btn5.onclick = function(){
		
			for(var i = 0; i< data.length;i++){
				data[i].pretFinal = data[i].pret - (data[i].d / 100) * data[i].pret;
			}
			
			
			var containerDiv = document.getElementById("afisAdidas");
			let textTemplate = "";
			
			for(var i=0; i < data.length; i++) {
			
			
				textTemplate+=ejs.render("<div>\
				<div>\
				<figure><img src = <%= produs.poza %>>\
				<figcaption><%= produs.nume %></figcaption>\
				<figcaption> <strike><%= produs.pret %> <%= produs.moneda %> </strike>  <b style = 'color:red;'><%= produs.pretFinal %> <%= produs.moneda %></b></figcaption>\
				</figure>\
				</div>\
				</div>", 
				{produs: data[i]});
			}
	
			containerDiv.innerHTML=textTemplate;
	}
	
	document.getElementById("nrCuvinte").innerHTML = document.body.innerText.split(/\s/).filter(function (txt) {return /\S/.test(txt)}).length;
}

	