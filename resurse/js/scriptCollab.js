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
	//json e pus in folderul static "resurse" deci calea e relativa la acel folder (fisierul e la calea absoluta /resurse/json/produsi.json)
	ajaxRequest.open("GET", "/json/produse.json", true);
	//trimit catre server cererea
	ajaxRequest.send();

	function afiseajaJsonTemplate(obJson) { 
			//in acets div voi afisa template-urile   
			let container=document.getElementById("afisCollab");

			//in textTemplate creez continutul (ce va deveni innerHTML-ul) divului "afisTemplate"
			let textTemplate = "";
			//parcurg vetorul de produse din obJson
			for(let i=18;i<27;i++)
			{
				//creez un template ejs (primul parametru al lui ejs.render)
				//acesta va primi ca parametru un produs din vectorul de produsi din json {produs: obJson.produsi[i]}
				//practic obJson.produsi[i] e redenumit ca "produs" in template si putem sa ii accesam proprietatile: produs.id etc
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
	
	var data = [{"id":19,"pret":525,"nume":"Air Force 1 Travis Scott Cactus Jack","poza":"imagini/collaborations/1.jpg","moneda": "$"},
{"id":20,"pret":1800,"nume":"Jordan 1 Retro High Travis Scott","poza":"imagini/collaborations/2.jpg","moneda": "$"},
{"id":21,"pret":1500,"nume":"Nike SB Dunk Low Travis Scott","poza":"imagini/collaborations/3.jpg","moneda": "$"},
{"id":22,"pret":530,"nume":"Nike LD Waffle Sacai 'Pine Green'","poza":"imagini/collaborations/4.jpg","moneda": "$"},
{"id":23,"pret":490,"nume":"Nike LD Waffle Sacai 'Blue Multi'","poza":"imagini/collaborations/5.jpg","moneda": "$"},
{"id":24,"pret":510,"nume":"Nike LD Waffle Sacai 'Summit White'","poza":"imagini/collaborations/6.jpg","moneda": "$"},
{"id":25,"pret":1000,"nume":"Air Force 1 Low Off White 'Volt'","poza":"imagini/collaborations/7.jpg","moneda": "$"},
{"id":26,"pret":600,"nume":"Nike Dunk Off White 'Pine Green'","poza":"imagini/collaborations/8.jpg","moneda": "$"},
{"id":27,"pret":850,"nume":"Air Force 1 Low Off White Black","poza":"imagini/collaborations/9.jpg","moneda": "$"}]

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
			var containerDiv = document.getElementById("afisCollab");
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
			var containerDiv = document.getElementById("afisCollab");
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
			var containerDiv = document.getElementById("afisCollab");
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