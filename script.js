 let nameofturned = new Array(
 					"Olasiuk Anastasiia",
 					"Demchyk Nazar",
 					"Vietrova Viktoriia",
 					"Nahaievska Marharyta",
 					"Maria Farion",
 					"Horblianskyi Mykhailo",
 					"Horaichuk Daryna",
 					"Ostap Bondar",
 					"Bohdan Lisovski",
 					 );
/*  var nameofturned = new Array("Mikhailov Dmytro && Krasun Vadym",
	 				"Oleksandr Serhieiev && Artem Kozak",
 					"Olasiuk Anastasiia && Demchyk Nazar",
 					"Vietrova Viktoriia && Nahaievska Marharyta",
 					"Kapsewych Illia && Pasechnyk Dmitriy",
 					"Gabruk Maksym && Iuzefovych Vladyslav",
 					"Zhuk Sasza && Nazaruk Maksim",
 					"Horblianskyi Mykhailo && Fliunder Maksym",
 					"Rudyk Ivanka && Horaichuk Daryna",
 					"Zahaniakha Daria && Nadia Tsupryk",
 					"Dzień jest wolny!");*/
	let dz = document.getElementById("currentShift");
	today = new Date;
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
	}else if(day == 10 || day == 20 | day == 30 ){
		dz.innerHTML = nameofturned[Math.floor((Math.random() * 8))];
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
		"points":"0"
	},
	{
		"name":"Krasun Vadym",
		"points":"0"
	},
	{
		"name":"Oleksandr Serhieiev",
		"points":"0"
	},
	{
		"name":"Artem Kozak",
		"points":"0"
	},
		{
		"name":"Olasiuk Anastasiia",
		"points":"3"
	},
		{
		"name":"Demchyk Nazar",
		"points":"3"
	},
		{
		"name":"Vietrova Viktoriia",
		"points":"3"
	},
		{
		"name":"Nahaievska Marharyta",
		"points":"3"
	},
		{
		"name":"Kapsewych Illia",
		"points":"0"
	},
		{
		"name":"Pasechnyk Dmitriy",
		"points":"0"
	},
		{
		"name":"Gabruk Maksym",
		"points":"3"
	},
		{
		"name":"Iuzefovych Vladyslav",
		"points":"0"
	},
		{
		"name":"Zhuk Sasza",
		"points":"0"
	},
		{
		"name":"Nazaruk Maksim",
		"points":"0"
	},

		{
		"name":"Horblianskyi Mykhailo",
		"points":"3"
	},
		{
		"name":"Fliunder Maksym",
		"points":"6"
	},
		{
		"name":"Rudyk Ivanka",
		"points":"3"
	},
		{
		"name":"Horaichuk Daryna",
		"points":"3"
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
		"points":"3"
	},
			{
		"name":"Bohdan Lisovski",
		"points":"0"
	},
	 {
		"name":"Oleg Hlushko",
		"points":"3"
	},
			{
		"name":"Maria Farion",
		"points":"3"
	}
		//PAŹDZIERNIK
 	/*{
		"name":"Mikhailov Dmytro",
		"points":"6"
	},
	{
		"name":"Krasun Vadym",
		"points":"6.5"
	},
	{
		"name":"Oleksandr Serhieiev",
		"points":"6.5"
	},
	{
		"name":"Artem Kozak",
		"points":"6"
	},
		{
		"name":"Olasiuk Anastasiia",
		"points":"11.5"
	},
		{
		"name":"Demchyk Nazar",
		"points":"11.5"
	},
		{
		"name":"Vietrova Viktoriia",
		"points":"2.5"
	},
		{
		"name":"Nahaievska Marharyta",
		"points":"3"
	},
		{
		"name":"Kapsewych Illia",
		"points":"3"
	},
		{
		"name":"Pasechnyk Dmitriy",
		"points":"8"
	},
		{
		"name":"Gabruk Maksym",
		"points":"7"
	},
		{
		"name":"Iuzefovych Vladyslav",
		"points":"7"
	},
		{
		"name":"Zhuk Sasza",
		"points":"3"
	},
		{
		"name":"Nazaruk Maksim",
		"points":"6"
	},

		{
		"name":"Horblianskyi Mykhailo",
		"points":"7"
	},
		{
		"name":"Fliunder Maksym",
		"points":"6"
	},
		{
		"name":"Rudyk Ivanka",
		"points":"0.5"
	},
		{
		"name":"Horaichuk Daryna",
		"points":"8"
	},
		{
		"name":"Zahaniakha Daria",
		"points":"6"
	},
		{
		"name":"Nadia Tsupryk",
		"points":"6"
	},
			{
		"name":"Ostap Bondar",
		"points":"6"
	},
			{
		"name":"Bohdan Lisovski",
		"points":"9"
	},
			{
		"name":"Maria Farion",
		"points":"8"
	}
*/

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
