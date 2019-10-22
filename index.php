<html>	
<head>



<!-- META -->

<meta charset="utf-8"/>
<meta name="keywords" content="julen, castillo, portfolio, diseño, web, developer, desarrollo, programar, currículum, design, internet, html, css, js, javascript"/>
<meta name="author" content="Julen Castillo Gómez"/>
<meta name="description" content="Julen Castillo, diseñador web. Mi portfolio. Bienvenid@."/>
<meta name="language" content="ES"/>
<meta name="robots" charset="index, follow"/>
<meta name="revised" content="fecha"/>    <!-- PONER FECHA!!!! -->
<meta name="viewport" content="width= device-width, initial-scale=1.0"/>


<!-- ENLACES EXTERNOS -->

<link rel="stylesheet" type="text/css" href="css/normalize.css"/>
<link rel="stylesheet" type="text/css" href="css/estilos.css"/>
<link rel="shortcut icon" href="images/favicon.png" /> 
<link href="https://fonts.googleapis.com/css?family=Advent+Pro|Philosopher&display=swap" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

 <title>Julen Castillo | Diseñador Web</title>
 
</head>
	<body onScroll="scrollAnim1()">

		
		<div id="contenedor">
			<div id="contenedor0">


			<div class="puerta" id="puerta1"></div>
			<div class="puerta" id="puerta2"></div>


				<header>
					<div id="foto"><h2 id="hazclick" onClick="presenton()">Haz click <span>para empezar</span></h2></div>
					<a href="#oprogs" class="suave"><div class="menu" id="menu1" onClick="menuActive(this)"><h4>Habilidades</h4><div class="underline" id="undmenu"></div></div></a>
					<a href="#titlng" class="suave"><div class="menu" id="menu2" onClick="menuActive(this)"><h4>Lenguajes</h4><div class="underline" id="undmenu2"></div></div></a>
					<div class="menu" id="menu3" onClick="menuActive(this), contactacion()"><h4>Contacto</h4><div class="underline" id="undmenu3"></div></div>
					<div id="nombremio"><h1>Julen Castillo</h1>
						<div id="barritita"></div>
						<h2>Programador Front-End</h2>
					</div>
					<a href="#"><div id="dcurricu">
						<h3>Descargar CV</h3>
					</div></a>
					<div id="info">
						<img src="images/fono.png" alt="Icono de un teléfono" class="icono"/><h4>658840513</h4>
						<img src="images/email.png" alt="Icono de correo" class="icono"/><h4>julencas.gomez@gmail.com</h4>
					</div>

				</header>
					

				<div id="contacto">

					<form action="" method="POST" onSubmit="return valtodo()">

					
					<div class="formo">
						<h2><label for="nom">Nombre</label></h2><input type="text" id="nom" placeholder="Escribe tu nombre" name="nombre"/>
					</div>

					<div class="formo">
						<h2><label for="ema">Email</label></h2><input type="text" id="ema" placeholder="Escribe tu email" name="correo"/>
					</div>

					<div class="formo">
						<h2><label for="emp">Empresa</label></h2><input type="text" id="emp" placeholder="Escribe el nombre de tu empresa" name="empresa"/>
					</div>

					<div class="formo">
						<h2><label for="tfn">Teléfono</label></h2><input type="tel" id="tfn" placeholder="666555444" name="telefono"/>
					</div>
					
					<div class="formo">
						<h2><label for="mens">Motivo de contacto</label></h2><textarea id="mens" placeholder="Escribe el motivo de tu mensaje" name="comentario"></textarea>
					</div>


					<input type="image" id="casa" src="images/send.png"/>
					

					</form>
				</div>


				<a href="#contenedor"><div id="fixsubir"></div></a>




	<!-- Empieza el contenido de la página -->

				<div id="contenido">
					
					<div id="paginas">



						<div id="transp" onClick="slide()"><img src="images/flecha.png" alt="Flecha para ir a la siguiente página web." id="arright"></div>
						<div id="desplazado">




