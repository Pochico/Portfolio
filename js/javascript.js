
















//VALIDACIÓN FORMULARIO CONTACTO

function valtodo(){




//VALIDAR NOMBRE

	var nombre = document.getElementById("nom").value;

	if(nombre<2){
		alert("El nombre debe contener al menos 3 caracteres.");
		return false;
	}
	else if(nombre==""){
		alert("Debe rellenar el campo de NOMBRE");
		return false;
	}
	else{
		
	}

//FIN VALIDAR NOMBRE


//VALIDAR EMAIL

	var correo = document.getElementById("ema").value;
	var arroba = correo.indexOf("@");
	var punto = correo.lastIndexOf(".");
	var prearroba = correo.substring(0, arroba);
	var prepunto = correo.substring(arroba+1, punto);
	var pospunto = correo.substring(punto+1);

	if(prearroba>2 && prepunto>1 && punto>arroba && pospunto>=2){
		alert("ole");
	}
	else if(correo==""){
		alert("Debe completar antes el campo EMAIL.");
		return false;
	}
	else if(prearroba<2 || prepunto<1 || punto<arroba || pospunto<2){
		alert("Ha habido un problemilla con el campo EMAIL, por favor, asegúrese de que lo ha escrito correctamente.");
		return false;
	}

//FIN VALIDAR EMAIL


//VALIDAR TELÉFONO MÓVIL

	var telefono = document.getElementById("tfn").value;
	var telefonoL = telefono.length;
	var primer = telefono.substring(0,1);


	if(primer>5 && primer<8 && telefonoL==9){

	}
	else if(telefono==""){
		alert("Debe completar antes el campo TELÉFONO MÓVIL.");
		return false;
	}
	else{
		alert("Ha habido un error con el campo TELÉFONO MÓVIL, por favor, revise que lo escribió correctamente, gracias.");
		return false;
	}

//FIN DE VALIDAR TELÉFONO MÓVIL

}



//ANCLAS SUAVES

	$(document).ready(function () {

		$('a.suave').click(function(e){

			e.preventDefault();

			$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 600	/*tiempo que tarda la animacion, solo modificar esto*/);

		});

	});





//JS RESPONSIVE

