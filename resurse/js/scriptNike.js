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

	function afiseajaJsonTemplate(obJson) 
	{ 
	
			//in acets div voi afisa template-urile   
			let container=document.getElementById("afisNike");
			//in textTemplate creez continutul (ce va deveni innerHTML-ul) divului "afisTemplate"
			let textTemplate = "";
			//parcurg vetorul de produse din obJson
			for(let i=9;i<18;i++)
			{
				//creez un template ejs (primul parametru al lui ejs.render)
				//acesta va primi ca parametru un produs din vectorul de produse din json {student: obJson.produse[i]}
				//practic obJson.produse[i] e redenumit ca "produs" in template si putem sa ii accesam proprietatile:produs.id etc
				textTemplate+=ejs.render("<div>\
				<div>\
				<figure><img src = <%= produs.poza %>>\
				<figcaption><%= produs.nume %></figcaption>\
				<figcaption> <%= produs.pret %> <%= produs.moneda %></figcaption>\
				</figure>\
				</div>\
				</div>", 
				{produs: obJson.produse[i]});
			} 
			//adaug textul cu afisarea produselor in container
			container.innerHTML=textTemplate;		
	}
	
	var data = [{"id":10,"pret":390,"nume":"Jordan 1 Retro High 'Game Royal'","poza":"imagini/nike/1.jpg","moneda": "$"},
{"id":11,"pret":330,"nume":"Jordan 1 Retro High 'Obsidian'","poza":"imagini/nike/2.jpg","moneda": "$"},
{"id":12,"pret":210,"nume":"Jordan 1 Retro High 'Zoom White Racer Blue'","poza":"imagini/nike/3.jpg","moneda": "$"},
{"id":13,"pret":220,"nume":"Jordan 1 Retro High 'UNC to Chicago'","poza":"imagini/nike/4.jpg","moneda": "$"},
{"id":14,"pret":205,"nume":"Jordan 1 Retro High 'Pine Green'","poza":"imagini/nike/5.jpg","moneda": "$"},
{"id":15,"pret":290,"nume":"Jordan 1 Retro High 'Shattered Backboard'","poza":"imagini/nike/6.jpg","moneda": "$"},
{"id":16,"pret":340,"nume":"Jordan 1 Retro High 'NYC to Paris'","poza":"imagini/nike/7.jpg","moneda": "$"},
{"id":17,"pret":360,"nume":"Jordan 1 Retro High 'Track Red'","poza":"imagini/nike/8.jpg","moneda": "$"},
{"id":18,"pret":500,"nume":"Jordan 1 Retro High 'LA to Chicago'","poza":"imagini/nike/9.jpg","moneda": "$"}]

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
			var containerDiv = document.getElementById("afisNike");
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
			var containerDiv = document.getElementById("afisNike");
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
			var sorted = data.filter(checkPrice("pret"));
			var containerDiv = document.getElementById("afisNike");
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
		
		document.getElementById("nrCuvinte").innerHTML = document.body.innerText.split(/\s/).filter(function (txt) {return /\S/.test(txt)}).length;
}
	
