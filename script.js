 var nameofturned = new Array("Mikhailov Dmytro && Krasun Vadym",
	 				"Oleksandr Serhieiev && Artem Kozak",
 					"Olasiuk Anastasiia && Demchyk Nazar",
 					"Vietrova Viktoriia && Nahaievska Marharyta",
 					"Kapsewych Illia && Pasechnyk Dmitriy",
 					"Gabruk Maksym && Iuzefovych Vladyslav",
 					"Zhuk Sasza && Nazaruk Maksim",
 					"Horblianskyi Mykhailo && FliunqDMPWE'LGWA'E  HK;R WNFGNWLEM'DDS K/Vder Maksym",
 					"Rudyk Ivanka && Horaichuk Daryna",
 					"Zahaniakha Daria && Nadia Tsupryk",
 					"Dzień jest wolny!");

	var dz = document.getElementById("currentShift");
	var today = new Date();
	var day = today.getDate();
	if(day == 1 || day == 11, day == 21 ){
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
    return; // Do nothing if event already handled
  }
	var InAdmin = document.getElementById("adnimin");
	if(event.altKey && event.code === "KeyJ"){
		InAdmin.style.display = "block";

	}
})

function checkinfo(){


	var login = document.getElementById("name").value;
	var password = document.getElementById("password").value;
	var ap = document.getElementById("ADMINPANEL");
	var _0x1ecf=["\x61\x64\x6D\x69\x6E","\x31\x32\x33"];
	if(login == _0x1ecf[0] && password == _0x1ecf[1]){
		ap.style.display = "block";

	}
	
}
function addpoint(){
	var valin = document.getElementsByName("pointinput").value;
	valin += 1;
}
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
  } else {
    document.getElementById("myTopnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
window.onload = function scroll(){
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 

}

var rows,name,point;
 var namefortable = new Array(
 					"Mikhailov Dmytro",
  					"Krasun Vadym",
	 				"Oleksandr Serhieiev",
	 				"Artem Kozak",
 					"Olasiuk Anastasiia",
 					"Demchyk Nazar",
 					"Vietrova Viktoriia ",
 					"Nahaievska Marharyta",
 					"Kapsewych Illia ",
 					"Pasechnyk Dmitriy",
 					"Gabruk Maks ym",
 					"Iuzefovych Vladyslav",
 					"Zhuk Sasza",
 					"Nazaruk Maksim",
 					"Horblianskyi Mykhailo",
 					"Fluider Maksym",
 					"Rudyk Ivanka",
 					"Horaichuk Daryna",
 					"Zahaniakha Daria",
 					"Nadia Tsupryk",
 					"Ostap Bondar",
 					"Bohdan Lisnyckyi"
 					);


window.onload = function sort(){
		var tbl = document.getElementById("myTable");
		 var tr = tbl.insertRow();
		var tr = document.createElement('tr');
		var td0 = document.createElement('td');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
    	    for(var i = 0; i < namefortable.length; i++){
        		var tr = tbl.insertRow();
            	 	
            	 	var td1 = tr.insertCell();
            	 	 td1.innerHTML = i;
            	  var td0 = tr.insertCell(); 
            	   var td2 = tr.insertCell();

            	 td0.innerHTML = namefortable[i];
				 td2.innerHTML = "0";
				           
        }
     
}