if(screen.width <= 600){






//----------------------------MÓVIL----------------------------







	var move = 0;


	function slide(){

		if(move<=-1700){
			move = 0;

			document.getElementById("desplazado").style.marginLeft = move+"px";
		}
		else{
			move = move-480;

			document.getElementById("desplazado").style.marginLeft = move+"px";
		}
		


	 if(document.getElementById("smallcont1").style.width != "300px" || document.getElementById("smallcont2").style.width != "300px" ||document.getElementById("smallcont3").style.width != "300px" || document.getElementById("smallcont4").style.width != "300px" || document.getElementById("smallcont5").style.width != "300px"){

		document.getElementById("smallcont1").style.width = "300px";
		document.getElementById("smallcont2").style.width = "300px";
		document.getElementById("smallcont3").style.width = "300px";
		document.getElementById("smallcont4").style.width = "300px";
		document.getElementById("smallcont5").style.width = "300px";


			opacidad0(1);
			opacidad0(2);
			opacidad0(3);
			opacidad0(4);
			opacidad0(5);



	}
		
	}




	function menuActive(x){



		if(x.id=="menu1"){
			document.getElementById("undmenu").style.width = "100%";
			document.getElementById("undmenu2").style.width = "0px";
			document.getElementById("undmenu3").style.width = "0px";
		}
		else if(x.id=="menu2"){
			document.getElementById("undmenu").style.width = "0px";
			document.getElementById("undmenu2").style.width = "100%";
			document.getElementById("undmenu3").style.width = "0px";
		}
		else if(x.id=="menu3"){
			if(document.getElementById("undmenu3").style.width!="100%"){
				document.getElementById("undmenu3").style.width="100%";
			}
			else if(document.getElementById("undmenu3").style.width!="0px"){
				document.getElementById("undmenu3").style.width="0px";
			}

			document.getElementById("undmenu").style.width = "0px";
			document.getElementById("undmenu2").style.width = "0px";
		}
	}


	function scrollAnim1(){
		if(document.body.scrollTop > 2580 || document.documentElement.scrollTop > 2580){
			document.getElementById("lng1").style.width = "350px";
			document.getElementById("lng2").style.width = "350px";
			document.getElementById("lng3").style.width = "350px";
			document.getElementById("lng4").style.width = "350px";
			document.getElementById("lng5").style.width = "350px";


			document.getElementById("nomblng1").style.opacity = 1;
			document.getElementById("nomblng2").style.opacity = 1;
			document.getElementById("nomblng3").style.opacity = 1;
			document.getElementById("nomblng4").style.opacity = 1;
			document.getElementById("nomblng5").style.opacity = 1;
		}
		else if(document.body.scrollTop < 2580 || document.documentElement.scrollTop < 2580){

			document.getElementById("lng1").style.width = "0px";
			document.getElementById("lng2").style.width = "0px";
			document.getElementById("lng3").style.width = "0px";
			document.getElementById("lng4").style.width = "0px";
			document.getElementById("lng5").style.width = "0px";


			document.getElementById("nomblng1").style.opacity = 0;
			document.getElementById("nomblng2").style.opacity = 0;
			document.getElementById("nomblng3").style.opacity = 0;
			document.getElementById("nomblng4").style.opacity = 0;
			document.getElementById("nomblng5").style.opacity = 0;
		}

	}



	setTimeout('presenton()',5500);


	function presenton(){

		document.getElementById("menu1").style.opacity = 1;
		document.getElementById("menu2").style.opacity = 1;
		document.getElementById("menu3").style.opacity = 1;

		document.getElementById("menu3").style.transitionDelay = ".3s";
		document.getElementById("menu2").style.transitionDelay = ".6s";
		document.getElementById("menu1").style.transitionDelay = ".9s";

		document.getElementById("foto").style.width = "120px";
		document.getElementById("foto").style.height = "120px";
		document.getElementById("foto").style.transition = ".9s";
		document.getElementById("foto").style.left = "5%";

		document.getElementById("hazclick").style.display = "none";

		document.getElementById("puerta1").style.height = "0px";
		document.getElementById("puerta1").style.transition = "1s";
		document.getElementById("puerta1").style.transitionDelay = ".4s";

		document.getElementById("nombremio").style.opacity = 1;
		document.getElementById("nombremio").style.transition = "2s";

		document.getElementById("dcurricu").style.opacity = 1;
		document.getElementById("dcurricu").style.transition = "3s";

		document.getElementById("info").style.opacity = 1;
		document.getElementById("info").style.transition = "1.5s";

	}

	var num;



	function opacidad1 (num){
			document.getElementById("webdesc" + num).style.opacity = 1;
			document.getElementById("webdesc" + num).style.transitionDelay = ".5s";
			document.getElementById("webdesc" + num).style.transition = ".2s";
			document.getElementById("linkito" + num).style.marginTop = "270px";
			document.getElementById("smallcont" + num).style.width = "302px";
	}

	function opacidad0 (num){
			document.getElementById("webdesc" + num).style.opacity = 0;
			document.getElementById("webdesc" + num).style.transitionDelay = ".5s";
			document.getElementById("webdesc" + num).style.transition = ".2s";
			document.getElementById("linkito" + num).style.marginTop = "350px";
			document.getElementById("smallcont" + num).style.width = "300px";		
	}



	function description1(x){

	// PRIMERA PÁGINA



		if(x.style.width!="302px"){


			opacidad1(1);
			

			
		}
		else if(x.style.width!="300px"){

			
			opacidad0(1);
		}
	}

	function description2(x){
	//SEGUNDA PÁGINA

		if(x.style.width!="302px"){

			
			opacidad1(2);
			
		}
		else if(x.style.width!="300px"){

					
			opacidad0(2);
			
		}
	}

	function description3(x){
	//TERCERA PÁGINA

		if(x.style.width!="302px"){

			
			opacidad1(3);
		}
		else if(x.style.width!="300px"){

			
			opacidad0(3);
			
		}
	}

	function description4(x){
	//CUARTA PÁGINA

		if(x.style.width!="302px"){

			opacidad1(4);
		}
		else if(x.style.width!="300px"){

			
			opacidad0(4);
			
		}
	}

	function description5(x){
	//QUINTA PÁGINA

		if(x.style.width!="302px"){

			opacidad1(5);
		}
		else if(x.style.width!="300px"){
			
			opacidad0(5);

		}	

	}



	//HACER APARECER CONTACTO

	function contactacion(){

		if(document.getElementById("contacto").style.height!="620px"){

			document.getElementById("contacto").style.height = "620px";
			document.getElementById("undmenu3").style.width="100%";
			document.getElementById("larayita").style.width="30px";
			document.getElementById("larayita").style.height="30px";
			document.getElementById("larayita").style.border="0px";
			document.getElementById("larayita").style.borderRadius="25px";
			document.getElementById("larayita").style.margin="10px 510px";
			document.getElementById("larayita").style.paddingRight="0px";
			document.getElementById("larayita").style.paddingLeft="0px";
		}

		else if(document.getElementById("contacto").style.height!="30px"){

			document.getElementById("contacto").style.height = "30px";
			document.getElementById("undmenu3").style.width="0%";
			document.getElementById("larayita").style.width="100px";
			document.getElementById("larayita").style.height="5px";
			document.getElementById("larayita").style.paddingRight="430px";
			document.getElementById("larayita").style.paddingLeft="430px";
			document.getElementById("larayita").style.margin="3px 44px";



		}
		
	}

}
else if(screen.width>600 && screen.width<=1099){






//----------------------------TABLET----------------------------






	var move = 0;

	function slide(){

		if(move<=-2000){
			move = 0;

			document.getElementById("desplazado").style.marginLeft = move+"px";
		}
		else{
			move = move-510;

			document.getElementById("desplazado").style.marginLeft = move+"px";
		}
		


	 if(document.getElementById("smallcont1").style.width != "355px" || document.getElementById("smallcont2").style.width != "355px" ||document.getElementById("smallcont3").style.width != "355px" || document.getElementById("smallcont4").style.width != "355px" || document.getElementById("smallcont5").style.width != "355px"){

		document.getElementById("smallcont1").style.width = "355px";
		document.getElementById("smallcont2").style.width = "355px";
		document.getElementById("smallcont3").style.width = "355px";
		document.getElementById("smallcont4").style.width = "355px";
		document.getElementById("smallcont5").style.width = "355px";


			opacidad0(1);
			opacidad0(2);
			opacidad0(3);
			opacidad0(4);
			opacidad0(5);





	}
		
	}




	function menuActive(x){



		if(x.id=="menu1"){
			document.getElementById("undmenu").style.width = "100%";
			document.getElementById("undmenu2").style.width = "0px";
			document.getElementById("undmenu3").style.width = "0px";
		}
		else if(x.id=="menu2"){
			document.getElementById("undmenu").style.width = "0px";
			document.getElementById("undmenu2").style.width = "100%";
			document.getElementById("undmenu3").style.width = "0px";
		}
		else if(x.id=="menu3"){
			if(document.getElementById("undmenu3").style.width!="100%"){
				document.getElementById("undmenu3").style.width="100%";
			}
			else if(document.getElementById("undmenu3").style.width!="0px"){
				document.getElementById("undmenu3").style.width="0px";
			}

			document.getElementById("undmenu").style.width = "0px";
			document.getElementById("undmenu2").style.width = "0px";
		}
	}


	function scrollAnim1(){
		if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
			document.getElementById("lng1").style.width = "400px";
			document.getElementById("lng2").style.width = "400px";
			document.getElementById("lng3").style.width = "400px";
			document.getElementById("lng4").style.width = "400px";
			document.getElementById("lng5").style.width = "400px";


			document.getElementById("nomblng1").style.opacity = 1;
			document.getElementById("nomblng2").style.opacity = 1;
			document.getElementById("nomblng3").style.opacity = 1;
			document.getElementById("nomblng4").style.opacity = 1;
			document.getElementById("nomblng5").style.opacity = 1;
		}
		else if(document.body.scrollTop < 300 || document.documentElement.scrollTop < 300){

			document.getElementById("lng1").style.width = "0px";
			document.getElementById("lng2").style.width = "0px";
			document.getElementById("lng3").style.width = "0px";
			document.getElementById("lng4").style.width = "0px";
			document.getElementById("lng5").style.width = "0px";


			document.getElementById("nomblng1").style.opacity = 0;
			document.getElementById("nomblng2").style.opacity = 0;
			document.getElementById("nomblng3").style.opacity = 0;
			document.getElementById("nomblng4").style.opacity = 0;
			document.getElementById("nomblng5").style.opacity = 0;
		}

	}



	setTimeout('presenton()',5500);


	function presenton(){

		document.getElementById("menu1").style.opacity = 1;
		document.getElementById("menu2").style.opacity = 1;
		document.getElementById("menu3").style.opacity = 1;

		document.getElementById("menu3").style.transitionDelay = ".3s";
		document.getElementById("menu2").style.transitionDelay = ".6s";
		document.getElementById("menu1").style.transitionDelay = ".9s";

		document.getElementById("foto").style.width = "225px";
		document.getElementById("foto").style.height = "225px";
		document.getElementById("foto").style.transition = ".9s";
		document.getElementById("foto").style.marginLeft = "25px";
		document.getElementById("foto").style.marginTop = "25px";

		document.getElementById("hazclick").style.display = "none";

		document.getElementById("puerta1").style.height = "0px";
		document.getElementById("puerta1").style.transition = "1s";
		document.getElementById("puerta1").style.transitionDelay = ".4s";

		document.getElementById("nombremio").style.opacity = 1;
		document.getElementById("nombremio").style.transition = "2s";

		document.getElementById("dcurricu").style.opacity = 1;
		document.getElementById("dcurricu").style.transition = "3s";

		document.getElementById("info").style.opacity = 1;
		document.getElementById("info").style.transition = "1.5s";

	}

	var num;



	function opacidad1 (num){
			document.getElementById("webdesc" + num).style.opacity = 1;
			document.getElementById("webdesc" + num).style.transitionDelay = ".5s";
			document.getElementById("webdesc" + num).style.transition = ".2s";
			document.getElementById("linkito" + num).style.marginTop = "270px";
			document.getElementById("smallcont" + num).style.width = "475px";
	}

	function opacidad0 (num){
			document.getElementById("webdesc" + num).style.opacity = 0;
			document.getElementById("webdesc" + num).style.transitionDelay = ".5s";
			document.getElementById("webdesc" + num).style.transition = ".2s";
			document.getElementById("linkito" + num).style.marginTop = "350px";
			document.getElementById("smallcont" + num).style.width = "355px";
			
			
	}



	function description1(x){
	// PRIMERA PÁGINA



		if(x.style.width!="475px"){


			opacidad1(1);
			

			
		}
		else if(x.style.width!="355px"){

			
			opacidad0(1);
		}
	}

	function description2(x){
	//SEGUNDA PÁGINA

		if(x.style.width!="475px"){

			
			opacidad1(2);
			
		}
		else if(x.style.width!="355px"){

					
			opacidad0(2);
			
		}
	}

	function description3(x){
	//TERCERA PÁGINA

		if(x.style.width!="475px"){

			
			opacidad1(3);
		}
		else if(x.style.width!="355px"){

			
			opacidad0(3);
			
		}
	}

	function description4(x){
	//CUARTA PÁGINA

		if(x.style.width!="475px"){

			opacidad1(4);
		}
		else if(x.style.width!="355px"){

			
			opacidad0(4);
			
		}
	}

	function description5(x){
	//QUINTA PÁGINA

		if(x.style.width!="475px"){

			opacidad1(5);
		}
		else if(x.style.width!="355px"){
			
			opacidad0(5);

		}


		

	}



	//HACER APARECER CONTACTO

	function contactacion(){

		if(document.getElementById("contacto").style.height!="750px"){

			document.getElementById("contacto").style.height = "750px";
			document.getElementById("undmenu3").style.width="100%";

			document.getElementById("larayita").style.width="30px";
			document.getElementById("larayita").style.height="30px";
			document.getElementById("larayita").style.border="0px";
			document.getElementById("larayita").style.borderRadius="25px";
			document.getElementById("larayita").style.margin="10px 510px";
			document.getElementById("larayita").style.paddingRight="0px";
			document.getElementById("larayita").style.paddingLeft="0px";
		}
		else if(document.getElementById("contacto").style.height!="30px"){

			document.getElementById("contacto").style.height = "30px";
			document.getElementById("undmenu3").style.width="0%";
			document.getElementById("larayita").style.width="100px";
			document.getElementById("larayita").style.height="5px";
			document.getElementById("larayita").style.paddingRight="430px";
			document.getElementById("larayita").style.paddingLeft="430px";
			document.getElementById("larayita").style.margin="3px 44px";



		}
		
	}

}
else if(screen.width>=1100){







//----------------------------ORDENADOR----------------------------






		var move = 0;


	function slide(){

		if(move<=-2000){
			move = 0;

			document.getElementById("desplazado").style.marginLeft = move+"px";
		}
		else{
			move = move-570;

			document.getElementById("desplazado").style.marginLeft = move+"px";
		}
		


	 if(document.getElementById("smallcont1").style.width != "425px" || document.getElementById("smallcont2").style.width != "425px" ||document.getElementById("smallcont3").style.width != "425px" || document.getElementById("smallcont4").style.width != "425px" || document.getElementById("smallcont5").style.width != "425px"){

		document.getElementById("smallcont1").style.width = "375px";
		document.getElementById("smallcont2").style.width = "375px";
		document.getElementById("smallcont3").style.width = "375px";
		document.getElementById("smallcont4").style.width = "375px";
		document.getElementById("smallcont5").style.width = "375px";


			opacidad0(1);
			opacidad0(2);
			opacidad0(3);
			opacidad0(4);
			opacidad0(5);



	}
		
	}




	function menuActive(x){



		if(x.id=="menu1"){
			document.getElementById("undmenu").style.width = "100%";
			document.getElementById("undmenu2").style.width = "0px";
			document.getElementById("undmenu3").style.width = "0px";
		}
		else if(x.id=="menu2"){
			document.getElementById("undmenu").style.width = "0px";
			document.getElementById("undmenu2").style.width = "100%";
			document.getElementById("undmenu3").style.width = "0px";
		}
		else if(x.id=="menu3"){
			if(document.getElementById("undmenu3").style.width!="100%"){
				document.getElementById("undmenu3").style.width="100%";
			}
			else if(document.getElementById("undmenu3").style.width!="0px"){
				document.getElementById("undmenu3").style.width="0px";
			}

			document.getElementById("undmenu").style.width = "0px";
			document.getElementById("undmenu2").style.width = "0px";
		}
	}


	function scrollAnim1(){
		if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
			document.getElementById("lng1").style.width = "400px";
			document.getElementById("lng2").style.width = "400px";
			document.getElementById("lng3").style.width = "400px";
			document.getElementById("lng4").style.width = "400px";
			document.getElementById("lng5").style.width = "400px";


			document.getElementById("nomblng1").style.opacity = 1;
			document.getElementById("nomblng2").style.opacity = 1;
			document.getElementById("nomblng3").style.opacity = 1;
			document.getElementById("nomblng4").style.opacity = 1;
			document.getElementById("nomblng5").style.opacity = 1;
		}
		else if(document.body.scrollTop < 300 || document.documentElement.scrollTop < 300){

			document.getElementById("lng1").style.width = "0px";
			document.getElementById("lng2").style.width = "0px";
			document.getElementById("lng3").style.width = "0px";
			document.getElementById("lng4").style.width = "0px";
			document.getElementById("lng5").style.width = "0px";


			document.getElementById("nomblng1").style.opacity = 0;
			document.getElementById("nomblng2").style.opacity = 0;
			document.getElementById("nomblng3").style.opacity = 0;
			document.getElementById("nomblng4").style.opacity = 0;
			document.getElementById("nomblng5").style.opacity = 0;
		}

	}



	setTimeout('presenton()',5500);


	function presenton(){

		document.getElementById("menu1").style.opacity = 1;
		document.getElementById("menu2").style.opacity = 1;
		document.getElementById("menu3").style.opacity = 1;

		document.getElementById("menu3").style.transitionDelay = ".3s";
		document.getElementById("menu2").style.transitionDelay = ".6s";
		document.getElementById("menu1").style.transitionDelay = ".9s";

		document.getElementById("foto").style.width = "225px";
		document.getElementById("foto").style.height = "225px";
		document.getElementById("foto").style.transition = ".9s";
		document.getElementById("foto").style.marginLeft = "25px";
		document.getElementById("foto").style.marginTop = "25px";

		document.getElementById("hazclick").style.display = "none";

		document.getElementById("puerta1").style.height = "0px";
		document.getElementById("puerta1").style.transition = "1s";
		document.getElementById("puerta1").style.transitionDelay = ".4s";

		document.getElementById("nombremio").style.opacity = 1;
		document.getElementById("nombremio").style.transition = "2s";

		document.getElementById("dcurricu").style.opacity = 1;
		document.getElementById("dcurricu").style.transition = "3s";

		document.getElementById("info").style.opacity = 1;
		document.getElementById("info").style.transition = "1.5s";

	}

	var num;



	function opacidad1 (num){
			document.getElementById("webdesc" + num).style.opacity = 1;
			document.getElementById("webdesc" + num).style.transitionDelay = ".5s";
			document.getElementById("webdesc" + num).style.transition = ".2s";
			document.getElementById("linkito" + num).style.marginTop = "270px";
			document.getElementById("smallcont" + num).style.width = "650px";
	}

	function opacidad0 (num){
			document.getElementById("webdesc" + num).style.opacity = 0;
			document.getElementById("webdesc" + num).style.transitionDelay = ".5s";
			document.getElementById("webdesc" + num).style.transition = ".2s";
			document.getElementById("linkito" + num).style.marginTop = "350px";
			document.getElementById("smallcont" + num).style.width = "425px";
			
			
	}



	function description1(x){
	// PRIMERA PÁGINA



		if(x.style.width!="650px"){


			opacidad1(1);
			

			
		}
		else if(x.style.width!="425px"){

			
			opacidad0(1);
		}
	}

	function description2(x){
	//SEGUNDA PÁGINA

		if(x.style.width!="650px"){

			
			opacidad1(2);
			
		}
		else if(x.style.width!="425px"){

					
			opacidad0(2);
			
		}
	}

	function description3(x){
	//TERCERA PÁGINA

		if(x.style.width!="650px"){

			
			opacidad1(3);
		}
		else if(x.style.width!="425px"){

			
			opacidad0(3);
			
		}
	}

	function description4(x){
	//CUARTA PÁGINA

		if(x.style.width!="650px"){

			opacidad1(4);
		}
		else if(x.style.width!="425px"){

			
			opacidad0(4);
			
		}
	}

	function description5(x){
	//QUINTA PÁGINA

		if(x.style.width!="650px"){

			opacidad1(5);
		}
		else if(x.style.width!="425px"){
			
			opacidad0(5);

		}


		

	}



	//HACER APARECER CONTACTO

	function contactacion(){

		if(document.getElementById("contacto").style.height!="750px"){

			document.getElementById("contacto").style.height = "750px";
			document.getElementById("undmenu3").style.width="100%";

			document.getElementById("larayita").style.width="30px";
			document.getElementById("larayita").style.height="30px";
			document.getElementById("larayita").style.border="0px";
			document.getElementById("larayita").style.borderRadius="25px";
			document.getElementById("larayita").style.margin="10px 510px";
			document.getElementById("larayita").style.paddingRight="0px";
			document.getElementById("larayita").style.paddingLeft="0px";
		}
		else if(document.getElementById("contacto").style.height!="30px"){

			document.getElementById("contacto").style.height = "30px";
			document.getElementById("undmenu3").style.width="0%";
			document.getElementById("larayita").style.width="100px";
			document.getElementById("larayita").style.height="5px";
			document.getElementById("larayita").style.paddingRight="430px";
			document.getElementById("larayita").style.paddingLeft="430px";
			document.getElementById("larayita").style.margin="3px 44px";



		}
		
	}
}