<!-- PÁGINA 1 -->

						<div class="smallcont" id="smallcont1" onClick="description1(this)">


							<div class="web" id="web1">
								<div class="enlace" id="linkito1">
									<a href="http://julencasindesign.000webhostapp.com/TTC/" target="_blank">Ir a la página</a>
							</div>
							</div>


							<div id="webdesc1">
								<p>Technology To Come es una web sobre las últimas novedades en la tecnología, los últimos descubrimientos y lo que está en desarrollo y que podría llegar en los próximos años.</p><p>Para hacerla utilicé HTML y CSS.</p>
							</div>


							


						</div>


						<h2 class="nombpag">
							Technology To Come
						</h2>


<!-- PÁGINA 2 -->

						<div class="smallcont" id="smallcont2" onClick="description2(this)">
							<div class="web" id="web2">
								<div class="enlace" id="linkito2">
									<a href="http://julencasindesign.000webhostapp.com/juegodemesa/" target="_blank">Ir a la página</a>
								</div>
							</div>

							<div id="webdesc2">
								<p>Es una página buscando llamar la atención sobre los juegos de rol de mesa, de papel y lápiz. La diversión más clásica para aficionados a la fantasía.</p><p>Para hacerla usé HTML y CSS.</p>
							</div>
							
						</div>
						<h2 class="nombpag">
							Card Board Fun
						</h2>



<!-- PÁGINA 3 -->

						<div class="smallcont" id="smallcont3" onClick="description3(this)">
							<div class="web" id="web3">
								<div class="enlace" id="linkito3">
									<a href="http://julencasindesign.000webhostapp.com/elbow/" target="_blank">Ir a la página</a>
							</div>
							</div>

							<div id="webdesc3">
								<p>Esta landing page es sobre Elbow, un reproductor de cassettes portátil de diseño que no llegó a lanzarse al mercado.</p><p>Está hecha con HTML y CSS.</p>
							</div>
							
						</div>
						<h2 class="nombpag">
							Elbow
						</h2>



<!-- PÁGINA 4 -->

						<div class="smallcont" id="smallcont4" onClick="description4(this)">
							<div class="web" id="web4">
								<div class="enlace" id="linkito4">
									<a href="http://julencasindesign.000webhostapp.com/projectspace/" target="_blank">Ir a la página</a>
							</div>
							</div>

							<div id="webdesc4">
								<p>Como amante de la ciencia ficción, los viajes espaciales es un tema que me gustaría llegar a vivir, y en gran parte es el motivo por el que decidí dedicarle mi segunda página a ello.</p><p>Hecha con HTML y CSS.</p>
							</div>
							
						</div>
						<h2 class="nombpag">
							Project Space
						</h2>



<!-- PÁGINA 5 -->

						<div class="smallcont" id="smallcont5" onClick="description5(this)">
							<div class="web" id="web5">
								<div class="enlace" id="linkito5">
									<a href="http://julencasindesign.000webhostapp.com/formulariohotel/" target="_blank">Ir a la página</a>
							</div>
							</div>

							<div id="webdesc5">
								<p>Esto es un ejercicio de formulario, validaciones y confirmaciones con la temática de reservas de habitación en un hotel.</p><p>Hecho con HTML, CSS y JS.</p>
							</div>
							
						</div>
						<h2 class="nombpag">
							The Hotele
						</h2>
					</div>
					</div>



