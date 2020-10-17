 var nameofturned = new Array("Mikhailov Dmytro && Krasun Vadym",
	 				"Oleksandr Serhieiev && Artem Kozak",
 					"Olasiuk Anastasiia && Demchyk Nazar && Bohdan Lisovski",
 					"Vietrova Viktoriia && Nahaievska Marharyta",
 					"Kapsewych Illia && Pasechnyk Dmitriy",
 					"Gabruk Maksym && Iuzefovych Vladyslav",
 					"Zhuk Sasza && Nazaruk Maksim",
 					"Horblianskyi Mykhailo && Fliunder Maksym && Ostap Bondar",
 					"Rudyk Ivanka && Horaichuk Daryna",
 					"Zahaniakha Daria && Nadia Tsupryk && Maria Farion",
 					"Dzień jest wolny!");
	var dz = document.getElementById("currentShift");
	var today = new Date();
	var day = today.getDate();
	if(day == 1 || day == 11 || day == 21 ){
		dz.innerHTML = nameofturned[0];
	}else if(day == 2 || day == 12 || day == 22 ){
		dz.innerHTML = nameofturned[1];
	}else if(day == 3 || day == 13 || day == 23 ){
		dz.innerHTML = nameofturned[2];
	}else if(day == 4 || day == 14 || day == 24 ){
		dz.innerHTML = nameofturned[3];
	}else if(day == 5 || day == 15 || day == 25 ){
		dz.innerHTML = nameofturned[4];
	}else if(day == 6 || day == 16 || day == 26 ){
		dz.innerHTML = nameofturned[5];
	}else if(day == 7 || day == 17 || day == 27 ){
		dz.innerHTML = nameofturned[6];
	}else if(day == 8 || day == 18 || day == 28 ){
		dz.innerHTML = nameofturned[7];
	}else if(day == 9 || day == 19 || day == 29 ){
		dz.innerHTML = nameofturned[8];
	}else if(day == 10 || day == 20 || day == 30 ){
		dz.innerHTML = nameofturned[9];
	}else{
		dz.innerHTML = nameofturned[10];
	}
window.addEventListener("keydown", function(event) {
	  if (event.defaultPrevented) {
    return; 
  }
	var InAdmin = document.getElementById("adnimin");
	if(event.altKey && event.code === "KeyJ"){
		InAdmin.style.display = "block";

	}
})

/*function checkinfo(){


	var login = document.getElementById("name").value;
	var password = document.getElementById("password").value;
	var ap = document.getElementById("ADMINPANEL");
	if(login == _0x1ecf[0] && password == _0x1ecf[1]){
		ap.style.display = "block";

	}
	
}*/
/*function addpoint(){
	var valin = document.getElementsByName("pointinput").value;
	valin += 1;
}*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myTopnav").style.top = "0";
    document.getElementById("myTopnav").style.display = "block";
  } else {
    document.getElementById("myTopnav").style.top = "-50px";

  }
  prevScrollpos = currentScrollPos;
}



 var namefortable = [
 	
 	{
		"name":"Mikhailov Dmytro",
		"points":"3"
	},
	{
		"name":"Krasun Vadym",
		"points":"3.5"
	},
	{
		"name":"Oleksandr Serhieiev",
		"points":"3.5"
	},
	{
		"name":"Artem Kozak",
		"points":"3"
	},
		{
		"name":"Olasiuk Anastasiia",
		"points":"8.5"
	},
		{
		"name":"Demchyk Nazar",
		"points":"8.5"
	},
		{
		"name":"Vietrova Viktoriia",
		"points":"1.5"
	},
		{
		"name":"Nahaievska Marharyta",
		"points":"0"
	},
		{
		"name":"Kapsewych Illia",
		"points":"3"
	},
		{
		"name":"Pasechnyk Dmitriy",
		"points":"5"
	},
		{
		"name":"Gabruk Maksym",
		"points":"4"
	},
		{
		"name":"Iuzefovych Vladyslav",
		"points":"4"
	},
		{
		"name":"Zhuk Sasza",
		"points":"0"
	},
		{
		"name":"Nazaruk Maksim",
		"points":"3"
	},

		{
		"name":"Horblianskyi Mykhailo",
		"points":"0"
	},
		{
		"name":"Fliunder Maksym",
		"points":"0"
	},
		{
		"name":"Rudyk Ivanka",
		"points":"0.5"
	},
		{
		"name":"Horaichuk Daryna",
		"points":"0"
	},
		{
		"name":"Zahaniakha Daria",
		"points":"0"
	},
		{
		"name":"Nadia Tsupryk",
		"points":"0"
	},
			{
		"name":"Ostap Bondar",
		"points":"0"
	},
			{
		"name":"Bohdan Lisovski",
		"points":"5"
	},
			{
		"name":"Maria Farion",
		"points":"0"
	}

	];

function sorting(){
	namefortable.sort((a, b) => b.points.localeCompare(a.points, undefined,{numeric: true}));

}

window.onload = function create(){
	sorting();
		var tbl = document.getElementById("myTable");
		 var tr = tbl.insertRow();
		var tr = document.createElement('tr');
		var td0 = document.createElement('td');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var place = 0;

 	 for(var i = 0; i < namefortable.length; i++){
    	    	place++;
        		var tr = tbl.insertRow();
            	 	
            	 	var td1 = tr.insertCell();
            	 	 
            	  var td0 = tr.insertCell(); 
            	   var td2 = tr.insertCell();
            	   td1.innerHTML = place;
            	 td0.innerHTML = namefortable[i].name;
				 td2.innerHTML = namefortable[i].points;

				         
        }
  }
    var a_go_oNas = document.getElementById('go_oNas');
    var a_go_tbl = document.getElementById('go_tbl');
 

    

   a_go_oNas.onclick = function fdf() {
 document.location.href = '#footer';

            }
a_go_tbl.onclick = function doitd() {
    document.location.href = '#currentShift';
    myFunction();
            }