<!-- Lenguajes de programación que conozco -->


					<h2 id="titlng">Lenguajes de Programación</h2>

					<div id="lenguajes">
						<div id="lngizquierda">
							<div class="lngiz" id="lng1"><div class="imgizq" id="imgizq1"></div><h2 id="nomblng1">HTML 5</h2></div>
							<div class="lngiz" id="lng3"><div class="imgizq" id="imgizq2"></div><h2 id="nomblng2">JAVASCRIPT</h2></div>
							<div class="lngiz" id="lng5"><div class="imgizq" id="imgizq3"></div><h2 id="nomblng3">WORDPRESS</h2></div>
						</div>
						
							<div id="barrita"></div>


						<div id="lngderecha">
							<div class="lngder" id="lng2"><div class="imgder" id="imgder1"></div><h2 id="nomblng4">CSS 3</h2></div>
							<div class="lngder" id="lng4"><div class="imgder" id="imgder2"></div><h2 id="nomblng5">BOOTSTRAP</h2></div>
						</div>
					</div>





<!-- Otros conocimientos útiles -->

					<div id="oprogs">

						<h2>Otros conocimientos:</h2>

						<div class="progros" id="progro1"><div class="titprog"><h3>Adobe PhotoShop</h3></div></div>
						<div class="progros" id="progro2"><div class="titprog"><h3>Adobe Illustrator</h3></div></div>
						<div class="progros" id="progro3"><div class="titprog"><h3>Blender</h3></div></div>
						<div class="progros" id="progro4"><div class="titprog"><h3>Cinema 4D</h3></div></div>
						
						
						
						<a href="#contenedor"><img src="images/arriba.png" alt="Flecha ancla para volver al inicio" id="arribarrow"/></a>
					</div>


				</div>

				<footer>
					<h4 id="cont" onClick="contactacion()"><a href="#contacto">Contacto</a></h4>
					<h4>Julen Castillo Gómez | Portfolio</h4>
					<h4 id="blog">Blog con Wordpress</h4>
				</footer>
			</div>
		</div>








<!-- PHP PARA EL CORREO -->

		
		<?php
			error_reporting(E_ERROR | E_WARNING | E_PARSE);
		
				if (isset($_POST["nombre"] )){	error_reporting(E_ERROR | E_WARNING | E_PARSE);

					$nombre=$_POST["nombre"];
					$mail=$_POST["email"];
					$empresa=$_POST["empresa"];
					$telefono=$_POST["telefono"];
					$comentario=$_POST["comentario"];
					

					$destinatario = "julencas.desarrollo@gmail.com";//email de la persona que quiero enviar
					$asunto = "Solicitud de Informacion";
					$cuerpo = '
					<html>
					<head>
					   <title>Datos de contacto</title>
					</head>
					<body>
					
					<h3 style=" color:#738ba0;">Datos de contacto</h3>
					
					<p><b style=" color:#738ba0;">Nombre:</b> '.$nombre.'</p>
					<p><b style=" color:#738ba0;">Mail:</b> '.$mail.'</p>
					<p><b style=" color:#738ba0;">Empresa:</b> '.$empresa.'</p>
					<p><b style=" color:#738ba0;">Telefono:</b> '.$telefono.'</p>
					<p><b style=" color:#738ba0;">Comentario:</b></p>
					<p>'.$comentario.'</p>


					</body>
					</html>
					';

					//para el envio en formato HTML
					$headers = "MIME-Version: 1.0\r\n";
					$headers .= "Content-type: text/html; charset=UTF-8 \r\n";

					//dirección del remitente, el nuestro o de la pagina web
					$headers .= "From: julencas.gomez@gmail.com\r\n";

					//dirección de respuesta, si queremos que sea distinta que la del remitente
					$headers .= "Reply-To: " .$mail. "\r\n";

					//ruta del mensaje desde origen a destino
					$headers .= "Return-path: info@desdelaline.es\r\n";

					//direcciones que recibiran copia
					$headers .= "Cc: info@desdelaline.com\r\n";

					///direcciones que recibiran copia oculta
				/*	$headers .= "Bcc:\r\n";*/

					mail($destinatario,$asunto,$cuerpo,$headers);

					 
					
						
						
					}
						
					
						
					?>	



		












		<script type="text/javascript" src="js/javascript.js"></script>
	</body>	    
</html>